import './App.css';
import React from 'react';
import {Sidebar} from "./components/Sidebar";
import {Step} from "./components/Step";
import styles from './style/App.module.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: "init"};
    }

    updateSidebar = (data) =>{
        this.setState({data: data});
    }

    render(){
        return (
            <div className={styles.plm}>
                <h1>Merk Model Private Lease</h1>
                <div className={styles.wrapper}>
                    <Step updateSidebar={this.updateSidebar} />
                    <Sidebar data={this.state.data}/>
                </div>
            </div>
      )
    }
}

export default App;
