import './css/contactform.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () =>
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const clearForm = () =>
    {
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleNameChange = (e) =>
    {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, "");
        setName(onlyLetters);
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        emailjs
            .sendForm("service_po94d02", "template_r5cew93", e.target, "p9sy5KN1V1jg0pnLd")
            .then((response) => {
                console.log(response);
                clearForm();
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="contact-form">
            <h1>Contáctanos</h1>
            <form className="contact-form-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    name="user_name"
                    onChange={handleNameChange} required/>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)} required/>
                <input
                    type="text"
                    placeholder="Mensaje"
                    value={message}
                    name="user_message"
                    onChange={(e) => setMessage(e.target.value)} required/>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 29 25" fill="none">
                        <path d="M28.9351 1.5287C29.001 1.3924 29.0172 1.24309 28.9815 1.09928C28.9459 0.955468 28.86 0.823476 28.7346 0.719667C28.6091 0.615859 28.4497 0.5448 28.2759 0.515299C28.1021 0.485798 27.9217 0.499153 27.757 0.553708L1.3915 9.2821H1.38969L0.570464 9.55209C0.415302 9.60332 0.280267 9.68904 0.180275 9.79979C0.0802829 9.91054 0.0192259 10.042 0.0038482 10.1797C-0.0115295 10.3173 0.0193706 10.4558 0.0931353 10.5799C0.1669 10.7039 0.280658 10.8087 0.421844 10.8826L1.16494 11.2726L1.16676 11.2756L10.2199 16.0425L15.9798 23.5349L15.9834 23.5379L16.4547 24.1529C16.5442 24.2693 16.6709 24.363 16.8207 24.4237C16.9704 24.4843 17.1375 24.5096 17.3035 24.4967C17.4696 24.4839 17.6281 24.4333 17.7616 24.3507C17.8952 24.2681 17.9986 24.1566 18.0605 24.0284L28.9351 1.5287ZM25.6129 4.36366L12.0305 15.6045L11.6408 15.0975C11.5694 15.0045 11.4741 14.9256 11.3617 14.8665L10.7491 14.544L24.3315 3.30317L26.4666 2.59668L25.6147 4.36366H25.6129Z" fill="#EEEEEE"/>
                    </svg>
                    <span>Enviar Mensaje</span>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;