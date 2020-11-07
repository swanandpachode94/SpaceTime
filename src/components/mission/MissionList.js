import React from 'react';
import MissionInfo from './MissionInfo';
import Spinner from "../layout/Spinner";


const MissionList = ({ missions, index, loading }) => {
    if (loading) {
        return (<Spinner />)
    }
    else {
        return (
            <div className="missionlist">
                {missions.map((mission, index) => (
                    <MissionInfo key={index} mission={mission} />
                )
                )}
            </div>
        )
    }
}



export default MissionList
