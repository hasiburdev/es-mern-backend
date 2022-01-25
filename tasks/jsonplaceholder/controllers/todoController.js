import Todo from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  if (req.query.length > 0) {
    getTodoByQuery(req, res);
    return;
  }

  const todos = await Todo.find();
  if (!todos.length) {
    res.status(404).json({ message: "No Todos Found!" });
    return;
  }
  res.status(200).json(todos);
};

export const createTodo = async (req, res) => {
  const todo = new Todo(req.body);
  await todo
    .save()
    .catch((err) =>
      res.status(500).json({ message: "Internal Server Error!" })
    );
  res.status(201).json(todo);
};

export const getTodo = async (req, res) => {
  const todo = await Todo.findOne({ id: req.params.todoId }).exec();
  if (!todo) {
    res.status(404).json({ message: "Todo Not Found!" });
    return;
  }
  res.status(200).json(todo);
};

export const createTodos = async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    res.end();
  }
};

const getTodoByQuery = (req, res) => {
  const todo = await Todo.findOne({ id: req.query.todoId }).exec();
  if (!todo) {
    res.status(404).json({ message: "Todo Not Found!" });
    return;
  }
  res.status(200).json(todo);
};
