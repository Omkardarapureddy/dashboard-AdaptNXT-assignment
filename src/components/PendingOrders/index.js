import React from 'react'
import OrderTable from '../OrderTable'
import './index.css'

class PendingOrders extends React.Component {
  state = {
    orders: [
      {
        channel: 'Online',
        orderNo: 'ORD001',
        date: '2024-02-19',
        city: 'New York',
        customerName: 'John Doe',
        orderValue: '$100',
        status: 'Pending',
      },
      {
        channel: 'Online',
        orderNo: 'ORD002',
        date: '2024-02-19',
        city: 'New York',
        customerName: 'John Doe',
        orderValue: '$100',
        status: 'Pending',
      },
      {
        channel: 'Online',
        orderNo: 'ORD003',
        date: '2024-02-19',
        city: 'New York',
        customerName: 'John Doe',
        orderValue: '$100',
        status: 'Pending',
      },
      {
        channel: 'Online',
        orderNo: 'ORD004',
        date: '2024-02-19',
        city: 'New York',
        customerName: 'John Doe',
        orderValue: '$100',
        status: 'Pending',
      },
      {
        channel: 'Online',
        orderNo: 'ORD005',
        date: '2024-02-19',
        city: 'New York',
        customerName: 'John Doe',
        orderValue: '$100',
        status: 'Pending',
      },
      // Add more orders as needed
    ],
  }

  render() {
    const {orders} = this.state

    return (
      <div className="orders">
        <div className="shortValue">
          <div>
            <button>import order</button>
            <button>Accept</button>
            <button>print</button>
          </div>
          <button>refresh</button>
        </div>
        <OrderTable orders={orders} />
      </div>
    )
  }
}

export default PendingOrders
