import React from 'react';
import './App.css';
import OwnerInfo from './OwnerInfo';
import StoreDescription from './StoreDescription';
import Footer from './AboutUsFooter';

function App() {
  const ownersData = [
    {
      name: '2501996934 - Albert Geoffrey Gunawan',
      role: 'Computer Science',
      photo: 'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/d62aea81-599b-43fb-b4f8-b824d13fb0dd.jpg', 
    },
    {
      name: '2502010300 - Joysun Wisesa Gunawan',
      role: 'Computer Science',
      photo: 'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/b1b5a507-d8ac-4a2e-a306-2d6015a72e12.jpg', 
    },
    {
      name: '2540127641 - Markus Jonathan',
      role: 'Computer Science',
      photo: 'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/7e8b972c-e07c-4cdf-94d4-fb79406bf988.jpg', 
    },
  ];

    return (
    <div className="App">
      <header className="App-header">
        <div className="brand">
          <h1>Aljoymart</h1>
        </div>
        <nav className="nav-bar">
          <button className="nav-button">Shop</button>
          <button className="nav-button">Checkout</button>
          <button className="nav-button">About Us</button>
        </nav>
      </header>

      <div className="main-content">
        <StoreDescription />
        <OwnerInfo owners={ownersData} />
      </div>

      <Footer />

    </div>
  );
}

export default App;