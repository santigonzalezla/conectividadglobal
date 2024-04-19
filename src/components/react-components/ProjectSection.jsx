import './css/projectsection.css';
import { useState } from "react";
import ProjectItem from "./ProjectItem.jsx";
import projects  from "../../data/projects.js";

const ProjectSection = () =>
{
    const [openIndex, setOpenIndex] = useState("01");

    const handleItemClick = (index) =>
    {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="project-section">
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    project={project}
                    index={index}
                    isOpen={openIndex === project.index}
                    onClick={() => handleItemClick(project.index)}
                />
            ))}
        </div>
    );
}

export default ProjectSection;