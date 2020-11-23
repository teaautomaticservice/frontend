import React from 'react';

import { Header } from '~/components/core/header/Header';
import { Navbar } from '~/components/core/navbar/Navbar';
import { Footer } from '~/components/core/footer/Footer';

const LayoutsMain: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export { LayoutsMain };
