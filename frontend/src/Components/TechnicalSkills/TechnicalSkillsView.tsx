import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { ITechnicalSkillsDictionary } from "../../Interfaces/ITechnicalSkills";
import { spaceWordsWithCapitalLetter } from "../../Helpers/StringHelpers";

import "../../App.scss";
import "./TechnicalSkillsView.scss";

export const TechnicalSkillsView: React.FC<ITechnicalSkillsDictionary> = (technicalSkillsData: ITechnicalSkillsDictionary): JSX.Element => {
    const renderTechnicalSkills = (technicalSkillsData: ITechnicalSkillsDictionary) => {
        return (
            Object.entries(technicalSkillsData)
                .map(([key, value]) =>
                    <>
                        <Col xs={6} md={6} lg={4}>
                            <h3 style={{ textDecoration: "underline" }}>{spaceWordsWithCapitalLetter(key)}</h3>
                            {
                                value.map((e, i) => {
                                    return (
                                        <ListGroup key={i} variant="flush" >
                                            <ListGroup.Item className="list-item-config" key={e} as="li">{e}</ListGroup.Item>
                                        </ListGroup>
                                    );
                                })
                            }
                            <br />
                        </Col>
                    </>
                ));
    };

    return (
        <>
            <Container>
                <Row xs={2} className="technical-skills">
                    {renderTechnicalSkills(technicalSkillsData)}
                </Row>
            </Container>
        </>
    );
}