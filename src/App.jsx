import { useState, useEffect, useRef } from 'react'
import TaxiList from './components/TaxiList'
import TaxiGraph from './components/TaxiGraph'
import FinishedOrders from './components/FinishedOrders'
import OrderQueue from './components/OrderQueue'
import Navbar from './components/Navbar'
import Box from './components/Box'
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

  const taxisRef = useRef([])
  useEffect(() => {
    taxisRef.current = taxis
  }, [taxis])

  useEffect(() => {
    setTaxis(createTaxis(NUM_TAXIS))

    const orderInterval = setInterval(() => {
      const newOrder = createOrder()
      setOrders((prevOrders) => {
        const updatedOrders = [...prevOrders, newOrder]
        console.log('System State:')
        console.log('Order Queue:')
        if (updatedOrders.length === 0) {
          console.log('Empty')
        } else {
          updatedOrders.forEach((order) =>
            console.log(
              `Order ${order.id}: Start(${order.startX.toFixed(
                2
              )}Km, ${order.startY.toFixed(2)}Km), End(${order.endX.toFixed(
                2
              )}Km, ${order.endY.toFixed(2)}Km), Status: ${order.status}`
            )
          )
        }

        console.log('Taxi locations:')
        taxisRef.current.forEach((taxi) =>
          console.log(
            `Taxi-${taxi.id}: ${taxi.x.toFixed(2)}Km, ${taxi.y.toFixed(2)}Km (${
              taxi.status
            })`
          )
        )

        return updatedOrders
      })
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <div className="w-full flex flex-col items-center gap-4 mt-3">
        <div className="w-full flex justify-center gap-4 px-10">
          <Box bgColor="bg-yellow-50">
            <TaxiGraph className="mx-auto" taxis={taxis} orders={orders} />
          </Box>
          <Box bgColor="bg-red-50">
            <TaxiList taxis={taxis} />
          </Box>
        </div>

        <div className="w-full flex justify-center gap-4 px-10">
          <Box bgColor="bg-blue-50">
            <OrderQueue orders={orders} />
          </Box>
          <Box bgColor="bg-green-50">
            <FinishedOrders orders={finishedOrders} />
          </Box>
        </div>
      </div>
    </div>
  )
}
