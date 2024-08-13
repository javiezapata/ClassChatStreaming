const Message = require('../models/Message');
const User = require('../models/Users');

// Crear un nuevo mensaje
exports.createMessage = async (req, res) => {
  const { content, userId, username } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const newMessage = await Message.create({
      content,
      userId,
      role: user.role,
      username: user.username // Guardar el username en el mensaje
    });

    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el mensaje', error });
  }
};

// Obtener todos los mensajes
exports.getMessages = async (req, res) => {
  try {
    // Obtener todos los mensajes y relacionar con la tabla User
    const messages = await Message.findAll({
      order: [['createdAt', 'ASC']]
    });

    // Procesar los mensajes para incluir el username
    const messagesWithUsername = messages.map(message => {
      // `message.user` contiene los datos del usuario relacionados
      console.log(message)
      return {
        ...message.dataValues, // Datos del mensaje
        username: message.user.username, // Añadir username al mensaje
        role: message.user.role // Añadir role al mensaje
      };
    });

    return res.status(200).json(messages); // Devolver mensajes con username
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los mensajes', error });
  }
};

