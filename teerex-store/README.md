# Teerex Store Project

## What is the use of this Repo

This Project is a Shopping Cart ReactJS Project which does the following
1. Listing all the products available
2. User can add the products to cart
3. User can filter the products by various criteria
4. User can checkout the cart

The project Template can be used to build bigger projects

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **Cart** Component : This Component displays the items in the Cart Page
2. **Filter** Component : This Component displays the available Filter options and lets user to filter the products.
3. **Header** Component : This Component is the top nav bar of the application
4. **Home** Component: This Component displays the items in the Home Page
5. **SingleProduct** Component: This Component is the design each Product card.

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has two URLS:
1. "/" The URL for Home page
2. "/cart" The URL for Cart page

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap