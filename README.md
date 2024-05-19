# TVMaze Dashboard

## Introduction

This project is designed to create a TV show dashboard application that categorizes and displays shows based on their genres. The application uses the [TVMaze API](http://www.tvmaze.com/api) to fetch TV shows and provides features such as genre-based categorization, rating-based sorting, and a detailed view for each show. Additionally, it includes a search functionality to allow users to look up TV shows by name. As users scroll down, shows are dynamically loaded based on genres, ensuring a seamless browsing experience. The project has undergone thorough testing, achieving an approximate unit test coverage of 85%. It is published and can be accessed at [https://tvmaze-fawn.vercel.app/](https://tvmaze-fawn.vercel.app/).

## Features

- **Genre-based categorization**: TV shows are displayed in horizontal lists based on their genres (e.g., drama, comedy, sports).
- **Rating-based sorting**: Shows within each genre are sorted according to their ratings.
- **Detailed view**: Clicking on a show redirects the user to a detailed screen with comprehensive information about the show.
- **Search functionality**: Users can search for TV shows by name.
- **Dynamic loading**: As users scroll down, shows are dynamically loaded based on genres.
- **Responsive design**: The application is mobile-friendly and responsive.
- **Theme customization**: It is possible to change the primary color theme by modifying CSS variables.

## Architecture and Design Decisions

- **Framework**: The application is built using Vue.js. Vue.js was chosen for its simplicity, reactivity system, and strong community support. It allows for the creation of clean, reusable components, which aligns with the goal of producing a maintainable and scalable codebase.
- **State Management**: Pinia is used for state management. Pinia provides a simpler and more intuitive API compared to Vuex, making it easier to manage state across the application.
- **Styling**: Tailwind CSS is used for styling the application. Tailwind provides utility-first CSS classes, which helps in creating a consistent and responsive design quickly.
- **Testing**: Vitest is used for unit testing, ensuring the reliability and correctness of the components. Playwright is used for end-to-end testing to validate the application's functionality from the user's perspective.
- **TypeScript**: TypeScript is used to add static typing to the code, improving code quality and reducing the likelihood of runtime errors.

## Project Setup and Running Instructions

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. The recommended version is v20.x.x.
- **NPM**: Ensure you have npm installed. The recommended version is v10.x.x.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mmahabadi/tvmaze.git
   cd tvmaze
   ```
2. **Install dependencies:**:

   ```bash
   npm install
   ```
### Running the Application

1. **Development Server**:

    To start the development server, run:

    ```bash
    npm run dev
    ```
    This will start the application on http://localhost:5173.

2. **Build**:

    To build the application for production, run:

    ```bash
    npm run build
    ```

    This will generate the production-ready files in the `dist` directory.

3. **Preview**:

    To preview the production build, run:
    ```bash
    npm run preview
    ```

### Testing
1. **Unit Tests**:

    To run unit tests, use:
    ```bash
    npm run test:unit
    ```
    To run unit tests with the UI, use:
    ```bash
    npm run test:unit-ui
    ```
2. **End-to-End Tests**:

    To run end-to-end tests, use:
    ```bash
    npm run test:e2e
    ```
    To run end-to-end tests with the UI, use:
    ```bash
    npm run test:e2e-ui
    ```

### Changing the Theme Color
You can change the theme primary color by modifying the CSS variables in your styles. The variables are located in `src/assets/main.css`. To change the primary color and its dark variant, update the following variables in your CSS:
```bash
:root {
  --primary-color: #15b8a6;
  --primary-color-dark: #0f766e;
}
```

## Conclusion

This project demonstrates the creation of a TV show dashboard application using modern frontend technologies. The application is designed with a focus on clean code, reusability, and best practices, ensuring maintainability and scalability. The choice of Vue.js, Pinia, Tailwind CSS, and TypeScript helps in achieving these goals. The included unit and end-to-end tests ensure the reliability and correctness of the application.