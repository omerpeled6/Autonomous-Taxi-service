/* eslint-disable react/prop-types */
export default function FinishedOrders({ orders }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Finished Orders
      </h2>
      {orders.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
          No orders have been completed.
        </p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="p-4 rounded-lg bg-green-50 border border-green-200 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-green-700">
                  Order #{order.id}
                </span>
                <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">
                  Completed
                </span>
              </div>
              <div className="text-sm text-gray-700">
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
