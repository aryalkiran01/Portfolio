import { Project } from "../models/project";
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
export default getProjects;
