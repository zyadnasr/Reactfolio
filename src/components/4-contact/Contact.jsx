import React from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contactUs from '../../animation/contact-us.json';

function Contact() {
    const [state, handleSubmit] = useForm("mrgnlbkk");
    return (
        <section className='contact-us'>
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact us
            </h1>
            <p className="sub-title">
                Contact us for more information and to get notified when I publish something new.
            </p>
            <div className="flex space-between">
                <form onSubmit={handleSubmit} className='flex column'>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" autoComplete='off' id='email' name='email' required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className='flex' style={{ marginTop: '24px' }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea id='message' name='message' required ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button disabled={state.submitting} className='submit' type="submit">
                        {state.submitting ? 'submitting...' : 'submit'}
                    </button>

                    {state.succeeded && <p className='flex' style={{ fontSize: '18px', marginTop: "1.7rem" }}>
                        <Lottie loop={false} style={{height: 35}} animationData={doneAnimation} />
                        Your message has been sent successfully👌.</p>}
                </form>
                <div className="animation">
                    <Lottie className='contact-animation' style={{height: 355}} animationData={contactUs} />
                </div>
            </div>
        </section>
    )
}

export default Contact