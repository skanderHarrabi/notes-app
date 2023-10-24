# Notes App

The Note app is a web application for listing and managing notes efficiently.

### Features

- Create, Read, Update, and Delete (CRUD) operations for notes.
- View a list of available notes.
- Search notes.
- Notes details including Title and Description.

### Tech Stack

- Frontend:
  - React
  - TypeScript
  - Scss
  - Docker

- Backend:
  - Node.js
  - TypeScript
  - Express
  - MongoDB
  - Docker

### Installation

To set up the Notes App, follow these steps:

#### Frontend

```sh
$ cd frontend
$ npm install
```
#### Backend

```sh
$ cd backend
$ npm install
```

### Running the app

#### Frontend

Starting to react app at port 3000
```sh
$ npm start
```
#### Backend

1. Rename the .env.example file in the backend directory to .env.
2. Inside the .env file, add the following configuration for MongoDB, specifying your MongoDB URL and port:
```sh
$ MONGO_DB_URL=your-MongoDB-URL
$ PORT=node-port
```
3. Save the .env file.
4. Now, you can start the backend server:
```sh
$ npm run dev
```

### Improvements

- **User Management:** Add user authentication to the system, allowing users to have personalized accounts, archive their notes, and access their own notes.
- **Enhanced Search and Filters:** Implement advanced search and filtering options for a more streamlined user experience.
- **Tracking:** Consider implementing a logging system, possibly using the ELK stack (Elasticsearch, Logstash, Kibana), to capture errors and user actions within the application. This setup will enable efficient monitoring, analysis, and visualization of application performance and user experience data.

These planned improvements will enhance the functionality and usability of the Notes application, making it a more comprehensive and user-friendly solution for taking notes.
### ScreenShots
<img width="1504" alt="Screenshot 2023-10-24 at 05 12 34" src="https://github.com/skanderHarrabi/notes-app/assets/36156046/6b940d94-2877-452b-b7ba-b7544deedd17">
<img width="1510" alt="Screenshot 2023-10-24 at 05 12 43" src="https://github.com/skanderHarrabi/notes-app/assets/36156046/280cb4aa-43e5-4873-b79c-af472211e9ca">
<img width="1509" alt="Screenshot 2023-10-24 at 05 12 57" src="https://github.com/skanderHarrabi/notes-app/assets/36156046/62b9f92e-2ff4-4daf-88a7-39d2889cd750">
<img width="1508" alt="Screenshot 2023-10-24 at 05 13 08" src="https://github.com/skanderHarrabi/notes-app/assets/36156046/795f3f0f-a6ac-4ac3-be72-91558948c901">


