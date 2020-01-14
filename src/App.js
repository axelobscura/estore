import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
