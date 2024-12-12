import Timer from './Timer'

export default function Navbar() {
  return (
    <div className="w-full bg-blue-600 shadow-md py-4 px-6 flex items-center justify-between ">
      <h1 className="text-3xl font-bold text-white">Autonomous Taxi Service</h1>
      <div className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg shadow">
        <Timer maxTime={20} />
      </div>
    </div>
  )
}
