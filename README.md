# Connex One Full Stack Test

## Tech Stack:

### Backend

- Node Js
- Typescript
- Express

### Frontend

- React
- Typescript

## Installation:

- After cloning the repo run `npm i` in the root to install dependencies for the backend.
- Then `cd client` and again run `npm i` to install dependencies for the frontend.
- Create a `.env` file in the root of the project and copy the following there:

```
AUTH_TOKEN=mysecrettoken
```

- Create another `.env` file in the `client` folder and copy the following there:

```
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_API_AUTH_TOKEN=mysecrettoken
```

## Running Locally:

- From the root run `npm run dev` to start the backend server and frontend locally simultaneously with concurrently.

## Testing

- `npm run lint:server` from the root to run lint for the backend code.
- `npm run test:server` from the root to run unit tests for the backend code.
- `npm run lint:client` from the root to run lint for the frontend code.
- `npm run test:client` from the root to run test for the frontend code.
