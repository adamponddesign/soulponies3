import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import FixedSideNav from './components/FixedSideNav'
import LandingPage from './components/LandingPage'
import Contact from './components/Contact'
import MobileNav from './components/MobileNav'

import Videos from './components/Videos'
import Photos from './components/Photos'
import Testimonials from './components/Testimonials'
import MobileNavBar from './components/MobileNavBar'

import './style.scss'

class App extends React.Component {

  state = {
    sideDrawerOpen: false,
    width: 0,
    height: 0
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
    if (this.state.width >= 1025) {
      this.setState({ sideDrawerOpen: false })
    }
  }





  render() {


    return (
      <Router>
        <main>

          <MobileNavBar toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>
          <FixedSideNav />

          <MobileNav  pageWidth={this.state.width} toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/videos" component={Videos} />
            <Route path="/photos" component={Photos} />
            <Route path="/testimonials" component={Testimonials} />


          </Switch>

        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
