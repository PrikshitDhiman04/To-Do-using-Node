const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTasks = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("tasks added ", task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};
4;

const removeTask = (index) => {
  const tasks = loadTasks();

  const taskIndex = index - 1;

  if ((taskIndex = 0 || taskIndex >= tasks.length)) {
    console.log("Invalid Task Number");
  }
  const removedTask = tasks.splice(taskIndex, 1);

  console.log("Removed Item : ", removedTask[0].task);
};

const command = process.argv[2]; // gets the commmand
const argument = process.argv[3]; // gets  the argument

if (command === "add") {
  addTasks(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument)); // can come as id, we will set id
} else {
  console.log("command not found!");
}
