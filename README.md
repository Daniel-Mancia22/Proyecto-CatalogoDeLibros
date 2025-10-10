# 📚 Proyecto - Catalogo De Libros

Este proyecto es una aplicación web desarrollada con React y TypeScript que permite explorar un catálogo de libros obtenidos desde la API de Open Library. La aplicación incluye funcionalidades como filtrado por géneros, gestión de favoritos con persistencia en localStorage y notificaciones para las acciones del usuario.


## 🚀 Funcionalidades

**1. Visualización del Catálogo de Libros**
- Muestra los libros en tarjetas organizadas en un layout responsivo en cuadrícula
- Cada tarjeta muestra: portada del libro, título, autor e información adicional
- Diseño adaptable para diferentes dispositivos


**2. Sistema de Filtrado**
- Panel de filtros con géneros disponibles (Romance, Ciencia Ficción, Fantasía, Misterio, etc.)
- Filtrado dinámico que actualiza la lista de libros en tiempo real
- Interfaz intuitiva para seleccionar/deseleccionar múltiples filtros


**3. Gestión de Favoritos**

- Botón "Agregar a Favoritos" en cada tarjeta de libro
- Almacenamiento persistente en localStorage
- Persistencia de favoritos al recargar la página


**4. Sistema de Notificaciones**

- Notificaciones toast para acciones del usuario
- Mensajes personalizados para agregar/remover favoritos
- Implementado con react-toastify a través de un custom hook


**5. Custom Hooks**

- **useFetchData:** Hook para obtener datos de la API de Open Library
- **useNotification:** Hook para gestionar las notificaciones toast


## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez del código
- **React Toastify** - Sistema de notificaciones
- **LocalStorage API** - Persistencia de datos
- **Open Library API** - Fuente de datos de libros
- **CSS/Tailwind** - Estilos y diseño responsivo (según implementación)

## 🧑🏽‍💻 Desarrollador
- [Daniel Mancia](https://github.com/Daniel-Mancia22) - DevMadCode

## 📝 Nota 
Esta aplicación fue desarrollada como parte de un proyecto académico/práctico para demostrar habilidades en **React**, **TypeScript** y **gestión de estado.**
