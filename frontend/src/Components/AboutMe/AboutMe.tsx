import { Container } from "react-bootstrap"

export const AboutMe = (): JSX.Element => {
    return (
        <>
            <Container style={{ textAlign: "center", marginTop: "10px" }}>
                <p style={{ width: "75%", margin: "auto", fontSize: "22px" }}>
                    Data driven, continously learning and expanding new technologies in the fields of Software Engineering,
                    Data Structures and Algorithms, Web3/Blockchain, AI and Cybersecurity. I am passionate about writing great scalable code and
                    collaboratively working with engineers who share the same passion for Software. Keeping code, DRY, SOLID, Scalable and readable
                    is one of main focuses as well as implementing new and creative solutions effectively and efficiently. I play the drums and study
                    new trends in my free time which helps me ascertain patterns very quickly.
                </p>
            </Container>
        </>
    );
}