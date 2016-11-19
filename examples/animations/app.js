import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { render, findDOMNode } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import withExampleBasename from '../withExampleBasename'
import Velocity from 'velocity-animate'

import './app.css'

const App = ({ children, location }) => (
  <div>
    <ul>
      <li><Link to="/page1">Page 1</Link></li>
      <li><Link to="/page2">Page 2</Link></li>
    </ul>

    <ReactTransitionGroup component="div">
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactTransitionGroup>
  </div >
)

class Index extends Component {
  render() {
    return (
      <div className="Image">
        <h1>Index</h1>
        <p>Animations with React Router are not different than any other animation.</p>
      </div>
    )
  }
}

class Page1 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidAppear() {
    console.log('componentDidAppear')
    var node = findDOMNode(this)
    Velocity(node, { opacity: 0 }, 0)
    Velocity(node, { opacity: 1 }, 300)
  }
  componentWillEnter(callback) {
    console.log('componentWillEnter')
    var node = findDOMNode(this)
    Velocity(node, { opacity: 0 }, 0)
    Velocity(node, { opacity: 1 }, 300, callback)

  }
  componentWillLeave(callback) {
    console.log('componentWillLeave')
    var node = findDOMNode(this)
    Velocity(node, { opacity: 1 }, 0)
    Velocity(node, { opacity: 0 }, 300, callback)
  }
  render() {
    return (
      <div className="Image">
        <h1>Page 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

class Page2 extends Component {
  componentDidAppear() {
    console.log('componentDidAppear')
    var node = findDOMNode(this)
    Velocity(node, { opacity: 0 }, 0)
    Velocity(node, { opacity: 1 }, 3000)
  }
  componentWillEnter(callback) {
    console.log('componentWillEnter')
    var node = findDOMNode(this)
    Velocity(node, { opacity: 0 }, 0)
    Velocity(node, { opacity: 1 }, 300, callback)

  }
  componentWillLeave(callback) {
    console.log('componentWillLeave')
    var node = findDOMNode(this)
    Velocity(node, { opacity: 1 }, 0)
    Velocity(node, { opacity: 0 }, 300, callback)
  }
  render() {
    return (
      <div className="Image">
        <h1>Page 22</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.getElementById('example'))
