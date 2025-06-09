// controllers/getProjects.ts
import { Request, Response } from "express";
import { Project } from "../models/project.ts";

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export default getProjects;
