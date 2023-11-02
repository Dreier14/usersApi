import { Navbar } from "react-bootstrap"

import { getNavLinks } from "../../Helpers/NavHelpers";

import "../../App.scss";

export const Footer = () => {
    return (
        <Navbar className="justify-content-center custom-color-config">
            {getNavLinks()}
        </Navbar>
    );
}