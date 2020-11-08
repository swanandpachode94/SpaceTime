import React, { Component } from 'react'

const MissionLandSuccess = ({ landsuccess, index, getLandSuccessFilter }) => {
    return (
        <div className="success-filter">
            {success.map((lsuc, index) => (
                <FilterButton className="btn btn-primary" getLandSuccessFilter={getLandSuccessFilter} key={index} value={lsuc} />
            ))}
        </div>
    )
}

export default MissionLandSuccess
