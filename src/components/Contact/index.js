import React from 'react';

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log("handleSubmit says hello!");
    };

    const handleChange = e => {
        console.log(e.target.name);
        console.log("handleChange says hello!");
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
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        // defaultValue={name}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        // defaultValue={email}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        // defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    data-testid="submit"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;
