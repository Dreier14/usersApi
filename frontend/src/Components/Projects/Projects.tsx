import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { IDataStoreInfo } from '../../Interfaces';
import { renderComponentStates } from '../../RenderComponentStates/RenderComponentStates';
import { ProjectCards } from './ProjectCards';

export const Projects: React.FC<IDataStoreInfo> = observer(({ store }): JSX.Element => {

    const compInfoString = 'Project Info';
    // We want to cache this because the props dont change as it is static, this will help load performance.
    useMemo(() => {
        store.getAllProjects();
    }, []);

    return (
        <>
            {renderComponentStates(store.isLoading, store.hasError, <ProjectCards {...store.projects} />, compInfoString)}
        </>
    );
});