/* eslint-disable react/prop-types */
export default function FinishedOrders({ orders }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Finished Orders</h2>
      {orders.length === 0 && (
        <p className="text-sm text-gray-500">No orders have been completed</p>
      )}
      <ul className="space-y-2">
        {orders.map((order) => (
          <li
            key={order.id}
            className="text-gray-700 p-3 rounded-md bg-green-100"
          >
            <span className="font-bold">Order {order.id}</span>:
            <br />
            <span className="text-sm">
              <strong>Start:</strong> ({order.startX.toFixed(2)} Km,{' '}
              {order.startY.toFixed(2)} Km)
            </span>
            <br />
            <span className="text-sm">
              <strong>End:</strong> ({order.endX.toFixed(2)} Km,{' '}
              {order.endY.toFixed(2)} Km)
            </span>
            <br />
            <span className="capitalize">
              <strong>Status:</strong> {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
