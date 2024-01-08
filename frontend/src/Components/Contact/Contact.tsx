import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { contactStringResponses } from './ContactStrings';
import { BASE_URL } from '../../DataStore/DataStore';

export const Contact: React.FC = (): JSX.Element => {
    const [name, setName] = useState<string | undefined>(undefined);
    const [email, setEmailAddress] = useState<string | undefined>(undefined);
    const [text, setEmailText] = useState<string | undefined>(undefined);
    const [statusMessage, setStatusMessage] = useState<JSX.Element | undefined>(undefined);
    const [validated, setValidated] = useState(false);

    const { okStatus, badStatus } = contactStringResponses;

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (validated) {
            handleSendMessage();
        }
    };

    const handleSendMessage = (): void => {
        try {
            axios.post(`${BASE_URL.apiPath}/api/sendMail`, {
                name,
                email,
                text
            }).then(res => {
                setDefaultState();
                res.status === 200 ?
                    setStatusMessage(okStatus) : setStatusMessage(badStatus);
                clearStatusMessage();
            });
        } catch (error: unknown) {
            setStatusMessage(badStatus);
            console.error(error, "Could not send message!");
        }
    }

    const setDefaultState = () => {
        setName(undefined);
        setEmailAddress(undefined);
        setEmailText(undefined);
    }

    const clearStatusMessage = () => {
        setTimeout(() => {
            setStatusMessage(undefined)
        }, 3000)
    }

    return (
        <>
            <Container>
                <br />
                {statusMessage}
                <br />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" required onChange={(e) => setName(e.currentTarget.value)} value={name} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required onChange={(e) => setEmailAddress(e.currentTarget.value)} value={email} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={7} placeholder="Enter your message" required onChange={(e) => setEmailText(e.currentTarget.value)} value={text} />
                        <Form.Control.Feedback type="invalid">
                            Please enter a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
                <br />
                <Button variant="secondary" type="submit">Send Message</Button>
            </Container>
        </>
    );
};