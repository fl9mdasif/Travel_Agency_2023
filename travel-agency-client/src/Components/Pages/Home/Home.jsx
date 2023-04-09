import React from 'react';
import Hero from '../../HeroSection/Hero';
import BusinessSummery from '../../BusinessSummery/BusinessSummery';
import ExploreWorld from '../../ExploreWorld/ExploreWorld';
// import Hero from '../../HeroSection/Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <BusinessSummery />
            <ExploreWorld />
        </>
    );
};

export default Home;