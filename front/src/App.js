// == Import npm
import React from 'react';

// == Import components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// == Import des données statiques
import argonautesList from './data/list';
console.log(argonautesList);


function App() {
  return (
    <div className="App">
      <Header />
      <Main argonautesList={argonautesList} />
      <Footer />
    </div>
  );
}

export default App;
