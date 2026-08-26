import { ArticleHomePage, articlesHomePage } from "@/model/articlesHomePage";

export const getHomePageArticles = async (): Promise<ArticleHomePage[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  return articlesHomePage;
};

export const getHomePageArticle = async (id: number): Promise<ArticleHomePage | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  return articlesHomePage.find((article) => article.id === id);
};

