# Eventual App

## Overview

The Eventual App is a web application designed to help users understand and visualize their potential savings on insurance premiums over a three-year period. It provides a comparison between insurance costs with and without a premium lock feature, allowing users to see how much they could save.

## Live Demo
[View the interview challenge live app on GitHub Pages](https://travisldunn.github.io/eventual/)

## V2 of the App
I've created a V2 of the app with additional ideas and improvements to make things clearer for the user. You can check it out here: [View the V2 live app on GitHub Pages](https://travisldunn.github.io/eventual2/)

## Repository
[https://github.com/travisldunn/eventual.git](https://github.com/travisldunn/eventual.git)

## Tech Stack & Rationale
- **React**: Chosen for its component-based architecture and strong ecosystem, making it ideal for building interactive UIs.
- **TypeScript**: Adds type safety and better developer experience, reducing runtime errors.
- **Vite**: Provides fast development and build times, with modern tooling out of the box.
- **Tailwind CSS**: Enables rapid, utility-first styling and ensures a consistent, responsive design.
- **Framer Motion**: Used for smooth, modern animations and transitions.
- **Recharts**: Chosen for its composable, React-friendly charting capabilities.

## Assumptions
- The user is interested in a 3-year insurance premium projection and savings comparison.
- The "strike price" logic and initial insurance data are based on provided or typical values, and can be easily adjusted for real data.
- The app is primarily a marketing/educational tool, not a transactional insurance platform.
- All users see the same static address and initial values for demo purposes.

## If I Had More Time
- Add user authentication and personalized quotes.
- Integrate with a real insurance API for live data.
- Add more robust error handling and edge case coverage.
- Improve accessibility (a11y) and add more comprehensive tests.
- Add dark/light mode toggle and more theme customization.
- Polish mobile responsiveness and pixel-perfect details even further.
- Add analytics to track user interactions and conversion.

## Features

- **Premium Lock Comparison**: Visualize the difference in insurance costs with and without a premium lock.
- **Interactive Slider**: Adjust the annual insurance growth rate to see how it affects potential savings.
- **Responsive Design**: The app is designed to work seamlessly on both desktop and mobile devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Framer Motion**: A library for adding animations to React applications.
- **Recharts**: A composable charting library built on React components.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/travisldunn/eventual.git
   cd eventual
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Open the App**: Open your browser and navigate to `http://localhost:8080` to see the app in action.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deploying to GitHub Pages

To deploy the app to GitHub Pages:

```bash
npm run deploy
```

The app will be available at: [https://travisldunn.github.io/eventual/](https://travisldunn.github.io/eventual/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.


