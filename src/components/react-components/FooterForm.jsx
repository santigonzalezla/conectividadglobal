import './css/footerform.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";

const FooterForm = () =>
{
    const [email, setEmail] = useState("");

    const cleanForm = () =>
    {
        setEmail("");
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        emailjs
            .sendForm("service_po94d02", "template_r5cew93", e.target, "p9sy5KN1V1jg0pnLd")
            .then((response) => {
                console.log(response);
                cleanForm();
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="footer-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escribe tu correo"
                    required
                />
                <input
                    hidden
                    name="user_name"
                    defaultValue="Suscripción a Newsletter"
                />
                <input
                    hidden
                    name="user_message"
                    defaultValue={`${email} se ha suscrito a la newsletter`}
                />
                <button type="submit">Suscríbete</button>
            </form>
        </div>
    );
}

export default FooterForm;