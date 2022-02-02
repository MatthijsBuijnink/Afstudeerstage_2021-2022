import React from 'react';
import styles from '../style/Step.module.css';
import {Contract} from "./Steps/Contract";

class Step extends React.Component{
     render() {
        return (
           <div className={styles.wrapper}>
               <Contract  updateSidebar={this.props.updateSidebar} />
           </div>
        );
    }
}

export {Step}
