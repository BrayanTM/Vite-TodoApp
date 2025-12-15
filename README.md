# Vite-TodoApp

Aplicación de lista de tareas (Todo App) creada con Vite.

## Descripción

Esta es una aplicación simple para gestionar una lista de tareas. Permite agregar nuevas tareas, marcarlas como completadas, eliminarlas y filtrarlas.

## Características

- **Añadir tareas:** Añade nuevas tareas a la lista.
- **Marcar como completadas:** Marca o desmarca tareas como completadas.
- **Eliminar tareas:** Elimina tareas individualmente.
- **Limpiar completadas:** Elimina todas las tareas completadas a la vez.
- **Filtrar tareas:** Filtra la lista de tareas por "Todos", "Pendientes" y "Completados".
- **Contador de pendientes:** Muestra el número de tareas pendientes.

## Instalación y Uso

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/K-Bren/Vite-TodoApp
    ```
2.  **Instala las dependencias:**
    ```bash
    cd Vite-TodoApp
    npm install
    ```
3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Sirve la compilación de producción localmente para previsualización.

## Estructura del Proyecto

```
/
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── README.md
├── yarn.lock
├── .git/
├── node_modules/
├── public/
└── src/
    ├── main.js
    ├── style.css
    ├── store/
    │   └── todo.store.js
    └── todos/
        ├── app.html
        ├── app.js
        ├── models/
        │   └── todo.model.js
        └── use-cases/
            ├── create-todo-html.js
            ├── index.js
            ├── render-pending.js
            └── render-todos.js
```

### Descripción de Archivos Clave

- **`index.html`**: El punto de entrada HTML de la aplicación.
- **`src/main.js`**: El punto de entrada de JavaScript, donde se inicializa la aplicación.
- **`src/todos/app.js`**: El archivo principal de la aplicación que controla la lógica, los eventos y el renderizado de la interfaz de usuario.
- **`src/store/todo.store.js`**: Gestiona el estado de la aplicación, incluyendo la lista de tareas y el filtro actual.
- **`src/todos/models/todo.model.js`**: Define el modelo de datos para una tarea.
- **`src/todos/use-cases/`**: Contiene la lógica de negocio para crear y renderizar las tareas.
- **`package.json`**: Define los metadatos del proyecto y las dependencias.

## Dependencias

- **Vite:** Herramienta de desarrollo frontend.
- **uuid:** Para generar identificadores únicos para las tareas.