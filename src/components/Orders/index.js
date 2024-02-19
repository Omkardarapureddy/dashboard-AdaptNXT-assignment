import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import PendingOrders from '../PendingOrders'
import AcceptedOrders from '../AcceptedOrders'
import AWBCreate from '../AWBCreate'
import ReadyToShipping from '../ReadyToShipping'
import ShippedOrders from '../ShippedOrders'
import CompletedOrders from '../CompletedOrders'
import CancelledOrders from '../CancelledOrders'
import './index.css'

class Orders extends React.Component {
  render() {
    return (
      <Router>
        <div className="order">
          <h2>Order</h2>
          <nav>
            <ul className="navbar-1">
              <li>
                <Link className="li-1" to="/orders/pending">
                  Pending
                </Link>
              </li>
              <li>
                <Link className="li-1" to="/orders/accepted">
                  Accepted
                </Link>
              </li>
              <li>
                <Link className="li-1" to="/orders/awb-create">
                  AWB Create
                </Link>
              </li>
              <li>
                <Link className="li-1" to="/orders/ready-to-shipping">
                  Ready to Shipping
                </Link>
              </li>
              <li>
                <Link className="li-1" to="/orders/shipped">
                  Shipped
                </Link>
              </li>
              <li>
                <Link className="li-1" to="/orders/completed">
                  Completed
                </Link>
              </li>
              <li>
                <Link className="li-1" to="/orders/cancelled">
                  Cancelled
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/orders/pending" component={PendingOrders} />
            <Route path="/orders/accepted" component={AcceptedOrders} />
            <Route path="/orders/awb-create" component={AWBCreate} />
            <Route
              path="/orders/ready-to-shipping"
              component={ReadyToShipping}
            />
            <Route path="/orders/shipped" component={ShippedOrders} />
            <Route path="/orders/completed" component={CompletedOrders} />
            <Route path="/orders/cancelled" component={CancelledOrders} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Orders
