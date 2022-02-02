import React from 'react';
import car from '../assets/car.png';
import styles from '../style/Sidebar.module.css';

const LeaseLenghtMonths = (props) => {
    if(props.months){
        return(
            <div className={styles.section}>
                <strong>Contract</strong>
                <br/>
                Looptijd {props.months} maanden
            </div>
        )
    }else{
        return null;
    }
}

const Price = (props) =>{
    if(props.price_extra) {
        return (
            <div className={styles.section}>
                <strong>Maandbedrag</strong>
                <span>&euro; {parseInt(251) + parseInt(props.price_extra)}</span>
            </div>
        )
    }else{
        return null;
    }
}

class Sidebar extends React.Component{
    render() {
        return (
            <div className={styles.sidebar}>
                <div className={styles.modelContentSidebarWrapper}>
                    <strong>Overzicht</strong>
                   <div><img className={styles.modelCardImage} src={car} alt="car"/></div>

                    <div className={styles.section}>
                        <strong>Merk model</strong>
                        <br/>
                        <span><span>Uitvoering</span><span> &euro;229</span></span>
                    </div>

                    <LeaseLenghtMonths months={this.props.data.months} />

                    <Price price_extra={this.props.data.price_extra}/>
                </div>
            </div>
        )
    }
}
export {Sidebar}
