import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class ChoniotBazar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            MillatChock: {
                large: [
                    {
                        show: false,
                        index: 0
                    }, {
                        show: true,
                        index: 1
                    }, {
                        show: true,
                        index: 2
                    }, {
                        show: false,
                        index: 3
                    }, {
                        show: false,
                        index: 4
                    }, {
                        show: true,
                        index: 5
                    }
                ],
                mediom: [
                    {
                        show: false,
                        index: 0
                    }, {
                        show: true,
                        index: 1
                    }, {
                        show: true,
                        index: 2
                    }, {
                        show: false,
                        index: 3
                    }, {
                        show: false,
                        index: 4
                    }, {
                        show: true,
                        index: 5
                    }
                ],
                small: [
                    {
                        show: false,
                        index: 0
                    }, {
                        show: true,
                        index: 1
                    }, {
                        show: true,
                        index: 2
                    }, {
                        show: false,
                        index: 3
                    }, {
                        show: false,
                        index: 4
                    }, {
                        show: true,
                        index: 5
                    }
                ]
            },
            check: "",
            index: 0,
            

        }
        this.handleClose = this
            .handleClose
            .bind(this);
        this.cancelhandleClose = this
            .cancelhandleClose
            .bind(this);
    }

    handleClose() {
        console.log(this.state);
        this.setState({open: false});
        switch (this.state.check) {
            case "large":
                {
                    let Millat = this.state.MillatChock;
                    Millat.large[this.state.index].show = true;
                    this.setState({MillatChock: Millat})
                    
                    this.setState({
                        largedata: this
                            .state
                            .MillatChock
                            .large
                            .map((item) => {
                                console.log(item);
                                if (item.show) {
                                    return (
                                        <div>
                                            <div className="col s1"></div>
                                            <div className="col s1 parkingcol">
                                                <i class="material-icons">directions_bus</i>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <div className="col s1"></div>
                                            <div
                                                onClick={this
                                                .handleAddLarge
                                                .bind(this, item.index)}
                                                className="col s1 parkingcolgreen">
                                                <i class="material-icons">add</i>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                    });
                }
            case "mediom":
                {
                    let Millat = this.state.MillatChock;
                    Millat.mediom[this.state.index].show = true;
                    this.setState({MillatChock: Millat});
                   
                  
                    this.setState({
                        mediomdata: this
                            .state
                            .MillatChock
                            .mediom
                            .map((item) => {
                                if (item.show) {
                                    return (
                                        <div>
                                            <div className="col s1"></div>
                                            <div className="col s1 parkingcol">
                                                <i class="material-icons">directions_bus</i>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <div className="col s1"></div>
                                            <div
                                                onClick={this
                                                .handleAddMediom
                                                .bind(this, item.index)}
                                                className="col s1 parkingcolgreen">
                                                <i class="material-icons">add</i>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                    });
                }
            case "small":
                {
                    let Millat = this.state.MillatChock;
                    Millat.small[this.state.index].show = true;
                    this.setState({MillatChock: Millat});
                    this.setState({
                        smalldata: this
                            .state
                            .MillatChock
                            .small
                            .map((item) => {
                                if (item.show) {
                                    return (
                                        <div>
                                            <div className="col s1"></div>
                                            <div className="col s1 parkingcol">
                                                <i class="material-icons">directions_bus</i>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <div className="col s1"></div>
                                            <div
                                                onClick={this
                                                .handleAddSmall
                                                .bind(this, item.index)}
                                                className="col s1 parkingcolgreen">
                                                <i class="material-icons">add</i>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                    });
            
                }
        }
         
        
        

        

    };

    cancelhandleClose() {
        this.setState({open: false});
    }

    handleAddLarge(data) {
        this.setState({open: true, check: "large", index: data});
    }
    handleAddMediom(data) {
        this.setState({open: true, check: "mediom", index: data});
    }
    handleAddSmall(data) {
        this.setState({open: true, check: "small", index: data});
    }
    componentDidMount() {
        this.setState({
            largedata: this
                .state
                .MillatChock
                .large
                .map((item) => {
                    console.log(item);
                    if (item.show) {
                        return (
                            <div>
                                <div className="col s1"></div>
                                <div className="col s1 parkingcol">
                                    <i class="material-icons">directions_bus</i>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <div className="col s1"></div>
                                <div
                                    onClick={this
                                    .handleAddLarge
                                    .bind(this, item.index)}
                                    className="col s1 parkingcolgreen">
                                    <i class="material-icons">add</i>
                                </div>
                            </div>
                        )
                    }
                })
        });

        this.setState({
            mediomdata: this
                .state
                .MillatChock
                .mediom
                .map((item) => {
                    if (item.show) {
                        return (
                            <div>
                                <div className="col s1"></div>
                                <div className="col s1 parkingcol">
                                    <i class="material-icons">directions_bus</i>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <div className="col s1"></div>
                                <div
                                    onClick={this
                                    .handleAddMediom
                                    .bind(this, item.index)}
                                    className="col s1 parkingcolgreen">
                                    <i class="material-icons">add</i>
                                </div>
                            </div>
                        )
                    }
                })
        });

        this.setState({
            smalldata: this
                .state
                .MillatChock
                .small
                .map((item) => {
                    if (item.show) {
                        return (
                            <div>
                                <div className="col s1"></div>
                                <div className="col s1 parkingcol">
                                    <i class="material-icons">directions_bus</i>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <div className="col s1"></div>
                                <div
                                    onClick={this
                                    .handleAddSmall
                                    .bind(this, item.index)}
                                    className="col s1 parkingcolgreen">
                                    <i class="material-icons">add</i>
                                </div>
                            </div>
                        )
                    }
                })
        });

    }
    render() {

        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onClick = {
                this.cancelhandleClose
            } />, < FlatButton label = "Submit" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onClick = {
                this.handleClose
            } />
        ];

        return (
            <div>

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">directions_bus
                        </i>
                        <input
                            ref="car_no"
                            type="email"
                            id="autocomplete-input"
                            className="autocomplete"
                            required/>
                        <label htmlFor="autocomplete-input">Car Number</label>
                    </div>

                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle
                        </i>
                        <input
                            ref="user_name"
                            required
                            type="text"
                            id="autocomplete-input"
                            className="autocomplete"/>
                        <label htmlFor="autocomplete-input">User Name</label>
                    </div>

                    <div className="input-field col s12">
                        <i className="material-icons prefix">date_range

                        </i>

                        <input
                            ref="date"
                            required
                            type="date"
                            id="autocomplete-input"
                            className="autocomplete"/>
                        <label htmlFor="autocomplete-input">Date</label>
                    </div>

                    <div className="input-field col s12">
                        <i className="material-icons prefix">av_timer

                        </i>
                        <input
                            ref="time"
                            required
                            type="time"
                            id="autocomplete-input"
                            className="autocomplete"/>
                        <label htmlFor="autocomplete-input">Time</label>
                    </div>

                </Dialog>
                <div className="container parkingcontainer z-depth-3 center-align">
                    <h3>Choniot Bazar parking place:</h3>
                    <div className="row parkingrow">
                        <p>For Large Time Parking</p>
                        {this.state.largedata}

                    </div>
                    <div className="row parkingrow">
                        <p>For Mediom Time Parking</p>
                        {this.state.mediomdata}
                    </div>
                    <div className="row parkingrow">
                        <p>For Short Time Parking</p>
                        {this.state.smalldata}
                    </div>
                </div>
            </div>
        )
    }
}
