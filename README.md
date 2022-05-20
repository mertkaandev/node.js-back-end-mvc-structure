**Node.js Back End MVC Structure**

This repository provides a basic back-end mvc structure for your Node.js and Express.js projects. Except for the Views structure. Because I suggest you to use server-client structure for that. If you don't know the server-client structure, learn more.

With this repository, you don't have to do certain things from scratch. It will speed up your project start-ups. I didn't go any further because your wishes may differ.

**Downloaded Packages:**
 + express
 + mongoose
 + dotenv
 + nodemon

**File Structure**

1. `index.js`: Express server installed. Packages included. Database connection function included. CustomErrorHandler is included and run as a middleware. The dotenv package has been configured. The "/api/" router has been written. The path of the static files is specified.

2. `env`: This file holds environment variables. Configured with dotenv. It keeps the current PORT and MONGO_URL variables inside.

3. `public`: It has a folder called "uploads" to keep static files in it.

4. `routes`: It was created using the Express Router. It has two files named index.js and auth.js. Index.js redirects to auth.js. Auth.js maintains two routers with register and login endpoints.

5. `models`: This file holds an advanced "User" model within it. This "User" model is modeled by Mongoose.

6. `middlewares`: Middleware is written here. Inside this folder is a custom error handler called "customErrorHandler".

7. `helpers`: This folder has two folders. One of them is the database folder where the function to make a database connection is located. The other is the error folder, which allows us to write customErrorHandler.

8. `controllers`: Register and login controllers are kept here.
