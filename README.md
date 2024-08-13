# 📋 **Proyecto de Chat con Angular y Node.js**

Este proyecto es una aplicación de chat desarrollada con **Angular** para el frontend y **Node.js** para el backend. Utiliza **PostgreSQL** como sistema de gestión de base de datos.

## 🚀 **Tecnologías Requeridas**

- **Node.js**: Para el backend.
- **Angular CLI**: Para el frontend.
- **PostgreSQL**: Para la base de datos.

## 🔧 **Instalación**

### 1. **Clonar el Repositorio**

Primero, clona el repositorio desde GitHub:

```bash
git clone https://github.com/javiezapata/ClassChatStreaming.git
cd tu_repositorio

### 2. **Configuración del Backend**

1. **Entrar a la carpeta del servidor**:

    ```bash
    cd server
    ```

2. **Instalar las dependencias**:

    ```bash
    npm install
    ```

3. **Configurar la base de datos**:

    - Crea una base de datos en PostgreSQL con el nombre especificado en el archivo `.env`.
    - Asegúrate de que el archivo `.env` en la carpeta `server` contenga la siguiente configuración:

      ```env
      DB_NAME='class_db'
      DB_USER='nombre usuario'
      DB_PASSWORD='contraseña'
      DB_HOST='localhost'
      DB_PORT=5432
      JWT_SECRET='i=7a=@gq+s%ezv3%kp!vwbs+8(858_4vo-jhyxtgy@40l=azs)'
      ```

4. **Correr el servidor**:

    ```bash
    npm start
    ```

### 3. **Configuración del Frontend**

1. **Entrar a la carpeta del frontend**:

    ```bash
    cd ../frontend
    ```

2. **Instalar las dependencias**:

    ```bash
    npm install
    ```

3. **Correr el frontend**:

    ```bash
    ng serve
    ```

    La aplicación estará disponible en `http://localhost:4200`.



 Uso
Backend: El backend escuchará en http://localhost:3000 para las conexiones de la API y WebSocket.
Frontend: El frontend se sirve en http://localhost:4200 y se conecta al backend para la funcionalidad del chat.
📌 Notas 
Asegúrate de tener PostgreSQL corriendo y accesible desde la configuración de tu archivo .env.
La autenticación se maneja con JWT, por lo que es importante que el secreto en el archivo .env del backend sea el mismo en todos los entornos donde se ejecute la aplicación.
