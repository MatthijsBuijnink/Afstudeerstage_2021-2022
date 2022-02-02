import React from 'react';
import styles from '../../style/Contract.module.css';
import {LeaseLength} from "../Contracts/LeaseLength";

class Contract extends React.Component{

    render() {
        return (
            <section className={styles.wrapper}>
                <div>
                    <div>
                        <div>
                            <LeaseLength updateSidebar={this.props.updateSidebar} />
                        </div>
                   </div>
                </div>
            </section>
        );
    }
}

export {Contract}
