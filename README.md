# Proyecto 6

Proyecto 6 es una API REST que gestiona información sobre fabricantes y modelos de coches de lujo. Utiliza Node.js y Express para el servidor, y Mongoose para interactuar con una base de datos MongoDB alojada en Mongo Atlas. El proyecto implementa un CRUD completo para ambas colecciones: fabricantes y modelos.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB (Mongo Atlas)
- Mongoose
- Dotenv
- Javascript

## Instalación

1. Crear un archivo json:

   ```sh
   npm init -y
   ```

2. Instalar librerías:

   ```sh
   npm i dotenv, mongoose, express
   ```

3. Instalar librería nodemon en devDependencies:

   ```sh
   npm i -D nodemon
   ```

4. Crear un archivo `.env` en el directorio raíz y añadir las variables de entorno:

   ```env
   DB_URL=****************
   ```

5. Levantamos servidor:

   ```sh
   app.listen(3000, () => {
   console.log('Servidor levantado en http://localhost:3000')
   })
   ```

6. Iniciar el servidor:

   ```sh
   npm run start
   ```

7. Iniciar nodemon:

   ```sh
   npm run dev
   ```

## Uso

### Endpoints

#### Fabricantes

1. **GET /fabricantes**

   - **Descripción**: Obtiene la lista de todos los fabricantes, incluyendo sus modelos.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un fabricante con sus detalles y modelos.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4567",
         "nombre": "Ferrari",
         "modelos": [...]
       },
       ...
     ]
     ```

2. **GET /fabricantes/año/:año**

   - **Descripción**: Obtiene la lista de todos los fabricantes por año.
   - **Parámetros**:
     - `año` (number): Año de fabricación.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un fabricante con el año especificado.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4567",
         "nombre": "Ferrari",
         "año": 2020,
         "modelos": [...]
       },
       ...
     ]
     ```

3. **GET /fabricantes/pais/:pais**

   - **Descripción**: Obtiene la lista de todos los fabricantes por país.
   - **Parámetros**:
     - `pais` (string): País del fabricante.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un fabricante del país especificado.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4567",
         "nombre": "Ferrari",
         "pais": "Italia",
         "modelos": [...]
       },
       ...
     ]
     ```

4. **GET /fabricantes/:id**

   - **Descripción**: Obtiene un fabricante por su ID.
   - **Parámetros**:
     - `id` (string): ID del fabricante.
   - **Respuesta**: Devuelve un objeto representando el fabricante con el ID especificado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4567",
       "nombre": "Ferrari",
       "modelos": [...]
     }
     ```

5. **POST /fabricantes**

   - **Descripción**: Crea un nuevo fabricante.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "nombre": "Lamborghini",
       "año": 2021,
       "pais": "Italia"
     }
     ```
   - **Respuesta**: Devuelve el objeto del fabricante recién creado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4568",
       "nombre": "Lamborghini",
       "año": 2021,
       "pais": "Italia",
       "modelos": []
     }
     ```

6. **PUT /fabricantes/:id**

   - **Descripción**: Actualiza un fabricante existente por su ID.
   - **Parámetros**:
     - `id` (string): ID del fabricante.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "nombre": "Porsche",
       "año": 2022,
       "pais": "Alemania",
       "modelos": []
     }
     ```
   - **Respuesta**: Devuelve el objeto del fabricante actualizado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4567",
       "nombre": "Porsche",
       "año": 2022,
       "pais": "Alemania",
       "modelos": [...]
     }
     ```

7. **DELETE /fabricantes/:id**
   - **Descripción**: Elimina un fabricante por su ID.
   - **Parámetros**:
     - `id` (string): ID del fabricante.
   - **Respuesta**: Devuelve el fabricante eliminado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4567",
       "nombre": "Porsche",
       "año": 2022,
       "pais": "Alemania",
       "modelos": [...]
     }
     ```

#### Modelos

1. **GET /modelos**

   - **Descripción**: Obtiene la lista de todos los modelos.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un modelo con sus detalles.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4569",
         "nombre": "488 Spider",
         "fabricante": "60d5ec49f72e4e3b4c8b4567"
       },
       ...
     ]
     ```

