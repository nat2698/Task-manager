import { Request, Response } from "express";
import Task from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({ name, done, projectId });
    console.log(newTask);
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id }, attributes: ["name"] });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task !== null && task !== undefined) {
      task.name = name, task.done = done, task.projectId = projectId;
    }
    await task?.save();
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Task.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
