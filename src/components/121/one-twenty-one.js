import '../../style/one-twenty-one.css';

import React, { Component } from 'react'
import { connect } from 'react-redux';

export class OneTwentyOne extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>121!!!</h1>
            </div>
        )
    }
}

export default connect()(OneTwentyOne);
