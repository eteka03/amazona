import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



//components
import HomePage from './components/HomePage/HomePage'
import ProductPage from './components/ProductPage/ProductPage'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import './App.css';

function App() {

 
  const [isMenuOpen,setIsMenuOpen] = useState(false)

    const ToggleMenu = () =>  setIsMenuOpen(!isMenuOpen)

  return (
   <Router>
       <div className="grid-container">
        
        <Header isMenuOpen={isMenuOpen} ToggleMenu={ToggleMenu} />
        <Sidebar isMenuOpen={isMenuOpen} ToggleMenu={ToggleMenu} />

        <main className="main">
            <div className="content">
              
              <Switch>
                  <Route exact path="/">
                      <HomePage />
                  </Route>

                  <Route path="/product/:id">
                      <ProductPage />
                  </Route>
              </Switch>
            </div>
            
        </main> 

        <Footer />
      </div>
   </Router> 
   
   
  );
}

export default App;
