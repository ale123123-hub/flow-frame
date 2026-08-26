import { getHomePageArticles } from "@/lib/article-apiHomePage";

export default async function HomePage() {
  const articles = await getHomePageArticles();

  return (
    <main>
      <h1>My Articles</h1>

      {articles.map((article) => (
        <article key={article.id}>
          <img
            src={article.imageURL}
            alt={article.title}
            width={300}
          />

          <h2>{article.title}</h2>
          <p>{article.category}</p>
          <p>{article.excerpt}</p>
          <p>{article.date}</p>
        </article>
      ))}
    </main>
  );
}