import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import Favicon from 'react-favicon'

import FixedSideNav from './components/FixedSideNav'
import MobileNav from './components/MobileNav'

import LandingPage from './components/LandingPage'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Videos from './components/Videos'
import Photos from './components/Photos'
import Shows from './components/Shows'
import BookingInfo from './components/BookingInfo'
import Footer from './components/Footer'

import './style.scss'

class App extends React.Component {

  state = {
    sideDrawerOpen: false,
    width: 0,
    height: 0
  }

  // to operate the burger button
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  // to gain info on window size within state object
  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  // if user has mobile nav open and page size increases over 1025 then the mobile nav will automatically close
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
          <Favicon url="./img/soulponiesfavicon.jpg" />
          <FixedSideNav />
          <MobileNav toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>
          <LandingPage toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>
          <About />
          <Testimonials />
          <Videos />
          <Photos />
          <Shows />
          <BookingInfo/>
          <Footer />

        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
