# MVP-Project-

# Full Stack To Do App

In this repository, you will find a full stack app using React, Node/Express, Leaflet, React Leaflet, React Router, Framer Motion,React Player, Bootstrap, MySQL.


## Setup

### Dependencies

To install Leaflet and React Leaflet run `npm install leaflet react-leaflet`

To install React Router run `npm install react-router-dom`

To install Framer Motion run `npm install framer-motion`

To install React Pleyer run `npm install react-player`

To install Bootstrap run `npm install bootstrap`


([ probably no need to: Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).)]

### Database Prep

Create `.env` file in project directory and add

```
 DB_HOST=localhost
 DB_USER=root
 DB_NAME=ManiPlaces   
 DB_PASS=your password 
```

Run `mysql -u root` to the terminal  

([ No need to do this , probably:  Run `npm run migrate` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

<!-- NPM RUN MIGRATE executes all the comments in the file INIT_DB.SQL!!!!!!!!!!!!!!!!!!!!!!!!!! --> ]) 

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 4000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`

## Basic Requirements

No requirements. Do whatever you want

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://react.dev/)

## Notes
_There are a few files and commented out lines that are useless. Ignore them. 
List of elements not used or to be ignored: _
- places.js  since my mysql was not working. However, you can use it, if you want, since the tables of the database are populated with data!!
- OldSleepFrontend is useless

- I might have not imported `import 'bootstrap/dist/css/bootstrap.min.css';`now that I think about it. Probably I should have in app.js (?). And that is probably why the relevant code doesn´t work.
  

- Screenshot 2023 in images folder: not used yet
- ManiPlacesOnscreen is not used
- FetchApiBackend is not used 
