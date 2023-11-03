import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { BASE_URL } from '../../DataStore/Urls';
import axios from 'axios';
import { contactStringResponses } from './ContactStrings';

export const Contact: React.FC = (): JSX.Element => {
    const [name, setName] = useState<string | undefined>(undefined);
    const [email, setEmailAddress] = useState<string | undefined>(undefined);
    const [text, setEmailText] = useState<string | undefined>(undefined);
    const [statusMessage, setStatusMessage] = useState<JSX.Element | undefined>(undefined);
    const [isRequired, setIsRequired] = useState<boolean>(false);

    const { okStatus, badStatus, allFieldsAreRequired } = contactStringResponses;

    const handleSendMessage = (): void => {
        try {
            if (!name || !email || !text) {
                setIsRequired(true);
                return;
            }

            setIsRequired(false);
            axios.post(`${BASE_URL}/api/sendMail`, {
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
                {isRequired ? allFieldsAreRequired : null}
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name:*</Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" required onChange={(e) => setName(e.currentTarget.value)} value={name || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address:*</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required onChange={(e) => setEmailAddress(e.currentTarget.value)} value={email || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message:*</Form.Label>
                        <Form.Control as="textarea" rows={7} placeholder="Enter your message" required onChange={(e) => setEmailText(e.currentTarget.value)} value={text || ''} />
                    </Form.Group>
                </Form>
                <br />
                <Button variant="primary" onClick={() => handleSendMessage()}>Send Message</Button>
            </Container>
        </>
    );
};