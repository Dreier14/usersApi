import { Container, Row } from 'react-bootstrap';

import { renderTopLevelInfo } from './TopLevellInfoUtils';

import './TopLevelInfo.scss';

export const TopLevelInfo: React.FC = () => {
    return (
        <>
            <Container fluid='md' className='outer-container'>
                <Row>
                    {renderTopLevelInfo()}
                </Row>
            </Container>
        </>
    );
}