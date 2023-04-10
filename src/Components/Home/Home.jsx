import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h2>This is Home: {tshirts.length}</h2>
        </div>
    );
};

export default Home;


// echo "# tshirt" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shawon012/tshirt.git
// git push -u origin main