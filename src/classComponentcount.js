import React from "react";
class Count extends React.Component {
    name = "ReactJS"
    count = 0;
    constructor() {
        super();
        this.state = {
            number: 1
        }
    }
     componentDidMount() {
         console.log("Mounted");
         this.count += 1;
         console.log(this.count);
          console.log(this.count+1);
     }
     componentWillUnmount() {
         console.log("will be unMounted");
     }
    funcEightBtnClick = () => {
        this.setState({ number: this.state.number + 1 })
        console.log(this.count);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col -md-4">
                        <div className="card">
                            <div className="card-title">This is Class Component {this.name}</div>
                            <div className="card-body"> {this.state.number}</div>
                            <button
                                type="button" className="btn btn-success" onClick={this.funcEightBtnClick}>Click Me</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Count;