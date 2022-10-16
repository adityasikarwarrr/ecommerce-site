import React from "react";
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header/Header';
import Offers from './components/Offers/Offers';
import Header2 from './components/Header2/Header2';
import ProductList from './components/ProductList/ProductList.jsx'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Offers />
      <Header2 />
      <ProductList />
      <Footer/>
      </div>
  );
}

export default App;
