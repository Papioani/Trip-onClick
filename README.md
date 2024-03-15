# Trip onClick

# About

A full-stack app that streamlines trip planning into a simple click-and-go experience. The planning process is simplified by providing preset general routes as cards and enabling users to craft their own routes using simple click buttons. Each click randomly generates choices, eliminating the need for manual typing. Two more buttons allow users to choose between deleting the random choice or adding it to the final trip plan.

A user-friendly 'myTrips' page with links allows users to complete the booking process.

Frameworks used:

> **React** for the user interface;

> **Express** and **Node** for the server side;

> **MySQL** for the database.

In this repository, you will find a full stack app using React, Node/Express, Leaflet, React Leaflet, React Router, Framer Motion,React Player, Bootstrap, MySQL.

React: for creating interactive and dynamic frontend components;

React Leaflet: for incorporating maps into React components;

Framer Motion: for smooth and visually appealing animations;
React Player: for embedding and playing media files;
Bootstrap: for styling and layout of the frontend components.
Figma: for for designing interfaces for websites;

## Setup

### Dependencies

Leaflet: for integrating maps and geographical features;
To install Leaflet and React Leaflet run `npm install leaflet react-leaflet`

React Router: for handling navigation and rendering different components based on the URL;
To install React Router run `npm install react-router-dom`

To install Framer Motion run `npm install framer-motion`

To install React Pleyer run `npm install react-player`

To install Bootstrap run `npm install bootstrap`

### Database Prep

Create `.env` file in project directory and add

```
 DB_HOST=localhost
 DB_USER=root
 DB_NAME=ManiPlaces
 DB_PASS=your password
```

Run `npm run migrate` in your **TERMINAL**, in the **project** folder to create a table called 'items' in your database.

<!-- NPM RUN MIGRATE executes all the comments in the file INIT_DB.SQL!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 4000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://react.dev/)

## Notes

_There are a few files and commented out lines that are useless. Ignore them.
List of elements not used or to be ignored: _

- places.js since my mysql was not working. However, you can use it, if you want, since the tables of the database are populated with data!!
- OldSleepFrontend is useless

- I might have not imported `import 'bootstrap/dist/css/bootstrap.min.css';`now that I think about it. Probably I should have in app.js (?). And that is probably why the relevant code doesn´t work.

- Screenshot 2023 in images folder: not used yet
- ManiPlacesOnscreen is not used
- FetchApiBackend is not used

(((for Ioanna use: The error message suggests that you should first pull the changes from the remote repository to integrate them into your local repository before pushing your changes. Here are the steps you can follow:

Pull Changes from the Remote Repository:
bash
Copy code
git pull origin main
Replace origin with the name of your remote (if it's different) and main with the branch you're working on (it could be main, master, or another branch name).

Resolve any Conflicts (if there are any):
When you pull changes, Git might detect conflicts if changes in the remote repository conflict with your local changes. You'll need to resolve these conflicts manually. Git will mark the conflicting sections in the affected files. Open these files, resolve the conflicts, and then stage the changes.

Commit the Merged Changes:
After resolving conflicts, add the resolved files and commit the changes:

bash
Copy code
git add .
git commit -m "Merged remote changes")))
