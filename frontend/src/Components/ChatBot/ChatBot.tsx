import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

import { BASE_URL } from '../../DataStore/DataStore';

const styles = { width: "75%", margin: "auto", display: "block" };

export const ChatBot = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [apiResponse, setApiResponse] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL.apiPath}/api/getChatGptResponse`, { prompt })
            setApiResponse(response.data.chatCompletion.choices[0].message.content);
        } catch (e) {
            setApiResponse("Something is going wrong, Please try again.");
        }
        setLoading(false);
    };


    return (
        <>
            <Form
                onSubmit={handleSubmit}
                style={styles}
            >
                <InputGroup>
                    <Form.Control
                        style={{ height: "50vh" }}
                        as="textarea"
                        placeholder="Ask anything to Open AI aka ChatGPT"
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt} />
                </InputGroup>
                <br />
                <Button
                    variant="secondary"
                    disabled={loading || prompt.length === 0}
                    type="submit"
                >
                    {loading ? "Generating Answer..." : "Submit"}
                </Button>
            </Form >
            {apiResponse && (
                <>
                    <br />
                    <Form>
                        <Form.Text
                            className="base-text-color"
                            style={styles}
                        >
                            {apiResponse}
                        </Form.Text>
                    </Form >
                </>
            )}
        </>
    );
};
