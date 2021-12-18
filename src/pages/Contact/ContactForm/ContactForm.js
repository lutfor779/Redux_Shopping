import React, { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_USER_ID } from '../Config/config';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmit(true);

        emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID,
            form.current, EMAIL_JS_USER_ID)
            .then((result) => {
                setIsSend(true);
                setIsSubmit(false);
            })
            .catch((err) => {
                alert(err.text);
                setIsSend(false);
                setIsSubmit(false);
            })
        e.target.reset();
    };

    return (
        <Form
            ref={form}
            onSubmit={sendEmail}
            className="py-4 align-items-center text-start">

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="to_name"
                    required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="number"
                    name="from_phone"
                    required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="from_name"
                    required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    name="from_subject"
                    required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    style={{ height: '100px' }}
                    required
                />
            </Form.Group>

            {
                isSend && <Alert variant="success">Thank you for your comment</Alert>
            }
            {
                isSubmit ? <Button
                    variant="danger"
                    className="px-5"
                    disabled
                >
                    Send
                </Button> : <Button
                    variant="outline-danger"
                    type="submit"
                    className="px-5"
                >
                    Send &#8594;
                </Button>
            }
        </Form>
    );
};

export default ContactForm;