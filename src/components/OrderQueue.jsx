/* eslint-disable react/prop-types */
export default function OrderQueue({ orders }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Active Orders
      </h2>
      {orders.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
          Orders are created every 20 seconds.
        </p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="p-4 rounded-lg bg-blue-50 border border-blue-200 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-blue-700">
                  Order #{order.id}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    order.status.includes('start')
                      ? 'bg-green-100 text-green-600'
                      : order.status.includes('end')
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="text-sm text-gray-700">
                <p>
                  <strong>Distance:</strong> {order.distance.toFixed(2)} Km
                </p>
                <p>
                  <strong>Start:</strong> ({order.startX.toFixed(2)} Km,{' '}
                  {order.startY.toFixed(2)} Km)
                </p>
                <p>
                  <strong>End:</strong> ({order.endX.toFixed(2)} Km,{' '}
                  {order.endY.toFixed(2)} Km)
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
