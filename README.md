# 📓 My Notes App - Scalable Local Storage Note Taking

## 🌟 Overview

This is a modern, responsive Note Taking application designed with a focus on **scalability and clean architecture**. While the initial UI is minimal, the core objective was establishing a robust, feature-rich codebase capable of supporting complex future enhancements.

The app uses the browser's **Local Storage** as its primary database, providing a fast, persistent, and private user experience without requiring a backend server.

## ✨ Features

* **CRUD Operations:** Full functionality to **C**reate, **R**ead, **U**pdate, and **D**elete notes.
* **Search Functionality:** Real-time search across note titles and content for quick access.
* **Trash System:** Notes can be soft-deleted to a dedicated Trash view, allowing for permanent deletion or restoration.
* **Recent Files:** A Home dashboard that intelligently displays recently created or modified notes and folders.
* **Context-Based State Management:** Centralized state logic using the React Context API ensures consistent data access and manipulation across all components.

## 🚀 Technical Stack

* **Frontend Framework:** React
* **Styling:** Tailwind CSS (for rapid, utility-first styling)
* **State Management:** React Context API (`Note.jsx`)
* **Persistence:** Browser Local Storage

## 📁 Architecture & File Structure

The entire application state, including the handling of notes, recent arrays, and trash management, is centralized within the `Note.jsx` context.

### Data Structure (`RecentNotes` Array)

Each note is stored as an object with the following properties, ensuring traceability and organization:

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | String/Number | Unique identifier for the note. |
| `title` | String | The main heading of the note. |
| `content` | String | The body text of the note. |
| `created` | Date/String | Timestamp of creation (for sorting). |
| `isTrashed` | Boolean | Flag to move the note to the trash view. |
| `folderId` | String/Number | (Future scalability: Link to a parent folder) |

### Page Layout

| Page Name | Description | Key Functionality |
| :--- | :--- | :--- |
| **Home (`/`)** | Displays a dashboard of **Recent Notes** and **Recent Folders**. | Quick access to current work, folder navigation. |
| **View (`/view`)** | Shows a complete, unfiltered list of all active notes and folders. | Comprehensive viewing and sorting of all content. |
| **Trash (`/trash`)** | Dedicated section for soft-deleted notes. | Restore or permanently delete notes. |

## 💡 Scalability Focus

The current codebase prioritizes a clean separation of concerns, ensuring easy future expansion:

* **Context-Driven Logic:** All memory updates (CRUD operations) are isolated in the Context file, meaning components don't need to worry about *how* data is saved, only *what* data to save.
* **Folder Structure:** The data model is designed to easily accommodate **Folder** functionality by simply adding a `folderId` property to the note objects and building out the corresponding UI.

## 🏃 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Suryansusm1234/Notes-app
    cd [Project Folder]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install (I prefer this)
    ```
3.  **Run the application:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm run dev
    ```

The application will typically be accessible at `http://localhost:5173`.