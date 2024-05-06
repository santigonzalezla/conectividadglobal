import './css/projectcard.css';
import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

const ProjectList = () =>
{
    const [openIndex, setOpenIndex] = useState("01");

    const projects = [
        { index: '01', title: 'Colegio Rochester: Revista Semana', description: 'Junto con el Colegio Rochester diseñamos una estrategia en colaboración con Revista Semana para informar a padres de familia sobre la innovación pedagígica del colegio. ' },
        { index: '02', title: 'Fedetranscarga: Portfolio & Caracol TV', description: 'Llevamos a cabo una estrategia integral para promover su marca, incluyendo la elaboración de una separata de 24 páginas con circulación total en el Diario Portafolio y un comercial en Caracol TV.' },
        { index: '03', title: 'Pengin Random House: Torre Colpatria', description: 'En colaboración con la editorial Penguin Random House realizamos el lanzamiento de la obra pósuma "En agosto nos Vemos" de Gabriel Gacía Márquez, a través de un escenario atípico: la torre colpatria.' },
        { index: '04', title: 'Summum Porjects: Revista Portfolio', description: 'Llevamos a cabo una estrategia digital para aumentar la visibilidad de la marca, creando un contenido con réplica digital y producción de video entrevista con su correspondiente réplica en portafolio.co. ' },
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
                    key={index}
                    index={index}
                    isOpen={openIndex === project.index}
                    onClick={() => handleItemClick(project.index)}
                />
            ))}
        </div>
    );
}

export default ProjectList;