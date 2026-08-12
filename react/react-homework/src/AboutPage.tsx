
import { Stack, Container } from '@mui/material'
import { Link } from 'react-router-dom';
import './AboutPage.css'
import type { FC } from "react";

interface ArticleProps {
  title: string;
  backgroundColor: string;
  content: string;
  image?: string;
}

const Article:FC<ArticleProps> = ({ title, backgroundColor, content, image }) => {
  return (
    <div style={{ backgroundColor }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={image} />
    </div>
  )
}

export const AboutPage = () => {
  return (
    <Container>
      <header>
        <h2>Food Ninja</h2>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/articles">Article</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
             <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

    <Stack direction={{ xs: 'column', sm: 'row' }}>
      <Article
       title="My Story"
        backgroundColor="#10f1d3"
        content="I started Food Ninja in 2020 as a way to document my culinary adventures around the world.
        What began as a personal journal has grown into a community of food enthusiasts who share a curiosity about food, culture, and the connections between them."
        image="/greece-travel.png"
      />
      <Stack>
       <Article
       title="Exploring the world one meal at a time"
        backgroundColor="#0c9785"
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
 
  )
  
}
