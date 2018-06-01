# Hiking Friend: React Capstone Project
By, Matt San Pedro

Purpose: Find hiking trails by entering an address, location, or national park name.  
Register a hiking trail with group/individual name(s) for future reference.

Link to deployed version: 
https://hiking-friend.netlify.com/

Link to source code:
https://github.com/mattNat/hiking-app

Tech stack:
-React.js
-Redux
-MongoDB
-Express.js
-Node.js

# Landing Page
![Landing Page](https://raw.githubusercontent.com/mattNat/hiking-client/master/src/img/landing.png)

Contains detailed instructions on how to navigate and use the app.  A navigation bar is available.

# Search Page
![Search Page](https://raw.githubusercontent.com/mattNat/hiking-client/master/src/img/searchReadme.png)

Below "Find your next adventure", you can search by address, city, or national park.
Submit the search by clicking a place from the drop down menu.
Clicking on "Save Trail" button will take you to the save form.

# Register Trail Page
![Registration Form](https://raw.githubusercontent.com/mattNat/hiking-client/master/src/img/saveTrail.png)

Enter in user name, comment, and date when the hike is planned.
In addition, there are trail details that appear below.
Click "Save" to save the inputs and trail information to the database.
Click "Cancel" to return to the home screen.

# Saved Trails Page
![Saved Trails](https://raw.githubusercontent.com/mattNat/hiking-client/master/src/img/postImage.png)

Page is accessed through the nav bar by clicking "Saved Trails."
On the very top is the trail name and user inputs immediately below.
The "Delete Post" button deletes the post and refreshes the page.
Hovering over the image shows details of the hike.

# Thinkful Backend Template

A template for developing and deploying Node.js apps.

## Getting started

### Setting up a project

* Move into your projects directory: `cd ~/YOUR_PROJECTS_DIRECTORY`
* Clone this repository: `git clone https://github.com/Thinkful-Ed/backend-template YOUR_PROJECT_NAME`
* Move into the project directory: `cd YOUR_PROJECT_NAME`
* Install the dependencies: `npm install`
* Create a new repo on GitHub: https://github.com/new
    * Make sure the "Initialize this repository with a README" option is left unchecked
* Update the remote to point to your GitHub repository: `git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`

### Working on the project

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Run the development task: `npm start`
    * Starts a server running at http://localhost:8080
    * Automatically restarts when any of your files change

## Databases

By default, the template is configured to connect to a MongoDB database using Mongoose.  It can be changed to connect to a PostgreSQL database using Knex by replacing any imports of `db-mongoose.js` with imports of `db-knex.js`, and uncommenting the Postgres `DATABASE_URL` lines in `config.js`.

## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

### Setting up the project on Heroku

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`

* If your backend connects to a database, you need to configure the database URL:
    * For a MongoDB database: `heroku config:set DATABASE_URL=mongodb://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME`
    * For a PostgreSQL database: `heroku config:set DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME`

* If you are creating a full-stack app, you need to configure the client origin: `heroku config:set CLIENT_ORIGIN=https://www.YOUR_DEPLOYED_CLIENT.com`

### Deploying to Heroku

* Push your code to Heroku: `git push heroku master`
