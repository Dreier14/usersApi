import { Link } from "react-router-dom";
import { Col, Card, Button, Image, Stack, ListGroup } from "react-bootstrap";

import { spaceWordsWithCapitalLetter } from "../../Helpers/StringHelpers";
import { IProjectsDictionary } from "../../Interfaces";

import "../../App.scss";
import "./Projects.scss";

export const renderProjectCards = (projectData: IProjectsDictionary): JSX.Element[] => {
    return (
        Object.entries(projectData)
            .map(([key, value]) =>
                <>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="custom-color-config base-text-color">
                            <Card.Img variant="top" src={value.Photo} />
                            <Card.Body>
                                <Card.Title className="project">{spaceWordsWithCapitalLetter(key)}</Card.Title>
                                <Card.Text>
                                    {value.Info}
                                    <br />
                                    <>*** {value.IsDeployed} ***</>
                                </Card.Text>
                                <Link to={value.Link}>
                                    <Button variant="secondary">Go to Site</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </>
            )
    );
};

export const renderDetailedProjectCards = (projectData: IProjectsDictionary): JSX.Element[] => {
    return (
        Object.entries(projectData)
            .map(([key, value]) =>
                <>
                    <Stack gap={3}>
                        <Image src={value.Photo} />
                        <div className="project detailed-view-info">{spaceWordsWithCapitalLetter(key)}</div>
                        {
                            value.Details.map((e, i) => {
                                return (
                                    <ListGroup key={i} variant="flush">
                                        <ListGroup.Item className="list-item-config" key={i} as="li">{i + 1}. {e}</ListGroup.Item>
                                    </ListGroup>
                                );
                            })
                        }
                    </Stack>
                    <br />
                </>
            )
    );
};


