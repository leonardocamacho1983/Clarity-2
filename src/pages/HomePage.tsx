import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default HomePage;
