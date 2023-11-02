import { useLocation } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";

import { renderProjectCards, renderDetailedProjectCards } from "./ProjectHelpers";
import { IProjectsDictionary } from "../../Interfaces";

import "./Projects.scss";

export const ProjectCards: React.FC = (projects: IProjectsDictionary): JSX.Element => {
    const location = useLocation();
    let renderViewType;
    let renderClassName;

    if (location.pathname === '/') {
        renderClassName = "project card-header";
        renderViewType = <Row className="project-card">{renderProjectCards(projects)}</Row>;
    } else {
        renderClassName = "project detailed-view";
        renderViewType = renderDetailedProjectCards(projects);
    }

    return (
        <>
            <Container>
                <br />
                <Row>
                    <div className={renderClassName}>
                        Projects
                    </div>
                </Row>
                <br />
                {renderViewType}
            </Container>
        </>
    );
};


