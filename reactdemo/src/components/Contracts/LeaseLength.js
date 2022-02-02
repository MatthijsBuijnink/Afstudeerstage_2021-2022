import React from 'react';
import styles from '../../style/LeaseLength.module.css';

class LeaseLengthRadios extends React.Component{
    render() {
        if(this.props.leaseLengths !== null) {
            return (
                <ul>
                    {this.props.leaseLengths.map(value => (
                        <li>
                            <input
                                id = {value.id}
                                value={value.months}
                                type="radio"
                                name="leaseLength"
                                onClick={() => {
                                    this.props.updateSidebar(value)
                                }}
                            />
                            <label htmlFor = {value.id}>
                                {value.months} Maanden
                            </label>
                        </li>
                    ))}
                </ul>
            )}else{
            return(<div>Laden...</div>)
        }
    }
}

class LeaseLength extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            leaseLengths : null
        };
    }

    componentDidMount() {
        this.callLeaseLenghtsAPI();
    }

    callLeaseLenghtsAPI(){
        fetch('https://plm.dtcmedia.dev/api/trims/2/lease-lengths')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ leaseLengths : responseJson })
            })
    }

    render() {
        return (
            <div className={styles.leaseLengthWrapper}>
                <strong>Kies je looptijd</strong>
                <LeaseLengthRadios leaseLengths = {this.state.leaseLengths}  updateSidebar={this.props.updateSidebar} />
            </div>
        );
    }
}

export {LeaseLength}
