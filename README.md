# Proyecto React con Vite y Bootstrap

Este proyecto es una plantilla base desarrollada con **React** usando **Vite** como herramienta de construcción y **Bootstrap** como framework de estilos. Está organizado en componentes individuales como `Navbar`, `Hero`, `Features`, etc., siguiendo buenas prácticas de modularidad y escalabilidad.

---

## 🧩 ¿Por qué los nombres de los componentes van en mayúscula?

En React, se recomienda que los componentes se escriban en **PascalCase** (primera letra en mayúscula), tanto en el **nombre del archivo** como en el **nombre del componente**. Esto es porque:

- React interpreta todo lo que empieza con **minúscula** como un elemento HTML nativo.
- Para diferenciar claramente componentes personalizados, estos deben comenzar con mayúscula.

**Ejemplo:**
```jsx
import Hero from './components/Hero'; // ✅ Correcto
import hero from './components/hero'; // ⚠️ Puede dar errores o comportamientos inesperados
```

---

## 🎨 ¿Qué es Bootstrap?

[Bootstrap](https://getbootstrap.com/) es un framework CSS popular que facilita el desarrollo de sitios web responsivos y estilizados rápidamente. Proporciona:

- Un sistema de rejilla flexible (Grid System) basado en 12 columnas.
- Componentes UI reutilizables como botones, navbars, tarjetas, alertas, modales, etc.
- Utilidades de espaciado, colores, alineación, visibilidad, tipografía y más.

### 📘 Lógica de clases en Bootstrap
Las clases de Bootstrap suelen seguir esta lógica: `componente-modificador-breakpoint-tamaño`.

Por ejemplo:
- `col-md-4`: columna de 4 espacios para pantallas medianas (≥768px).
- `mb-3`: margen inferior (bottom margin) de tamaño 3.
- `text-center`: centra el texto horizontalmente.
- `d-flex`, `justify-content-center`, `align-items-center`: para usar Flexbox y centrar contenido.
- `bg-dark`, `bg-light`, `btn-primary`, `btn-outline-secondary`: para aplicar estilos de color predefinidos.

Estas clases permiten construir interfaces complejas sin necesidad de escribir CSS personalizado.

---

## 🚀 Requisitos

- Node.js >= 14
- npm >= 6

---

## 🛠️ Instrucciones para crear el proyecto

### 1. Crear el proyecto con Vite y React

```bash
npm create vite@latest react-bootstrap-app --template react
cd react-bootstrap-app
npm install
```

### 2. Instalar Bootstrap y Popper

```bash
npm install bootstrap @popperjs/core
```

### 3. Importar Bootstrap en `main.jsx`

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Testimonials.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```

---

## 🖥️ Ejecutar el proyecto

```bash
npm run dev
```

---

## 📌 Autor

- Javier Sanchez

---
