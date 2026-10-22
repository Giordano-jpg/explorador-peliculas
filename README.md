# Explorador de películas

Práctica de Evaluación Continua 2 de *Diseño y despliegue de aplicaciones multiplataforma* (UCJC).

Aplicación web hecha con React que consume la API de [The Movie Database (TMDB)](https://www.themoviedb.org/). Permite ver las películas populares, buscar por título y guardar una lista de favoritos que se conserva entre sesiones.

## Funcionalidades

- Página principal con las películas populares, búsqueda por título, indicador de carga y mensaje de error.
- Favoritos: botón de corazón en cada tarjeta (al pasar el ratón) y página dedicada con todas las favoritas.
- Los favoritos se guardan en `localStorage`.
- Barra de navegación fija con React Router (`/` y `/favorites`).

## Tecnologías

React, Vite, React Router, Context API y la API de TMDB.

## Cómo ejecutarla

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Crear un archivo `.env` en la raíz con tu API Key de TMDB (se consigue gratis en https://www.themoviedb.org/settings/api):

   ```
   VITE_TMDB_API_KEY=tu_clave
   ```

3. Arrancar la aplicación:

   ```bash
   npm run dev
   ```

## Estructura

```
src/
├── components/   NavBar y MovieCard
├── contexts/     MovieContext (favoritos)
├── pages/        Home y Favorites
├── App.jsx       Rutas y provider del contexto
└── main.jsx
```
