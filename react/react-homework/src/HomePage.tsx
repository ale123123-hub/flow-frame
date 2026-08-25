import { Container } from '@mui/material';
import { Header } from "./NavBar";

import { articles } from './articles';
import './index.css'
import type { FC } from "react";
import { HomePageSearchBar } from './HomePageSearchBar';

interface ArticleProps {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageURL: string;
}

export const ArticleCard:FC<ArticleProps> = ({ title, category, excerpt,  date, imageURL }) => {
  return (
    <article>
        <img src={imageURL} alt={title} />
        <button>{category}</button>
        <h3 style={{ color: "red"}}>{title}</h3>
        <p>{date}</p>
        <p style={{ fontStyle: "italic"}}>{excerpt}</p>
    </article>
  );
};

export const HomePage=() => {
    return(
        <Container 
        sx={{
        backgroundColor: "rgba(230, 249, 249, 0.99)",
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "2rem",
      }}
      >
        <Header />

            <h1 style={{ color: "black",  marginBottom: "20px" }}>The Food Ninja Blog</h1>
            <p style={{ color: "black",  marginTop: "0" }}>A blog about food, experiences, and recipes.</p>
            <HomePageSearchBar articles={articles} />
            <footer>
              <p>&copy; 2024 Food Ninja. All rights reserved.</p>
            </footer>
        </Container>
    );
};
