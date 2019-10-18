import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'


import FixedSideNav from './components/FixedSideNav'
import LandingPage from './components/LandingPage'
import Contact from './components/Contact'
import MobileNav from './components/MobileNav'
import About from './components/About'

import Videos from './components/Videos'
import Photos from './components/Photos'
import Testimonials from './components/Testimonials'
import Shows from './components/Shows'
import Footer from './components/Footer'

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

          <FixedSideNav />

          <MobileNav  pageWidth={this.state.width} toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>

          <div>




            <LandingPage pageWidth={this.state.width} toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>
            <About />
            <Testimonials width={this.state.width}/>
            <Videos width={this.state.width}/>
            <Photos width={this.state.width}/>
            <Shows width={this.state.width}/>
            <Contact width={this.state.width}/>
            <Footer />


          </div>

        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)




// <MobileNavBar toggleSideBar={this.drawerToggleClickHandler} status={this.state.sideDrawerOpen}/>
