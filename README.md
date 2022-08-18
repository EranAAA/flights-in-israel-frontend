## Flights In Israel
   
Flights in Israel is the app that, as the title says, brings all the passenger flights in and out from Israel Ben Gurion Airport.

If you need to check in addition to your flight you also get the full flight history with indication if the flight is delayed (in minutes) or canceled.

** Fligts updated every 30 min **

DASHBOARD: 
1. Avg. delay
2. Flights per day/hour
3. Statistics per Airline/Flight No
4. Avg. canceled
  
## Challenges

Building server:
API: https://data.gov.il/dataset/flydata
UPDATE: every 15 min for only flights in schedule. 

The main challenge was to display flight and their history (mainly for dashboard)
For that reason I build a small server separately that runs every 30 min and gather the data and update in mongoDB. The logic is to add only new flights or update flights with status change (increment)

## Demo

https://flights-in-israel.herokuapp.com/

## Screenshots

   <p align="left"><p/>
   <img src="./src/style/imgs/flight_1.png" alt="" />

   <p align="left"><p/>
   <img src="./src/style/imgs/flight_2.png" alt="" />
   
   <p align="left">Example for flight 6H 531 with ISRAIR AIRLINES: can see the all flight history<p/>
   <p align="left">can learn that this flight keep delay each flight!<p/>
   <img src="./src/style/imgs/flight_3.png" alt="" />
   
## Tech Stack

**Client:** React.js, Redux, SCSS

**Server:** Node.js, MongoDB, cron

**Main Dependencies:** mui, react-icons, react-chartjs-2, react-bootstrap

   <p align="left">
   <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass"
            width="40" height="40" />
      </a>
         <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react" width="40" height="40" />
      </a>
       <a href="https://redux.js.org" target="_blank" rel="noreferrer">
         <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"
            width="40" height="40" />
      </a>
      <a href="https://nodejs.org" target="_blank" rel="noreferrer">
         <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs" width="40" height="40" />
      </a>
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb" width="40" height="40" />
      </a>
           <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img
            src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" />
      </a>
   </p>
      
## Deployment

Clone the project - Frontend

```bash
  git clone https://github.com/EranAAA/flights-in-israel-frontend.git
  npm i --force
  npm start
```

Clone the project - Backend

```bash
  git clone https://github.com/EranAAA/flights-in-israel-backend.git
  npm i
  npm start
```
MongoDB: 
Create database: board_db
collection: user, board

