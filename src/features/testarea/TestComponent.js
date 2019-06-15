import React, { Component } from 'react';
import {connect} from 'react-redux';

class TestComponent extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <h3>{this.props.data}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.data,

    }
}


export default connect(mapStateToProps)(TestComponent);
