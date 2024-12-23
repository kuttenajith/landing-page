import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import IngredientsSection from '../components/IngredientsSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <IngredientsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Home;
