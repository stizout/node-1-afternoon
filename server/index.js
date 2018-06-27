const express = require('express'),
bodyParser = require('body-parser'),
messages_controller = require('./controllers/messages_controller')

const app = express();
app.use(bodyParser.json());

app.use( express.static( __dirname + '/../public/build' ) );

app.get('/api/messages', messages_controller.read);

app.post('/api/messages', messages_controller.create);

app.put('/api/messages/:id', messages_controller.update)

app.delete('/api/messages/:id', messages_controller.delete)









app.listen(3000, () => console.log("Server Started Node 1 Afternoon"));