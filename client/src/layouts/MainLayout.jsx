// layouts/MainLayout.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ component: PageComponent, ...rest }) => {
  return (
    <div>
      <Header />
      <main>
        <PageComponent {...rest} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;