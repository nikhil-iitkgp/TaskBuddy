import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  password: "124421",
  database: "TaskBuddy",
  port: 5432,
  host: "localhost",
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

async function getTasks() {
  const result = await db.query(
    "SELECT * FROM tasks ORDER BY due_date ASC, due_time ASC"
  );
  return result.rows;
}

app.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.render("index", {
      listTitle: "TaskBuddy",
      listTasks: tasks,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching tasks from database");
  }
});

app.post("/add", async (req, res) => {
  try {
    const { newTask, due_date, due_time } = req.body;
    await db.query(
      "INSERT INTO tasks (title, due_date, due_time) VALUES ($1, $2, $3)",
      [newTask, due_date, due_time]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding task to database");
  }
});

app.post("/edit", async (req, res) => {
  try {
    const { updatedTaskId, updatedTaskTitle, updatedDueDate, updatedDueTime } = req.body;
    await db.query(
      "UPDATE tasks SET title=$1, due_date=$2, due_time=$3 WHERE id=$4",
      [updatedTaskTitle, updatedDueDate, updatedDueTime, updatedTaskId]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating task in database");
  }
});

app.post("/delete", async (req, res) => {
  try {
    const id = req.body.deleteTaskId;
    await db.query("DELETE FROM tasks WHERE id=$1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting task from database");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
