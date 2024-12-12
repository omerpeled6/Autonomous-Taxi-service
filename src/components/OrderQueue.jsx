/* eslint-disable react/prop-types */
export default function OrderQueue({ orders }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-1">Active Orders</h2>
      {orders.length === 0 && (
        <p className="text-sm text-gray-500">
          Orders are created every 20 seconds
        </p>
      )}
      <ul className="space-y-2">
        {orders.map((order) => (
          <li
            key={order.id}
            className="text-gray-700 p-2 rounded-md bg-blue-100"
          >
            <span className="font-bold">Order {order.id}</span>:{' '}
            {order.distance.toFixed(2)} Km
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
            <span
              className={`capitalize ${
                order.status === 'driving' ? 'text-red-500' : 'text-gray-700'
              }`}
            >
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
