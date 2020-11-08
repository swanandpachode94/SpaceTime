import React from 'react'

const MissionLandSuccess = ({ success, landsuccess, index, getLandSuccessFilter }) => {
    return (
        <div className="success-filter">
            {success.map((lsuc, index) => (
                <button className="btn btn-primary" getLandSuccessFilter={getLandSuccessFilter} key={index} value={lsuc} >{lsuc}</button>
            ))}
        </div>
    )
}

export default MissionLandSuccess
