import { Link } from 'react-router-dom';
import { Image, Col } from 'react-bootstrap';

import Adam from '../../assets/TopLevelInfoStaticAssets/Adam.jpeg';
import LinkedIn from '../../assets/TopLevelInfoStaticAssets/LinkedIn.png';
import Github from '../../assets/TopLevelInfoStaticAssets/Github.png';

import "../../App.scss";

export const getProfilePhoto = (isThumbnailPhoto: boolean): JSX.Element => {
    const photoClassName = isThumbnailPhoto ? 'thumbnail-photo' : 'profile-photo';

    return (
        <>
            <Image className={photoClassName} src={Adam} roundedCircle />
        </>
    )
}

export const getContactInfo = (): JSX.Element => {
    return (
        <>
            <h1>Adam Dreier</h1>
            <h3>Lead Full Stack Software Engineer</h3>
            <a className='links base-text-color' href='mailto:adamdreier1@gmail.com'>adamdreier1@gmail.com </a>
            <br />
            <a className='links base-text-color' href='tel:6317037453'>631-703-7453</a>
        </>
    )
}

export const getIcons = (): JSX.Element => {
    return (
        <>
            <Link to='https://www.linkedin.com/in/adam-dreier/'>
                <Image className='icons' src={LinkedIn} />
            </Link>
            <br />
            <Link to='https://github.com/Dreier14'>
                <Image className='icons' src={Github} />
            </Link>
        </>
    )
}

export const renderTopLevelInfo = (): JSX.Element => {
    return (
        <>
            <Col xs={3} md={4}>
                {getProfilePhoto(false)}
            </Col>
            <Col xs={6} md={4} style={{ marginTop: '0px' }}>
                {getContactInfo()}
            </Col>
            <Col xs={3} md={4}>
                {getIcons()}
            </Col>
        </>
    )
}