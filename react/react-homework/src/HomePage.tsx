import { Stack, Container } from '@mui/material';
import { articles } from './articles';
import './index.css'
import type { FC } from "react";

interface ArticleProps {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageURL: string;
}

const ArticleCard:FC<ArticleProps> = ({ title, category, excerpt,  date, imageURL }) => {
  return (
    <article>
        <img src={imageURL} alt={title} />
        <button>{category}</button>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{excerpt}</p>
    </article>
  );
};

export const HomePage=() => {
    return(
        <Container>
            <h1>The Food Ninja Blog</h1>
            <p>A blog about food, experiences, and recipes.</p>
            <Stack>
                {articles.map((article) => (
                    <ArticleCard
                    key={article.title}
                    title={article.title}
                    category={article.category}
                    excerpt={article.excerpt}
                    date={article.date}
                    imageURL={article.imageURL}
                    />
                ))
                }
            </Stack>
        </Container>
    );
};