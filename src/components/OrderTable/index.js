import React from 'react'

import './index.css'

class OrderTable extends React.Component {
  render() {
    const {orders} = this.props

    return (
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th className="space"> </th>
              <th className="space">
                <input type="checkbox" />
              </th>
              <th className="space">Channel</th>
              <th className="space">Order Number</th>
              <th className="space">Date</th>
              <th className="space">City</th>
              <th className="space">Customer Name</th>
              <th className="space">Order Value</th>
              <th className="space">Status</th>
              <th className="space">Operation</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr className="order-table-1" key={order.orderNo}>
                <td>+</td>
                <th>
                  <input type="checkbox" />
                </th>
                <td>{order.channel}</td>
                <td>{order.orderNo}</td>
                <td>{order.date}</td>
                <td>{order.city}</td>
                <td>{order.customerName}</td>
                <td>{order.orderValue}</td>
                <td>{order.status}</td>
                <td>
                  <select>
                    <option>action</option>
                    <option>process</option>
                    <option>cancel</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default OrderTable
