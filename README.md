webiste Link -

Run the Project:
npm i
npm run dev

Autonomous Taxi Service 🚖

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

src/
├── components/
│ ├── FinishedOrders.jsx // Displays completed orders
│ ├── Navbar.jsx // Header component
│ ├── OrderQueue.jsx // Displays active ride requests
│ ├── TaxiGraph.jsx // Graph visualization for taxis and orders
│ ├── TaxiList.jsx // List of all taxis and their statuses
│ └── Timer.jsx // Timer displaying elapsed simulation time
├── utils/
│ └── utils.js // Utility functions for taxi movement, order generation, and allocation logic
├── App.jsx // Main application entry point
├── index.css // Global styles
└── main.jsx // React/Vite entry file
