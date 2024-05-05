import './css/serviceslist.css';
import { useState } from "react";

const ServicesList = ({ items }) =>
{
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleItemClick = (index) =>
    {
        if (expandedIndex === index)
        {
            setExpandedIndex(index);
        }
        else
        {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="services-list">
            {items.map((item, index) => (
                <div key={index} className="services-list-item" >
                    <div
                        className="services-list-item-header"
                        onClick={() => handleItemClick(index)}
                    >
                        <h4 style={expandedIndex === index ? { color: '#142133' } : { color: 'rgba(132, 147, 182, 0.40)' }}>{item.title}</h4>
                        <span className={expandedIndex === index ? 'icon-expanded' : 'icon-collapsed'}>
                            {expandedIndex === index
                                ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect x="0.25" y="0.25" width="49.5" height="49.5" rx="24.75" stroke="#142133" strokeWidth="0.5"/><path fillRule="evenodd" clipRule="evenodd" d="M30.4788 28.2053C30.1358 28.5351 29.5905 28.5244 29.2607 28.1814L24.9999 23.6583L20.7392 28.1814C20.4094 28.5244 19.864 28.5351 19.5211 28.2053C19.1781 27.8755 19.1674 27.3302 19.4972 26.9872L24.3789 21.8183C24.5414 21.6494 24.7656 21.5539 24.9999 21.5539C25.2343 21.5539 25.4585 21.6494 25.6209 21.8183L30.5027 26.9872C30.8324 27.3302 30.8217 27.8755 30.4788 28.2053Z" fill="#142133"/></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none"><rect x="0.25" y="0.75" width="49.5" height="49.5" rx="24.75" stroke="#374457" strokeOpacity="0.4" strokeWidth="0.5"/><path fillRule="evenodd" clipRule="evenodd" d="M19.5212 22.2945C19.8642 21.9647 20.4095 21.9754 20.7393 22.3183L25.0001 26.8414L29.2608 22.3183C29.5906 21.9754 30.136 21.9647 30.4789 22.2945C30.8219 22.6242 30.8326 23.1696 30.5028 23.5125L25.6211 28.6815C25.4586 28.8504 25.2344 28.9458 25.0001 28.9458C24.7657 28.9458 24.5415 28.8504 24.3791 28.6815L19.4973 23.5125C19.1676 23.1696 19.1783 22.6242 19.5212 22.2945Z" fill="#8493B6" fillOpacity="0.4"/></svg>}
                        </span>
                    </div>
                    {expandedIndex === index && (
                        <div className="services-list-item-content">
                            <div className="services-list-item-content-left">
                                <p>{item.content}</p>
                                <div className="services-list-item-content-left-features">
                                    {item.features.map(feature => (
                                        <div className="services-list-item-content-left-features-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clipPath="url(#clip0_68_319)"><circle cx="12" cy="12" r="12" fill="#142133"/><path d="M6.44092 11.3158L10.3751 15.25L17.5593 8.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_319"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <button>Descubre Más</button>
                            </div>
                            <div className="services-list-item-content-right">
                                <img src={item.image} alt={item.title} />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ServicesList;