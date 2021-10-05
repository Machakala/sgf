import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactScreen = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v6x00lo', 'template_amgt4lb', form.current, 'user_syFDDLTx9DXNu5OBrl7oW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <h2 className='about1'>
                    <strong>
                        CONTACT US
                    </strong>
                </h2>
                <label>First Name</label>

                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                />
                <label>Last Name</label>

                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                />
                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <label>Phone Number</label>

                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                />
                <label>Subject</label>

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                />

                <label>message</label>

                <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                ></textarea>
                <button type="submit" value="Send">SEND US A MESSAGE</button>
            </div>

        </form>
    );
};

export default ContactScreen;