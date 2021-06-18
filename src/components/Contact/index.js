import React, { useState } from 'react';
import { init, sendForm } from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';
import './assets/css/style.css';
init("user_eicA7XxHepWPbv7ePxLFy");


const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');

        sendForm('default_service', 'template_mgzzki8', '#contact-form')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                setStatusMessage('Thank you for your message!');
            }, function(error) {
                console.log('FAILED...', error);
                setErrorMessage('Something went wrong...');
            });
    };

    const handleChange = e => {
        setStatusMessage('');

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            isValid ? setErrorMessage('') : setErrorMessage('Your email is invalid');
        } else {
            e.target.value.length ? setErrorMessage('') : setErrorMessage(`${e.target.name} is required`);
        }

        if (!errorMessage) setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section>
            <h2 id="contact">
                Contact Me
            </h2>
            <form
                id="contact-form"
                onSubmit={handleSubmit}
            >
                <div className="form-input">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={name}
                        onBlur={handleChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={email}
                        onBlur={handleChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                <div className="form-stuff">
                    <button type="submit" data-testid="submit">
                        Submit
                    </button>

                    {errorMessage && (
                        <div>
                            <p className="error-message">
                                {errorMessage}
                            </p>
                        </div>
                    )}

                    {statusMessage && (
                        <div>
                            <p className="status-message">
                                {statusMessage}
                            </p>
                        </div>
                    )}

                </div>
            </form>
        </section>
    );
}

export default ContactForm;
