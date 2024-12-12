/* eslint-disable react/prop-types */

export default function TaxiList({ taxis }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Taxi Locations</h2>
      <ul className="space-y-2">
        {taxis.map((taxi) => (
          <li key={taxi.id} className="text-gray-700 rounded-md text-sm">
            <span
              className="px-2 py-1 rounded text-white font-bold"
              style={{ backgroundColor: taxi.color }}
            >
              Taxi {taxi.id}
            </span>
            : ({taxi.x.toFixed(2)}Km, {taxi.y.toFixed(2)}Km) -{' '}
            <span
              className={`capitalize ${
                taxi.status === 'driving' ? 'text-red-500' : 'text-gray-700'
              }`}
            >
              {taxi.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
