import './css/resultitem.css';

const ResultItem = ({ project }) =>
{
    return (
        <div className="result-item">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button onClick={() => window.location.href = '/projects'}>Descubre Más</button>
        </div>
    );
}

export default ResultItem;