import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Eventregister = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v6x00lo', 'template_vmojmrc', form.current, 'user_syFDDLTx9DXNu5OBrl7oW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (<div>
        <h2 className='text-tittle'>
            <strong>
                REGISTER FOR EVENT            </strong>
        </h2>
        <form ref={form} onSubmit={sendEmail}>
            <label>First Name</label>

            <input
                type="text"
                name="firstname"
            />
            <label>Last Name</label>

            <input
                type="text"
                name="lastname"
            />
            <label>Enter Your House Address</label>

            <input
                type="text"
                name="address"
            />
            <label>Event You Want To Register For?</label>
            <input
                type="text"
                name="event"
            />
            <label>Subject</label>

            <input
                type="text"
                name="subject"
            />
            <label>Message</label>
            <textarea
                type="text"
                name="message"
            ></textarea>
            <button type="submit" value="Send">REGISTER</button>
        </form>
    </div>
    );
};

export default Eventregister;