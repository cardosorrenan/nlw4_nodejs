import express, { response } from 'express';

const app = express();

app.listen(3334, () => console.log("Server is running!"))

app.get('/users', (request, response) => {
  return response.json({
    message: 'Hello',
  })
})

app.post('/users', (request, response) => {
  return response.json({
    message: 'Hello',
  })
})