2. **GET /modelos/cv/:cv**

   - **Descripción**: Obtiene la lista de todos los modelos por caballos de fuerza (cv).
   - **Parámetros**:
     - `cv` (number): Caballos de fuerza del modelo.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un modelo con el número de caballos de fuerza especificado.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4570",
         "nombre": "Aventador",
         "cv": 700,
         "fabricante": "60d5ec49f72e4e3b4c8b4568"
       },
       ...
     ]
     ```

3. **GET /modelos/año/:año**

   - **Descripción**: Obtiene la lista de todos los modelos por año.
   - **Parámetros**:
     - `año` (number): Año de fabricación del modelo.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un modelo con el año especificado.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4570",
         "nombre": "Aventador",
         "año": 2021,
         "fabricante": "60d5ec49f72e4e3b4c8b4568"
       },
       ...
     ]
     ```

4. **GET /modelos/precio/:precio**

   - **Descripción**: Obtiene la lista de todos los modelos cuyo precio es menor o igual al valor especificado.
   - **Parámetros**:
     - `precio` (number): Precio máximo del modelo.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un modelo con el precio menor o igual al especificado.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4570",
         "nombre": "Aventador",
         "precio": 400000,
         "fabricante": "60d5ec49f72e4e3b4c8b4568"
       },
       ...
     ]
     ```

5. **GET /modelos/modelo/:modelo**

   - **Descripción**: Obtiene la lista de todos los modelos por nombre de modelo.
   - **Parámetros**:
     - `modelo` (string): Nombre del modelo.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un modelo con el nombre especificado.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4570",
         "nombre": "Aventador",
         "fabricante": "60d5ec49f72e4e3b4c8b4568"
       },
       ...
     ]
     ```

6. **GET /modelos/:id**

   - **Descripción**: Obtiene un modelo por su ID.
   - **Parámetros**:
     - `id` (string): ID del modelo.
   - **Respuesta**: Devuelve un objeto representando el modelo con el ID especificado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4570",
       "nombre": "Aventador",
       "fabricante": {
         "_id": "60d5ec49f72e4e3b4c8b4568",
         "nombre": "Lamborghini"
       }
     }
     ```

7. **POST /modelos**

   - **Descripción**: Crea un nuevo modelo.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "nombre": "Huracán",
       "cv": 610,
       "año": 2022,
       "precio": 300000,
       "fabricante": "60d5ec49f72e4e3b4c8b4568"
     }
     ```
   - **Respuesta**: Devuelve el objeto del modelo recién creado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4571",
       "nombre": "Huracán",
       "cv": 610,
       "año": 2022,
       "precio": 300000,
       "fabricante": "60d5ec49f72e4e3b4c8b4568"
     }
     ```

8. **PUT /modelos/:id**

   - **Descripción**: Actualiza un modelo existente por su ID.
   - **Parámetros**:
     - `id` (string): ID del modelo.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "nombre": "Huracán",
       "cv": 640,
       "año": 2023,
       "precio": 320000,
       "fabricante": "60d5ec49f72e4e3b4c8b4568"
     }
     ```
   - **Respuesta**: Devuelve el objeto del modelo actualizado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4571",
       "nombre": "Huracán",
       "cv": 640,
       "año": 2023,
       "precio": 320000,
       "fabricante": "60d5ec49f72e4e3b4c8b4568"
     }
     ```

9. **DELETE /modelos/:id**
   - **Descripción**: Elimina un modelo por su ID.
   - **Parámetros**:
     - `id` (string): ID del modelo.
   - **Respuesta**: Devuelve un mensaje confirmando la eliminación.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "message": "Modelo eliminado correctamente."
     }
     ```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
