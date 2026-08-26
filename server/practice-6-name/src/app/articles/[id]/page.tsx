import { Typography } from "@mui/material";
import { getArticle } from "@/lib/article-api";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

const ArticleDetailPage = async ({ params }: ArticlePageProps) => {
  const { id } = await params;
  const article = await getArticle(Number(id));
  if (!article) notFound();

  return (
    <>
      <img src={article.image} alt={article.title} width={200} />
      <Typography variant="h4">
        {article.title}
      </Typography>
      <Typography variant="body1">
        {article.body}
      </Typography>
    </>
  );
};

export default ArticleDetailPage;

