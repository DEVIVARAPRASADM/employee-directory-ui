# AJACKUS Frontend UI Assignment

## Project Overview

This project is a responsive and interactive Employee Directory Web Interface built using HTML, CSS, and JavaScript. It allows users to view, add, edit, delete, search, filter, sort, and paginate employee records stored locally in the browser. The interface is designed with user experience and clean code practices in mind. Although Freemarker templates are referenced in the project structure, the primary functionality is validated using standard HTML files for demonstration purposes.

## Features

- Dashboard listing all employees with Employee ID, Name, Email, Department, and Role
- Add/Edit Employee Form with field validation
- Search functionality (by name or email)
- Filter employees by First Name, Department, and Role
- Sort by First Name or Department
- Pagination support with options for 5, 10, 25, 50, and 100 employees per page
- Responsive layout for desktop, tablet, and mobile
- Data persistence using localStorage (no backend required)
- Graceful handling of invalid input or user actions

## Technologies Used

- HTML5
- CSS3 (Flexbox and Media Queries)
- JavaScript (Vanilla)

## Project Structure

```
employee-directory/
├── src/
│   └── main/
│       └── resources/
│           ├── static/
│           │   ├── css/
│           │   │   └── style.css
│           │   └── js/
│           │       ├── app.js
│           │       ├── form.js
│           │       └── data.js
│           └── templates/
│               ├── index.ftlh
│               └── form.ftlh
└── README.md
```

## How to Run

Open `index.html` or `form.html` directly in your browser to test the UI and functionality. 
The final project files will be converted to Freemarker-compatible `.ftlh` templates and placed under `templates/`.

## Screenshots

To add screenshots:
1. Place image files inside the project (e.g., `screenshots/dashboard.png`)
2. Reference them like this:
    ![Dashboard](screenshots/dashboard.png)
    ![Form](screenshots/form.png)
    ![Filter Popup](screenshots/filter-popup.png)
## Demo-link

- link:https://drive.google.com/file/d/1EFN5iyn1BQlqq7bg3v3bfB8HC6oBDdRP/view?usp=sharing

## Challenges Faced

- Managing state across multiple user interactions (edit/delete/add)
- Implementing combined search, filter, sort, and pagination
- Styling for all screen sizes without affecting layout

## Improvements for Future

- Add confirmation modals for edit/delete actions
- Enhance filtering UI with multi-select dropdowns
- Refactor JavaScript for better modularization
- Integrate with a real backend or API for persistent data
