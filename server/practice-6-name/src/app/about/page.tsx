
import { Typography, Stack } from "@mui/material";
import { getArticles } from "@/lib/article-api";
import Link from "next/link";

const ArticlesPage = async () => {
  const articles = await getArticles();
  return (
    <Stack spacing={1}>
      <Typography variant="h4">Food Ninja</Typography>
       <Typography variant="h5">Articles</Typography>
      
      {articles.map((article) => (
        <Link key={article.id} href={`/articles/${article.id}`}>
          <img src={article.image} alt={article.title} width={40} />
          {article.title}
        </Link>
      ))}
    </Stack>
  );
};

export default ArticlesPage;
