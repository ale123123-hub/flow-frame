import type { Category } from "./HomePageSearchBar";

export const articles:{
    title: string;
    category: Category;
    excerpt: string;
    date: string;
    imageURL: string;
}[] = [
    {
        title:"What Traveling Greece For 2 Weeks Taught Me About Life",
            category:"Travel",
            excerpt:"Hidden coves, ancient ruins, and meals that redefine what food means.",
            date:"Jun 21, 2021",
            imageURL:"/greece-travel.png"
    },
    {
        title:"Why You Should Never Order 12 Chicken Nuggets and Fries",
            category:"Food Theory",
            excerpt:"The math, the science, and the dark truth behind combo meal pricing.",
            date:"Aug 1, 2021",
            imageURL:"/chicken-nuggets-fries.png"
    },
    {
        title:"The Perfect Homemade Ramen Broth Recipe",
            category:"Recipes",
            excerpt:"Twelve hours of simmering and a tare that will ruin all other broths for you.",
            date:"Sep 14, 2021",
            imageURL:"/ramen-broth.png"
    },
    {
        title:"The Best Hidden Restaurants in Tokyo You Need to Visit",
            category:"Restaurants",
            excerpt:"Down unmarked alleys — the izakayas that locals keep to themselves.",
            date:"Oct 3, 2021",
            imageURL:"/tokyo-restaurants.png"
    },
    {
        title:"Eating My Way Through Vietnam: A 10-Day Food Diary",
            category:"Travel",
            excerpt:"Down unmarked alleys — the izakayas that locals keep to themselves.",
            date:"Oct 3, 2021",
            imageURL:"/vietnam-food-diary.png",
    },
    {
        title:"Why Expensive Olive Oil Is Almost Never Worth It",
            category:"Food Theory",
            excerpt:"Blind taste tests, industry fraud, and what the label is actually telling you.",
            date:"Dec 5, 2021",
            imageURL:"/olive-oil.png"
    }
]