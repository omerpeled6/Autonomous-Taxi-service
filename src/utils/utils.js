const GRID_SIZE = 20
const TAXI_SPEED = 0.02
let ORDER_ID = 1

export function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

export function getRandomCoordinate() {
  return (Math.random() * GRID_SIZE).toFixed(2)
}

export function generateColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`
}

export function createTaxis(numTaxis) {
  const taxis = []
  for (let i = 0; i < numTaxis; i++) {
    taxis.push({
      id: i + 1,
      x: parseFloat(getRandomCoordinate()),
      y: parseFloat(getRandomCoordinate()),
      status: 'standing',
      color: generateColor(),
    })
  }
  return taxis
}

export function createOrder() {
  let startX, startY, endX, endY, distance
  do {
    startX = parseFloat(getRandomCoordinate())
    startY = parseFloat(getRandomCoordinate())
    endX = parseFloat(getRandomCoordinate())
    endY = parseFloat(getRandomCoordinate())
    distance = calculateDistance(startX, startY, endX, endY)
  } while (distance > 2)

  const newOrder = {
    id: ORDER_ID++,
    startX,
    startY,
    endX,
    endY,
    distance: parseFloat(distance.toFixed(2)),
    status: 'waiting',
  }
  return newOrder
}

export function moveTaxi(taxi, targetX, targetY, speed) {
  const distanceX = targetX - taxi.x
  const distanceY = targetY - taxi.y

  if (Math.abs(distanceX) > speed) {
    taxi.x += Math.sign(distanceX) * speed
  } else if (Math.abs(distanceY) > speed) {
    taxi.y += Math.sign(distanceY) * speed
  }

  if (Math.abs(distanceX) <= speed && Math.abs(distanceY) <= speed) {
    taxi.x = targetX
    taxi.y = targetY
    return true
  }
  return false
}
export function updateTaxiPosition(
  taxi,
  orders,
  finishedOrdersSetter,
  ordersSetter
) {
  if (taxi.status === 'driving') {
    const order = orders.find(
      (o) =>
        o.status === `driving to end taxi - ${taxi.id}` ||
        o.status === `driving to start taxi - ${taxi.id}`
    )

    if (order) {
      const targetX = order.status.includes('to start')
        ? order.startX
        : order.endX
      const targetY = order.status.includes('to start')
        ? order.startY
        : order.endY

      if (moveTaxi(taxi, targetX, targetY, TAXI_SPEED)) {
        if (order.status.includes('to start')) {
          order.status = `driving to end taxi - ${taxi.id}`
        } else {
          order.status = `finished taxi - ${taxi.id}`
          finishedOrdersSetter((prev) => [...prev, order])
          ordersSetter((prev) => prev.filter((o) => o.id !== order.id))
          taxi.status = 'standing'
        }
      }
    }
  }
  return { ...taxi }
}

export function allocateClosestTaxi(order, taxis, taxisSetter) {
  if (order.status === 'waiting') {
    const closestTaxi = taxis
      .filter((taxi) => taxi.status === 'standing')
      .reduce((closest, taxi) => {
        const distance = calculateDistance(
          taxi.x,
          taxi.y,
          order.startX,
          order.startY
        )
        if (!closest || distance < closest.distance) {
          return { taxi, distance }
        }
        return closest
      }, null)

    if (closestTaxi) {
      const { taxi } = closestTaxi
      taxi.status = 'driving'
      order.status = `driving to start taxi - ${taxi.id}`
      taxisSetter((prevTaxis) =>
        prevTaxis.map((t) => (t.id === taxi.id ? { ...taxi } : t))
      )
    } else {
      console.log('No taxi available for order:', order)
    }
  }
  return order
}
