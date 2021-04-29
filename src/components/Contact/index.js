import React from 'react';

const Contact = () => {

    return (
        <section>
            <h2 id="contact">
                Contact Me
            </h2>
            <form
                id="contact-form"
                // onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        // defaultValue={name}
                        // onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        // defaultValue={email}
                        // onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        // defaultValue={message}
                        // onBlur={handleChange}
                    />
                </div>
            </form>
        </section>
    );
}

export default Contact;
