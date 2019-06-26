require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Item = require('./api/model');
const bodyParser = require('body-parser');

mongoose.connect(process.env.DB_CONN_STRING);

const app = express();
const router = express.Router();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
   // To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
   res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

   // Remove cache to recieve most recent comments
   res.setHeader('Cache-Control', 'no-cache');
   next();
});

app.get('/', (req, res) => {
   res.json({ message: 'API initialized!!' });
});

router.route('/listItems')
   .get((req, res) => {
      Item.find((err, listItems) => {
         if (err) res.send(err);
         res.json(listItems);
      });
   })
   .post((req, res) => {
      var item = new Item();
      item.title = req.body.title;

      item.save((err) => {
         if (err) res.send(err);
         res.json({ message: 'Item was posted!' });
      });
   });

router.route('/listItems/:item_id')
   .put((req, res) => {
      Item.findById(req.params.item_id, (err, item) => {
         item.title = req.body.title;
         if (err) res.send(err);

         item.save((err) => {
            if (err) res.send(err);
            res.json({ message: 'Item was updated!' });
         });
      });
   })
   .delete((req, res) => {
      Item.remove({ _id: req.params.item_id }, (err) => {
         if (err) res.send(err);

         res.json({ message: 'Item was deleted!' });
      });
   });

app.use('/', router);

// ADDING PAGE NOT FOUND IF 404 RESPONSE
app.use((req, res) => {
   res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, (err) => {
   if (err) throw err;
   console.log(`Listening on port:${ port }`);
});
