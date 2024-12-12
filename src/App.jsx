import { useState, useEffect } from 'react'
import TaxiList from './components/TaxiList'
import TaxiGraph from './components/TaxiGraph'
import FinishedOrders from './components/FinishedOrders'
import OrderQueue from './components/OrderQueue'
import Navbar from './components/Navbar'
import {
  createTaxis,
  createOrder,
  updateTaxiPosition,
  allocateClosestTaxi,
} from './utils/utils'

const NUM_TAXIS = 10

export default function App() {
  const [taxis, setTaxis] = useState([])
  const [orders, setOrders] = useState([])
  const [finishedOrders, setFinishedOrders] = useState([])

  useEffect(() => {
    setTaxis(createTaxis(NUM_TAXIS))
    const orderInterval = setInterval(() => {
      const newOrder = createOrder()
      setOrders((prevOrders) => [...prevOrders, newOrder])
    }, 20000)
    return () => clearInterval(orderInterval)
  }, [])
  useEffect(() => {
    const taxiUpdateInterval = setInterval(() => {
      setTaxis((prevTaxis) =>
        prevTaxis.map((taxi) =>
          updateTaxiPosition(taxi, orders, setFinishedOrders, setOrders)
        )
      )
    }, 1000)

    return () => clearInterval(taxiUpdateInterval)
  }, [orders])

  useEffect(() => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => allocateClosestTaxi(order, taxis, setTaxis))
    )
  }, [taxis])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center  ">
      <Navbar />
      <div className="w-full flex flex-col items-center gap-10">
        <div className="flex gap-20">
          <TaxiGraph className="mx-auto" taxis={taxis} orders={orders} />
          <TaxiList taxis={taxis} />
        </div>
        <div className="w-full justify-center flex gap-10">
          <OrderQueue orders={orders} />
          <FinishedOrders orders={finishedOrders} />
        </div>
      </div>
    </div>
  )
}
