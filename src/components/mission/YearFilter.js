import React, { Component } from 'react';

class YearFilter extends Component {

    render() {
        return (
            <button className="btn btn-primary" onClick={this.props.getYearFilter}>{this.props.value} </button>
        )
    }
}


export default YearFilter
