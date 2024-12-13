Autonomous Taxi Service 🚖

Website Link - [Autonomous Taxi Service](https://autonomous-taxi-service.onrender.com)

**Run the Project:**

Install dependencies - npm i
Start the development server - npm run dev

Overview

This project is a simulation of an Autonomous Taxi Service in the fictional city of futureTLV. The system simulates the operation of 10 autonomous taxis providing ride services in a 20x20 km grid. The application dynamically updates the state of taxis and orders every second and processes ride requests every 20 seconds.

The project is built using React, Vite.js, and Tailwind CSS for the frontend and leverages modularized utility functions for simulation logic.

Features

✅ Core Features

	•	Random Initialization: Taxis start at random locations in a 20x20 grid.
	•	Dynamic Ride Requests: A new ride request is generated every 20 seconds with random start and end points (distance ≤ 2 km).
	•	Taxi Allocation: Allocates the nearest free taxi for each ride request.
	•	Taxi Movement: Taxis move at a constant speed of 20 meters/second along X or Y axes, making 90-degree turns.
	•	Order Queue: Handles ride requests in a queue if no taxis are available.
	•	Real-Time Updates: Updates taxi positions, order statuses, and system states every second.
	•	Data Visualization: Visualizes taxi locations and order points on a graph.
	•	Responsive Design: Built with Tailwind CSS for a clean and responsive interface.

Project Structure

<img width="921" alt="Screenshot 2024-12-13 at 17 24 13" src="https://github.com/user-attachments/assets/f4aad32b-4420-4497-b018-ea4a5a3137c2" />


**Component Explanations**

FinishedOrders.jsx - Displays a list of all completed ride requests, showing start and end locations and the taxi assigned.
Navbar.jsx - The header of the application. It displays the app’s title, a live timer, and the count of waiting orders.
OrderQueue.jsx - Shows all active ride requests in a queue. Displays the distance, start and end locations, and current status of each order.
TaxiGraph.jsx - Visualizes the taxi positions, ride start and end points, and their connections on a 2D grid using a scatter plot.
TaxiList.jsx - Lists all taxis, showing their ID, current location, and status (e.g., “standing” or “driving”).
Timer.jsx - Displays a live timer that resets every 20 seconds, representing the interval at which new ride requests are generated.

**Utility Functions Explained**

1.calculateDistance - Calculates the distance between two points (X, Y) using the Euclidean distance formula.
2.getRandomCoordinate - Returns a random coordinate within the grid (0 to 20).
3.generateColor - Generates a random RGB color to be assigned to taxis.
4.createTaxis - Creates an array of taxis with random initial positions, a starting status of “standing,” and unique colors.
5.createOrder - Creates a new ride request with random start and end points, ensuring the distance between them does not exceed 2 km.
6.moveTaxi - Moves a taxi toward a target destination at a constant speed of 20 meters/second (0.02 km/second) while only moving parallel to the X or Y axes.
7.updateTaxiPosition - Updates the real-time position and state of a taxi. Handles reaching destinations, changes the taxi’s state to “standing” or “driving,” and updates the order queues for active and completed requests.
8.allocateClosestTaxi - Finds the closest available taxi and assigns it to a ride request. If no taxis are available, the request remains in the queue.


