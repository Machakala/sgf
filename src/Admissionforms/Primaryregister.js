import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Primaryregister = () => {
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
                ADDMISSION FORM DETAILS         </strong>
        </h2>
        <form ref={form} onSubmit={sendEmail}>

            <input
                type="text"
                name="firstname"
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastname"
                placeholder="Last Name"
            />

            <input
                type="text"
                name="address"
                placeholder="Enter Your House Address"
            />

            <input
                type="text"
                name="class"
                placeholder="What Class are you in?"
            />
            <input
                type="date"
                name="date"
                placeholder="Enter Your Date of Birth"
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
            />
            <textarea
                type="text"
                name="message"
                placeholder="Message"
            ></textarea>
            <button type="submit" value="Send">SUBMIT</button>
        </form>
    </div>
    );
};

export default Primaryregister;