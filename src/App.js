import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import UserAccounts from './Components/UserAccounts/UserAccounts'


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: '/home'
    }

    }
    updateRoute = (updated) => {
      console.log(updated)
      this.setState({route: updated})

  }

  render() {
    const { route } = this.state;
    
    const renderSwitch = (param) => {
      switch (param) {
        case '/home':
          return <Home />
          break;
        // case '/about':
        //   return <About />
        //   break;
        // case '/contact':
        //   return <Contact />
        //   break;
        // case '/book':
        //   return <Book />
        //   break;
        case '/signin':
        case '/register':
          return <UserAccounts selection={this.state.route}/>
          break;
        default:
          return;
          break;
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
