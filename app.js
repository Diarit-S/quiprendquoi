const express = require('express');
const app = express();

const axios = require('axios');

const dotenv = require('dotenv').config();
app.set('view engine', 'pug');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('pwa'));

app.get('/', function(req, res) {
  res.render('index', {title: 'Qui prend quoi'});
});

// Create a new event
app.post('/party', function(req, res) {
  axios
  .post(`${process.env.API_URL}/party`, req.body)
  .then(({data}) => res.redirect(`/party/${data._id}`))
  .catch((err) => res.send(err));
});

// Get the event datas and display it to user
app.get('/party/:id', function(req, res) {
  axios
  .get(`${process.env.API_URL}/party/${req.params.id}`)
  .then(({ data }) => {
    res.render('party', {
      party: data,
      title: data.name,
      url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
      eventId: data._id, 
      items: data.items,
      apiUrl: process.env.API_URL
    })
  }
  )
  .catch((err) => console.log(err));
});

// Create a new item for a specific event 
app.post('/item/:eventId', function(req, res) {
  axios
  .post(`${process.env.API_URL}/party/${req.params.eventId}/items`, req.body)
  .then(({data}) => res.redirect(`/party/${req.params.eventId}`))
  .catch((err) => res.send(err));
})

// Delete an item from an event 
app.post('/removeItem/:eventId/:itemId', function(req, res) {
  axios
  .delete(`${process.env.API_URL}/party/${req.params.eventId}/items/${req.params.itemId}`, req.body)
  .then(() => res.redirect(`/party/${req.params.eventId}`))
  .catch((err) => res.send(err));
})

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));