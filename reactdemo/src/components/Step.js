import React from 'react';


class GetLeaseLengthRadios extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.leaseLengths)
        return (
            <form>
                {Object.keys(this.props.leaseLengths).map(key => (
                    <label>
                        <input
                            key = {key}
                            value={key}
                            type="radio"
                            name="leaseLength"
                            // onClick={value => {
                            //     this.setState({ value: value.target.defaultValue });
                            // }}
                        />
                        {key}
                    </label>
                ))}
            </form>
        )
    }
}

class Step extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            leaseLengths : null
        };
    }

    componentDidMount() {
        this.renderMyData();
    }

    renderMyData(){
        fetch('https://plm.dtcmedia.dev/api/trims/2/lease-lengths')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ leaseLengths : responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
           <div>
               <GetLeaseLengthRadios leaseLengths = {this.state.leaseLengths} />
           </div>
        );
    }
}

export {Step}
