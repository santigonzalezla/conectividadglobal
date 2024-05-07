import './css/resultlist.css';
import projects from "../../data/projects.js";
import ResultItem from "./ResultItem.jsx";

const ResultList = () =>
{
    const [firstProject, ...otherProjects] = projects;

    return (
        <div className="result-list">
            <div className="result-list-top">
                <div className="result-list-top-card">
                    <div className="result-list-top-card-info">
                        <div className="result-list-top-card-info-item">
                            <p>Cliente</p>
                            <h3>{firstProject.client}</h3>
                        </div>
                        <div className="result-list-top-card-info-item">
                            <p>Facebook</p>
                            <h3>{firstProject.satisfaction}</h3>
                        </div>
                    </div>
                    <div className="result-list-top-card-info">
                        <div className="result-list-top-card-info-item">
                            <p>Impresiones</p>
                            <h3>{firstProject.scope}</h3>
                        </div>
                        <div className="result-list-top-card-info-item">
                            <p>Vistas</p>
                            <h3>{firstProject.roi}</h3>
                        </div>
                    </div>
                </div>
                <div className="result-list-top-info">
                    <ResultItem
                        project={firstProject}
                    />
                </div>
            </div>
            <div className="result-list-bottom">
                {otherProjects.map((project, index) => (
                    <ResultItem
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}

export default ResultList;