import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    demoLink: String,
    githubLink: String,
    image: String,
});
export const Project = mongoose.model('Project', projectSchema);
