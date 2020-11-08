import React from 'react';

const MissionInfo = ({ mission: { flight_number, mission_name, launch_success, launch_year, links: { mission_patch }, mission_id, rocket: { first_stage: { cores: { 0: { land_success } } } } } }) => {
    return (
        <div className="Flight_details">
            <div className="img-links">
                <img src={mission_patch} alt="" className="patchimg" />
            </div>
            <h4>{mission_name} #{flight_number}</h4>
            <ul>
                <li><strong>MissionId</strong> {mission_id}</li>
            </ul>
            <p><strong>Launch Year </strong>{launch_year}</p>
            <p><strong>Successful Launch </strong>{launch_success + ''}</p>
            <p><strong>Successful Land </strong>{land_success + ''}</p>
        </div>
    )
}

export default MissionInfo
