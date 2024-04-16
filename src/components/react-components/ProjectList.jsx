import './css/projectcard.css';
import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

const ProjectList = () =>
{
    const [openIndex, setOpenIndex] = useState("01");

    const projects = [
        { index: '01', title: 'Proyecto 1: Medios TBL Instalados', description: 'Lorem  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the standard dummy text ever since the' },
        { index: '02', title: 'Proyecto 2: Medios ABL Instalados', description: 'Lorem  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the standard dummy text ever since the' },
        { index: '03', title: 'Proyecto 3: Medios ABL Instalados', description: 'Lorem  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the standard dummy text ever since the' },
        { index: '04', title: 'Proyecto 4: Medios ABL Instalados', description: 'Lorem  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the standard dummy text ever since the' },
    ];

    const handleItemClick = (index) =>
    {
        setOpenIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
    };

    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <ProjectCard
                    project={project}
                    index={index}
                    isOpen={openIndex === project.index}
                    onClick={() => handleItemClick(project.index)}
                />
            ))}
        </div>
    );
}

export default ProjectList;