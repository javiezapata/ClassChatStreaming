const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http'); // Importar http
const socketIo = require('socket.io'); // Importar socket.io
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const User = require('./models/Users');
const Message = require('./models/Message');

dotenv.config();

const app = express();
const server = http.createServer(app); // Crear servidor HTTP
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Sincronización de modelos con la base de datos
(async () => {
  await User.sync();
  await Message.sync();
  console.log('Modelos sincronizados con la base de datos');
})();

// Importar controladores y middleware
const authController = require('./controllers/authController');
const messageController = require('./controllers/messageController');
const verifyToken = require('./middlewares/verifyToken');

// Definir rutas
app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/messages', verifyToken, messageController.createMessage);
app.get('/messages', verifyToken, messageController.getMessages);

// Configurar Socket.IO
io.on('connection', (socket) => {
  console.log('New client connected');

  // Escuchar mensajes nuevos
  socket.on('newMessage', async (data) => {
    const { content, userId } = data;

    try {
      const user = await User.findByPk(userId);
      if (user) {
        const newMessage = await Message.create({
          content,
          userId,
          role: user.role,
          usernamechat: user.username
        });

        // Emitir el mensaje a todos los clientes conectados
        io.emit('message', newMessage);
      }
    } catch (error) {
      console.error('Error al guardar el mensaje:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Iniciar el servidor
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
