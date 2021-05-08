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
GET  /    => Get all notes (to sort note, must add querystring => ?sort_by=createdAt or ?sort_by=title )
POST /    => Create a note (must set header "Content-Type: application/json" before)
GET  /:id => Get a note by id
GET  /tag => Get note with tag (must add querystring => ?tag=xxx)



