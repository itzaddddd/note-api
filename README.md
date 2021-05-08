# note-api
Note API
API For Note Taking

How To Install
1. clone git
2. change file name ".env.example" to ".env"
3. run command "npm install" in terminal for install dependencies
4. run command "npm start" for start server
5. server will run on port 3000 and connect to mongoDB

API
1. GET  /    => Get all notes (to sort note, must add querystring => ?sort_by=createdAt or ?sort_by=title )
2. POST /    => Create a note (must set header "Content-Type: application/json" before)
3. GET  /:id => Get a note by id
4. GET  /tag => Get note with tag (must add querystring => ?tag=xxx)

*mark 
1. sorting may doesn't working
2. validation doesn't define

