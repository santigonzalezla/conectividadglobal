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
                            <p>Client</p>
                            <h3>{firstProject.client}</h3>
                        </div>
                        <div className="result-list-top-card-info-item">
                            <p>Satisfaction</p>
                            <h3>{firstProject.satisfaction}</h3>
                        </div>
                    </div>
                    <div className="result-list-top-card-info">
                        <div className="result-list-top-card-info-item">
                            <p>Scope</p>
                            <h3>{firstProject.scope}</h3>
                        </div>
                        <div className="result-list-top-card-info-item">
                            <p>ROI</p>
                            <h3>{firstProject.roi}</h3>
                        </div>
                    </div>
                </div>
                <div className="result-list-top-info">
                    <h2>{firstProject.name}</h2>
                    <div className="result-list-top-info-features">
                        {firstProject.features.map((feature, index) => (
                            <span key={index}>{feature.name}</span>
                        ))}
                    </div>
                    <p>{firstProject.description}</p>
                    <button onClick={() => window.location.href = 'projects.html'}>View Project</button>
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