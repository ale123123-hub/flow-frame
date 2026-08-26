
import { Article, articles } from "@/model/article";

export const getArticles = async (): Promise<Article[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // pretend network delay
  return articles;
};

export const getArticle = async (id: number): Promise<Article | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // pretend network delay
  return articles.find((article) => article.id === id);
};
export type { Article };

