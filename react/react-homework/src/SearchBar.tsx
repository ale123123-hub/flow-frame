import { useState } from "react";
import {
  Stack,
  TextField,
  Chip,
  Typography,
  Container,
} from "@mui/material";
import { Article } from "./AboutPage";

export const Category = {
  personal: "personal",
  writing: "writing",
  connect: "connect",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export interface ArticleItem {
  id: number;
  title: string;
  backgroundColor: string;
  content: string;
  image?: string;
  category: Category;
}

interface SearchBarProps {
  articles: ArticleItem[];
}

export const SearchBar = ({ articles }: SearchBarProps) => {
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
          <Stack spacing={2}>
            {filtered.map((item) => (
              <Article
                key={item.id}
                title={item.title}
                backgroundColor={item.backgroundColor}
                content={item.content}
                image={item.image}
                category={item.category}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  );
};