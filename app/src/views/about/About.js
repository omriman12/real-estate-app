import React, { Component } from 'react';

//components
import AppContentLayout from '../../Layouts/AppContentLayout';
import AppTitleLayout from '../../Layouts/AppTitleLayout';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <AppTitleLayout>
                    אודות
                </AppTitleLayout>
                 <AppContentLayout>
                    <p>
                        אנו חברה המתמחת המכירת נכסי נדל"ן מאז שנת 2010
                    </p>
                 </AppContentLayout>
            </React.Fragment>
        );
    }
}

export default About;