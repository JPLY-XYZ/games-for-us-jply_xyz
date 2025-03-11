# 📌GAMES FOR US

Una aplicación web creada con React y Vite que permite a los usuarios buscar juegos, gestionar sus favoritos y pendientes, y configurar su experiencia de usuario. La aplicación se conecta a una API separada para obtener los datos.

## 🌍 Páginas y Rutas

La aplicación cuenta con las siguientes páginas:

- **`/`** → Página principal (`Home`)
- **`/buscador`** → Página de búsqueda de juegos (`Buscador`)
- **`/howtouse`** → Página con instrucciones de uso (`HowToUse`)
- **`/juegos-favoritos`** → Lista de juegos favoritos (Requiere autenticación, de lo contrario, redirige a `Login`)
- **`/juegos-pendientes`** → Lista de juegos guardados como pendientes (Requiere autenticación, de lo contrario, redirige a `Login`)
- **`/login`** → Página de inicio de sesión (`Login`)
- **`/register`** → Página de registro (`Register`)
- **`/configure`** → Configuración del usuario (Requiere autenticación, de lo contrario, redirige a `Login`)
- **`*`** → Página de error 404 (`NotFound`)

## 🚀 Instalación y Uso Local

Para ejecutar esta aplicación en tu entorno local, sigue estos pasos:

### 1️⃣ Clonar el repositorio

```sh
git clone https://github.com/JPLY-XYZ/games-for-us-jply_xyz
cd tu-repo
```

### 2️⃣ Instalar dependencias

```sh
npm install
```

### 3️⃣ Iniciar la aplicación

```sh
npm run dev
```

La aplicación se ejecutará en `http://localhost:5173/` de manera predeterminada.

## 🔗 Conexión con la API

Esta aplicación se conecta a una API externa para obtener los datos de los juegos. Asegúrate de configurar correctamente la URL de la API en las variables de entorno.

Crea un archivo `.env` en la raíz del proyecto y define:

```sh
VITE_API_URL=https://api.ejemplo.com
```

## 🛠️ Tecnologías Usadas

- React con Vite

- React Router para la gestión de rutas

- &#x20;Tailwind para estilos (según la implementación)

## 📜 Licencia

Este proyecto está bajo la licencia **Creative Commons Atribución-NoComercial 4.0 Internacional**.



