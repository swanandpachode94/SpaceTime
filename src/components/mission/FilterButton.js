import React, { Component } from 'react'

class FilterButton extends Component {
    render() {
        return (
            <button className="btn btn-primary" onClick={this.props.getMissionSuccessFilter}>{this.props.value} </button>
        )
    }
}

export default FilterButton
