Notes Management API
A simple RESTful API built with Express.js and MongoDB (Mongoose) to manage notes.
Supports creating, reading, updating, deleting notes, plus searching and deleting by tags or titles.

Features
Create, Read, Update, Delete (CRUD) notes

Search notes by tag

Get notes by ID or tag

Update notes by ID or title

Delete notes by ID, title, or tag

Case-insensitive searches on string fields

Structured error handling

Tech Stack
Node.js

Express.js

MongoDB

Mongoose

Morgan (request logging)

dotenv (environment variables)

Installation
Clone repository

Run npm install to install dependencies

Create a .env file in the root with:



Start MongoDB locally or use MongoDB Atlas

Run the server:

nginx
Copy
Edit
node server.js
API Endpoints
Method	Route	Description
GET	/api/notes	Get all notes
GET	/api/notes/:id	Get note by ID
GET	/api/notes/tag/:tag	Get notes by tag
POST	/api/notes	Add a new note
PUT	/api/notes/:id	Update note by ID
PUT	/api/notes/title/:title	Update note by title
DELETE	/api/notes/:id	Delete note by ID
DELETE	/api/notes/title/:title	Delete note by title
DELETE	/api/notes/tag/:tag	Delete notes by tag

Notes
When using routes with titles or tags, URL-encode special characters and spaces.

Searching and deleting by tag or title is case-insensitive.




