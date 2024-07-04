# TaskBuddy

TaskBuddy is a task management system built using Express.js and PostgreSQL. It allows users to add, edit, and delete tasks, with tasks sorted based on their due dates and times. The application provides a clean and responsive interface to help users stay organized and keep track of their tasks.

## Project Description

TaskBuddy is designed to help users efficiently manage their tasks. The application enables users to add, edit, and delete tasks, with the tasks being sorted based on their due dates and times. The responsive design ensures that users can access and use the application on various devices.

## Features

- **Add New Tasks:** Users can add new tasks with a title, due date, and due time.
- **Edit Existing Tasks:** Users can edit the title, due date, and due time of existing tasks.
- **Delete Tasks:** Users can delete tasks once they are completed or no longer needed.
- **Task Sorting:** Tasks are sorted based on their due dates and times, making it easy to see upcoming tasks.
- **Responsive Design:** The interface is responsive and works well on various devices, including desktops, tablets, and mobile phones.
- **Past Task Highlighting:** Tasks that are past their due date are highlighted to indicate they are overdue.

## Technologies Used

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **EJS (Embedded JavaScript templates)**
- **HTML/CSS**
- **JavaScript**

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone git@github.com:nikhil-iitkgp/TaskBuddy.git
    cd taskbuddy
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Database**:
    - Create a PostgreSQL database named `TaskBuddy`.
    - Run the following SQL commands to set up the `tasks` table:
      ```sql
      CREATE TABLE tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        due_date DATE NOT NULL,
        due_time TIME NOT NULL
      );

      INSERT INTO tasks (title, due_date, due_time) VALUES 
      ('Buy milk', '2024-07-04', '09:00'),
      ('Finish homework', '2024-07-05', '17:00');
      ```

4. **Configure the Database Connection**:
    - In the `index.js` file, update the database connection settings if necessary:
      ```javascript
      const db = new pg.Client({
        user: "postgres",
        password: "your_password",
        database: "TaskBuddy",
        port: 5432,
        host: "localhost",
      });
      ```

5. **Start the Server**:
    ```bash
    npm start
    ```

6. **Open the Application**:
    - Open `http://localhost:3000` in your web browser.

## Usage

- To add a new task, fill in the task title, due date, and due time, then click the "+" button.
- To edit a task, click the pencil icon next to the task, make your changes, and click the checkmark icon to save.
- To delete a task, check the checkbox next to the task.

## File Structure

taskbuddy/
├── public/
│ ├── assets/
│ │ └── icons/
│ └── styles/
│ └── main.css
├── views/
│ ├── index.ejs
│ └── partials/
│ ├── header.ejs
│ └── footer.ejs
├── index.js
├── package.json
└── README.md

## Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com/).
- Background gradient by [WebGradients](https://webgradients.com/).

---

Feel free to contribute to this project by submitting issues or pull requests. For any questions or suggestions, please contact me at [nikhilg40151@gmail.com].
