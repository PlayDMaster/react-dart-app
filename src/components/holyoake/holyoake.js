import '../../style/holyoake.css'

import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Holyoake extends Component {
    render() {
        return (
            <div>
                <h1 className='holy'>Holyoake</h1>
            </div>
        )
    }
}

export default connect()(Holyoake);
