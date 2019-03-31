import React, { Component } from 'react';
import styles  from "./css/home.module.css";

class Home extends Component {
    render() {
        return (
            <div >
                ראשי

                <div className={styles.className1}>
                    css test
                </div>
            </div>
        );
    }
}

export default Home;