import { Spinner } from "react-bootstrap"
import './RenderComponentStates.scss';

export const renderComponentStates = (loading: boolean, error: boolean, component: JSX.Element, componentInfo: string): JSX.Element => {
    if (loading) {
        return (
            <div className="center">
                <Spinner />
                <>...Loading {componentInfo}</>
            </div>
        );
    }

    if (error) {
        return (
            <div className="center">
                There was a problem getting the data for {componentInfo}
            </div>
        );
    }

    if (!loading && !error) {
        return (
            component
        );
    } else {
        return (
            <div className="center">
                Unable to Load Application
            </div>
        );
    }
}