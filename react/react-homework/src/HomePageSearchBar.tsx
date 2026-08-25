import { useState } from "react";
import {
  Stack,
  TextField,
  Chip,
  Typography,
  Container,
} from "@mui/material";

export const Category = {
  travel: "Travel",
  foodTheory: "Food Theory",
  recipes: "Recipes",
  restaurants: "Restaurants",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export interface ArticleHomePage {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageURL: string;
}

interface SearchBarProps {
  articles: ArticleHomePage[];
}

export const HomePageSearchBar = ({ articles }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | null>(null);


  const filtered = articles.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase().trim());
    const matchesCategory = category ? item.category === category : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <Container maxWidth="md" sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          fullWidth
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {Object.values(Category).map((c) => (
            <Chip
              key={c}
              label={c}
              clickable
              color={category === c ? "primary" : "default"}
              variant={category === c ? "filled" : "outlined"}
              onClick={() => setCategory(category === c ? null : c)}
            />
          ))}
        </Stack>
        
        {filtered.length === 0 ? (
          <Typography variant="body1" color="text.secondary" sx={{ py: 3, textAlign: "center" }}>
            No articles match your search.
          </Typography>
        ) : (
          <Stack spacing={3} sx={{ alignItems:"center"}}>
            {filtered.map((article) => (
              <article className="article-card" key={article.title}>
        <img src={article.imageURL} alt={article.title} />
        <div className="article-contentc">
        <span className="article-category">{article.category}</span>
        <h3>{article.title}</h3>
        <p className="article-date">{article.date}</p>
        <p className="article-excerpt">{article.excerpt}</p>
        </div>
    </article>
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  );
};