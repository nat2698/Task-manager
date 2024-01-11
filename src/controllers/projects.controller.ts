import { Request, Response } from "express";
import Project from "../models/Project";
import Task from "../models/Task";

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.findAll();
    console.log(projects);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id: id,
      },
    });
    if (!project)
      return res.status(404).json({ message: "Project does not exists" });
    res.json(project);
  } catch (error) {}
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await Project.create({ name, priority, description });
    console.log(newProject);
    res.json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const project = await Project.findByPk(id);
    if (project !== null && project !== undefined) {
      (project.name = name),
        (project.priority = priority),
        (project.description = description);
    }
    await project?.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteproject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Project.destroy({ where: { id: id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProjectTasks = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      where: { projectId: id },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
