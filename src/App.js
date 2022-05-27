import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import UserAccounts from './Components/UserAccounts/UserAccounts'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: '/',

      }

    }
    updateRoute = (updated) => {
      this.setState({route: updated})
  }

  render() {
    const { route, account } = this.state;
    
    const renderSwitch = (param) => {
      switch (param) {
        case '/':
          return <Home />
        case '/about':
          return <About />
        case '/contact':
          return <Contact />
        // case '/book':
        //   return <Book />
        case '/signin':
        case '/register':
          return <UserAccounts updateRoute={this.updateRoute} selection={route}/>
        default:
          return;
      }
    }

    return(
      <div className='.app'>
        <Navbar updateRoute={this.updateRoute}/>
        <Title />
        {renderSwitch(route)}
        <Footer />
      </div>
      )
  }
}


export default App;
