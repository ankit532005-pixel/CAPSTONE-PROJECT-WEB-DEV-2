# React Notes Dashboard App - README

## Project Overview

This project is a **React-based Notes Dashboard Application** built using:

* React Router for navigation
* Redux Toolkit for state management
* Dark Mode Toggle
* Sidebar Navigation
* Dashboard & Graph Pages
* Notes Editor functionality

The application allows users to:

* Navigate between multiple pages
* Create and edit notes
* View dashboards
* Display graph-related data
* Switch between dark and light themes

---

# Features

## 1. Routing with React Router

The app uses **React Router DOM** for page navigation.

### Available Routes

| Route        | Page           | Description           |
| ------------ | -------------- | --------------------- |
| `/`          | HomePage       | Main landing page     |
| `/dashboard` | DashboardPage  | Dashboard view        |
| `/graph`     | GraphPage      | Graph analytics page  |
| `/note/new`  | NoteEditorPage | Create a new note     |
| `/note/:id`  | NoteEditorPage | Edit an existing note |

---

## 2. Redux State Management

Redux is used to manage global state.

### Used Hooks

#### `useSelector()`

Used to access Redux state.

Example:

```js
const darkMode = useSelector((state) => state.settings.darkMode);
```

This gets the dark mode value from Redux store.

#### `useDispatch()`

Used to send actions to Redux store.

Example:

```js
const dispatch = useDispatch();
```

---

## 3. Dark Mode Toggle

Dark mode is controlled using Redux.

### Function Used

```js
onClick={() => dispatch(toggleDarkMode())}
```

When button is clicked:

* Dark mode turns ON/OFF
* UI theme changes dynamically

---

## 4. Sidebar Component

The Sidebar component provides navigation links.

```js
<Sidebar />
```

It helps users navigate through the application.

---

## 5. Header Navigation

The header contains links for:

* Home
* Dashboard
* Graph
* Theme Toggle Button

Example:

```js
<Link to="/">Home</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/graph">Graph</Link>
```

---

# Project Structure

```bash
src/
│
├── components/
│   └── Sidebar.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── DashboardPage.jsx
│   ├── GraphPage.jsx
│   └── NoteEditorPage.jsx
│
├── store/
│   └── slices/
│       └── settingsSlice.js
│
├── App.jsx
└── main.jsx
```

---

# Explanation of App.jsx

## BrowserRouter

```js
<BrowserRouter>
```

Wraps the entire app and enables routing.

---

## Conditional Dark Mode

```js
<div className={darkMode ? "dark" : ""}>
```

If darkMode is true:

* Adds dark class
* Activates Tailwind dark styling

---

## Main Layout

```js
<div className="flex h-screen">
```

Creates full-screen layout using Flexbox.

---

## Routes Section

```js
<Routes>
```

Defines page rendering based on URL.

---

# Technologies Used

* React
* React Router DOM
* Redux Toolkit
* Tailwind CSS
* JavaScript

---

# Installation Steps

## 1. Clone Repository

```bash
git clone <your-repository-link>
```

## 2. Move to Project Folder

```bash
cd your-project-name
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start Development Server

```bash
npm run dev
```

---

# Required Packages

Install these packages:

```bash
npm install react-router-dom react-redux @reduxjs/toolkit
```

---

# Main Concepts Used

## React Router

Used for navigation.

## Redux Toolkit

Used for global state.

## useSelector

Reads Redux state.

## useDispatch

Updates Redux state.

## Dark Mode

Changes UI theme.

## Dynamic Routing

Used for editing notes by ID.

Example:

```js
/note/:id
```

---

# Example Flow

1. Open Home Page
2. Navigate using Sidebar/Header
3. Open Dashboard
4. Create/Edit Notes
5. View Graph Page
6. Toggle Dark Mode

---

# Output

This project creates a modern dashboard app with:

* Routing
* Redux state management
* Dark Mode
* Sidebar
* Notes editor
* Dashboard UI
* Graph page

---

# Author

Created using React + Redux + Router.

---

# Future Improvements

* Add Login Authentication
* Save Notes in Database
* Add Search Feature
* Add User Profile
* Improve Dashboard Analytics
* Export Notes

---

# License

This project is free to use for learning purposes.
