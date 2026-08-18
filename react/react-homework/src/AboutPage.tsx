import { Stack, Container } from '@mui/material';
import { Header } from './NavBar';
import './AboutPage.css';
import type { FC } from "react";

interface ArticleProps {
  title: string;
  backgroundColor: string;
  content: string;
  image?: string;
}

const Article: FC<ArticleProps> = ({ title, backgroundColor, content, image }) => {
  return (
<div
      style={{
        backgroundColor,
        borderRadius: '12px',
        padding: '1.25rem',
        margin: '6px ',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
     <h2
        style={{
          color: '#ffffff', 
          margin: 0,
          marginBottom: '8px', 
          fontSize: '1.25rem',
        }}
      >
        {title}
      </h2>

     <p
        style={{
          color: '#e6fffa',
          margin: 0,
          lineHeight: '1.6',
          whiteSpace: 'pre-line', 
        }}
      >
        {content}
      </p>
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            maxHeight: '220px',
            objectFit: 'cover',
            borderRadius: '15px', 
            marginTop: '8px', 
            display: 'block',
          }}
        />
      )}
    </div>
  );
};

export const AboutPage = () => {
  return (
    <Container sx={{ backgroundColor: '#f0fdfa', maxWidth: '1500px', margin: '0 auto', padding: '2rem' }}>
      <Header />

      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Article
          title="My Story"
          backgroundColor="#4fdac7"
          content="I started Food Ninja in 2020 as a way to document my culinary adventures around the world.
          What began as a personal journal has grown into a community of food enthusiasts who share a curiosity about food, culture, and the connections between them."
          image="/greece-travel.png"
        />
        <Stack>
          <Article
            title="Exploring the world one meal at a time"
            backgroundColor="#3db4a6"
            content="Welcome to Food Ninja, a blog dedicated to food culture, travel, and the stories behind what we eat.
            I'm James Doe, a food writer and passionate traveler who believes that understanding a place means understanding its food."
            image="/olive-oil.png"
          />
          <Article
            title="What i write about"
            backgroundColor="#158879"
            content="Food Ninja covers four main areas:

            Travel
                Food experiences and culinary adventures around the world
            Food Theory
                The science, history, and culture behind food and cooking
            Recipes
                Tested recipes and techniques worth mastering
            Restaurants
                Hidden gems and notable dining experiences"
            image="/ramen-broth.png"
          />
          <Article
            title="Let's Connect"
            backgroundColor="#11695e"
            content="I'd love to hear from you!
            Whether you have a restaurant recommendation, a recipe to share, or just want to chat about food, reach out on the contact page."
            image="/vietnam-food-diary.png"
          />
        </Stack>
      </Stack>

      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p>© 2024 Food Ninja. All rights reserved.</p>
      </footer>
    </Container>
  );
};