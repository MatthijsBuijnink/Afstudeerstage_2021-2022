import React from 'react';

class Sidebar extends React.Component{
    render() {
        return (
            <div className="sidebar">
                <strong>Overzicht</strong>
                <img src="" alt="car"/>

                <div>
                    <strong>Merk model</strong>
                    <span>Uitvoering</span><span> &euro;229</span>
                </div>

                <div>
                    <strong>Contract</strong>
                    looptijd 24 maanden
                </div>

                <div>
                    <strong>Maandbedrag</strong>
                    <span>&euro;251</span>
                </div>
            </div>
        )
    }
}

export {Sidebar}
