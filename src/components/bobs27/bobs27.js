import '../../style/bobs27.css'

import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Bobs27 extends Component {
    render() {
        return (
            <div>
                <h1 className='bobs'>Bobs27</h1>
            </div>
        )
    }
}

export default connect()(Bobs27);
