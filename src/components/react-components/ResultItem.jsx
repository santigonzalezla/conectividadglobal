import './css/resultitem.css';

const ResultItem = ({ project }) =>
{
    return (
        <div className="result-item">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <div className="result-item-features">
                {project.features.map((feature, index) => (
                    <span key={index}>{feature.name}</span>
                ))}
            </div>
            <p>{project.description}</p>
            <button onClick={() => window.location.href = 'projects.html'}>Descubre Más</button>
        </div>
    );
}

export default ResultItem;