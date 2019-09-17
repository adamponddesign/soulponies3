import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Favicon from 'react-favicon'
import FixedSideNav from './components/FixedSideNav'
import LandingPage from './components/LandingPage'
import Contact from './components/Contact'
import MobileNav from './components/MobileNav'
import Burger from './components/Burger'
import Videos from './components/Videos'
import Photos from './components/Photos'
import About from './components/About'

import './style.scss'

class App extends React.Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }



  render() {
    return (
      <Router>
        <main>
          <Burger toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>
          <FixedSideNav />
          <MobileNav toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>









          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/videos" component={Videos} />
            <Route path="/photos" component={Photos} />
            <Route path="/about" component={About} />


          </Switch>

        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <div>
    <Favicon url="https://i.imgur.com/SAyCCAz.png" />
    <App />
  </div>,
  document.getElementById('root')
)
