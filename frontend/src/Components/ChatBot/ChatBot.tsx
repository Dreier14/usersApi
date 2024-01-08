import { useState } from "react"
import { OpenAI } from "openai";
import { Button, Form, InputGroup } from "react-bootstrap";

const styles = { width: "75%", margin: "auto", display: "block" };

export const ChatBot = () => {
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPEN_AI_API,
        dangerouslyAllowBrowser: true,
    });

    const [prompt, setPrompt] = useState<string>("");
    const [apiResponse, setApiResponse] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                model: 'gpt-3.5-turbo',
            });

            setApiResponse(chatCompletion.choices[0].message.content);
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
