import React from 'react';
import Preloader from "../components/common/preloader/Preloader";

export const withReactSuspense = (Component) => {
    const SuspenseComponent =  (props) => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
    return SuspenseComponent;
};