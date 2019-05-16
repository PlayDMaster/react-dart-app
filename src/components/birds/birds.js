import '../../style/birds.css';

import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Birds extends Component {
    render() {
        return (
            <div>
                <h1 className='birds'>Birds</h1>
            </div>
        )
    }
}

export default connect()(Birds);
