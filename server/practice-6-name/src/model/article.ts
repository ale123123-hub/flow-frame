export interface Article {
  id: number;
  title: string;
  body: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "My Story",
    body: "I started Food Ninja in 2020 as a way to document my culinary adventures around the world. What began as a personal journal has grown into a community of food enthusiasts who share a curiosity about food, culture, and the connections between them.",
    image:"/chicken-nuggets-fries.png",
  },
  {
    id: 2,
    title: "Find more",
    body: "What started in 2020 as a simple way to record my travels and favorite meals has evolved into Food Ninja—a gathering place for curious foodies who believe every dish tells a story about culture and connection.",
    image: "/greece-travel.png",
  },
  {
    id: 3,
    title: "Exploring the world one meal at a time",
    body: "Welcome to Food Ninja, a blog dedicated to food culture, travel, and the stories behind what we eat. I'm James Doe, a food writer and passionate traveler who believes that understanding a place means understanding its food.",
    image: "/olive-oil.png",
  },
  {
    id: 4,
    title: "What i write about",
    body: "Food Ninja covers four main areas:\n\nTravel: Food experiences and culinary adventures\nFood Theory: The science and history behind food\nRecipes: Tested recipes worth mastering\nRestaurants: Hidden gems",
    image: "/tokyo-restaurants.png",
  },
   {
    id: 5,
    title: "Let's Connect",
    body: "I'd love to hear from you! Whether you have a restaurant recommendation, a recipe to share, or just want to chat about food, reach out on the contact page.",
    image: "/ramen-broth.png",
  },
];


