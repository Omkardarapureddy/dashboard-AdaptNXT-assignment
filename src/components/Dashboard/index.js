import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Inventory from '../Inventory'
import Orders from '../Orders'
import Shipping from '../Shipping'
import Channels from '../Channels'
import './index.css'

class Dashboard extends React.Component {
  render() {
    return (
      <Router>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="part-1">
            <nav className="nav">
              <ul className="navbar">
                <li>
                  <Link className="li" to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link className="li" to="/orders">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="li" to="/shipping">
                    Shipping
                  </Link>
                </li>
                <li c>
                  <Link className="li" to="/channels">
                    Channels
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/inventory" component={Inventory} />
              <Route path="/orders" component={Orders} />
              <Route path="/shipping" component={Shipping} />
              <Route path="/channels" component={Channels} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default Dashboard
