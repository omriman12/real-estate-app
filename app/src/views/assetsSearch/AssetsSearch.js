import React, { Component } from 'react';

//components
import AppContentLayout from '../../Layouts/AppContentLayout';
import AppTitleLayout from '../../Layouts/AppTitleLayout';

class AssetsSearch extends Component {
    render() {
        return (
            <React.Fragment>
                <AppTitleLayout>
                    חיפוש נכסים
                </AppTitleLayout>
                <AppContentLayout>
                    תוכן
s                </AppContentLayout>
            </React.Fragment>
        );
    }
}

export default AssetsSearch;