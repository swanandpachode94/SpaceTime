import React from 'react';
import FilterButton from './FilterButton';

const MissionSuccess = ({ missions, success, index, getMissionSuccessFilter }) => {
    return (
        <div className="success-filter">
            {success.map((suc, index) => (
                <FilterButton className="btn btn-primary" getMissionSuccessFilter={getMissionSuccessFilter} key={index} value={suc} />
            ))}
        </div>
    )
}

export default MissionSuccess
