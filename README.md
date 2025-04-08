
# Let's Watch

A movie-ticket booking application made using MERN Stack.
using this application you can book select your movie, slot for that movie , seat prefrence and number of seats.
user can book a movie show with this website.


## Features

- home page with booking form 
- movie,slot,seat, no. of seat selection
- alert when booking is done 
- displaying of lastbooking details on same page 
- booking page for details of last booking 
- Cross platform
- responsive design 



## API Reference


API for displaying movies
#### Get movies

```http
  GET /api/movies
```

API for create a booking
#### to book the show(movie)

```http
  post /api/bookings
```
API for getting last booking details
#### to book the show(movie)

```http
  get /api/bookings
```



## Documentation

[Documentation](https://documenter.getpostman.com/view/41724314/2sB2cVeMpR)


## Tech Stack

**Client:** React, Redux 

**Server:** Node, Express


## Developed With

### Visual Studio Code -
 A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring

### Node.js - 
Javascript runtime

### React -
 A javascript library for building user interfaces


### tailwind css -
Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving  HTML.

### Axios -
 Promise based HTTP client for the browser and node.js

### Express js -
 Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### MongoDB atlas - 
MongoDB Atlas is the global cloud database service for modern applications.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites: 

 The following software is required to be installed on your system:

Node v20.14.0
Npm 10.7.0

Type the following commands in the terminal to verify your node and npm versions
```bash
node -v
npm -v
```

## Installation
Follow the following steps to get development environment running.

. Clone 'Let's Watch.git' repository from GitHub 

 ```bash

  https://github.com/karnpriya08/Let-s-Watch.git

```
. Setup Backend

```bash
  cd server
 npm install

```

. set .env file 

```bash
  MONGO_URI=your_mongodb_connection_string
    PORT=your_port_number
```

. Start the backend server
```bash
   npm start
```
.setup frontend 

. Install node modules

 ```bash
  cd client
npm install
npm run dev

```


