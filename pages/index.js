import { Fragment } from "react";
import Hero from "../components/home-page/hero";

import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
    { 
        slug: 'getting-started-with-nexjs1', 
        title: 'Getting Started With NextJS1', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'Next is  a React framework for production - it makes building fullstack React application', 
        date: '2022-02-10' 
    },
    { 
        slug: 'getting-started-with-nexjs2', 
        title: 'Getting Started With NextJS2', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'Next is  a React framework for production - it makes building fullstack React application', 
        date: '2022-02-10' 
    },
    { 
        slug: 'getting-started-with-nexjs3', 
        title: 'Getting Started With NextJS3', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'Next is  a React framework for production - it makes building fullstack React application', 
        date: '2022-02-10' 
    },
    { 
        slug: 'getting-started-with-nexjs4', 
        title: 'Getting Started With NextJS4', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'Next is  a React framework for production - it makes building fullstack React application', 
        date: '2022-02-10' 
    }
];

function HomePage()  {

    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    );
}

export default HomePage;




// 1)  Hero => Present ourselves
// 2) Featured Posts
