

# Task Manager App

A simple task management web application built using **React** and **Vite**, where users can manage tasks by adding, editing, deleting, and viewing tasks based on their status (Pending or Completed).

## Features

- **Task List**: Displays a list of tasks with title, description, due date, and status.
- **Status Tabs**: Filter tasks based on their status (All, Pending, Completed).
- **Add Task**: Add new tasks through a modal form.
- **Edit Task**: Edit existing tasks using a popup form.
- **Delete Task**: Delete tasks from the list.
- **Persistent Data**: Uses local storage to persist tasks across page reloads.

## Basic Demo video
https://www.loom.com/share/cdac39c13a784485af45502b8c6a41f6?sid=d80812d5-7410-4f47-8105-513c65e3cc39


## Installation

To run the app locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Sudhardeena/Filoffee_Task_Manager.git
cd Filoffee_Task_Manager
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Run the Project

To start the development server, use the following command:

```bash
npm run dev
```

This will start the app on `http://localhost:5173` by default.

## Usage

### App Structure

The app is composed of several components:

- **`App.jsx`**: The main component that holds the state of the task list and manages task additions, updates, and deletions.
- **`TaskContext.js`**: A context provider for managing global state like the task list, active status tab, and functions for manipulating tasks.
- **`TaskListContainer.jsx`**: A container that filters and displays the list of tasks.
- **`TaskItem.jsx`**: Represents each individual task in the list.
- **`TaskForm.jsx`**: A form component used for adding and editing tasks.
- **`AddTaskPopup.jsx`**: A popup modal for adding new tasks.
- **`EditTaskPopup.jsx`**: A popup modal for editing existing tasks.
- **`StatusTabIndicator.jsx`**: Displays and manages the filter tabs (All, Pending, Completed).
- **`Header.jsx`**: Displays the title and the "Add Task" button.

### Task Operations

- **Add a Task**: Click on the **Add Task** button to open the task form in a popup. Fill out the form and click **Add** to save the task.
- **Edit a Task**: Click the **Edit** icon on a task to open the form and modify the task details.
- **Delete a Task**: Click the **Delete** icon to remove a task from the list.
- **Filter Tasks**: Use the status tabs (All, Pending, Completed) to filter tasks based on their current status.

## How It Works

1. **Task Management**: 
   - When a task is added, it is stored in the component's state and also persisted in the browser’s local storage.
   - Tasks are rendered dynamically based on the active status tab (`All`, `Pending`, or `Completed`).

2. **Context API**: 
   - The `TaskContext` is used to share the task list, status tab, and methods (`addTask`, `updateTask`, `deleteTask`) across components.

3. **Modals**:
   - Tasks can be added or edited using popup modals implemented with `reactjs-popup`. The modal content is the `TaskForm` component that handles form submission and validation.

4. **Local Storage**: 
   - The tasks are stored in the browser’s local storage to persist the list across page reloads.


