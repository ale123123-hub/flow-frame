import { Container } from "@mui/material";
import { Header } from "./NavBar";
import { SearchBar, type ArticleItem } from "./SearchBar";
import "./AboutPage.css";
import type { FC } from "react";

export interface ArticleProps {
  title: string;
  backgroundColor: string;
  content: string;
  image?: string;
  category?: string;
}

export const Article: FC<ArticleProps> = ({
  title,
  backgroundColor,
  content,
  image,
}) => {
  return (
    <div
      style={{
        backgroundColor,
        borderRadius: "12px",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          margin: 0,
          marginBottom: "8px",
          fontSize: "1.25rem",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#e6fffa",
          margin: 0,
          lineHeight: "1.6",
          whiteSpace: "pre-line",
        }}
      >
        {content}
      </p>

      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxHeight: "220px",
            objectFit: "cover",
            borderRadius: "15px",
            marginTop: "8px",
            display: "block",
          }}
        />
      )}
    </div>
  );
};


const initialArticles: ArticleItem[] = [
  {
    id: 1,
    title: "My Story",
    backgroundColor: "#57e7d4",
    content:
      "I started Food Ninja in 2020 as a way to document my culinary adventures around the world. What began as a personal journal has grown into a community of food enthusiasts who share a curiosity about food, culture, and the connections between them.",
    image: "/greece-travel.png",
    category: "personal",
  },
  {
    id: 2,
    title: "Find more",
    backgroundColor: "#33c2af",
    content:
      "What started in 2020 as a simple way to record my travels and favorite meals has evolved into Food Ninja—a gathering place for curious foodies who believe every dish tells a story about culture and connection.",
    image: "/tokyo-restaurants.png",
    category: "personal",
  },
  {
    id: 3,
    title: "Exploring the world one meal at a time",
    backgroundColor: "#179485",
    content:
      "Welcome to Food Ninja, a blog dedicated to food culture, travel, and the stories behind what we eat. I'm James Doe, a food writer and passionate traveler who believes that understanding a place means understanding its food.",
    image: "/olive-oil.png",
    category: "writing",
  },
  {
    id: 4,
    title: "What i write about",
    backgroundColor: "#107466",
    content:
      "Food Ninja covers four main areas:\n\nTravel: Food experiences and culinary adventures\nFood Theory: The science and history behind food\nRecipes: Tested recipes worth mastering\nRestaurants: Hidden gems",
    image: "/ramen-broth.png",
    category: "writing",
  },
  {
    id: 5,
    title: "Let's Connect",
    backgroundColor: "#0a4d45",
    content:
      "I'd love to hear from you! Whether you have a restaurant recommendation, a recipe to share, or just want to chat about food, reach out on the contact page.",
    image: "/vietnam-food-diary.png",
    category: "connect",
  },
];

export const AboutPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#f0fdfa",
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <Header />
      <SearchBar articles={initialArticles} />

      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <p>© 2024 Food Ninja. All rights reserved.</p>
      </footer>
    </Container>
  );
};