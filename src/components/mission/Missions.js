import React from 'react';
import YearFilter from "./YearFilter";

const Missions = ({ years, index, getYearFilter }) => {

    return (
        <div className="years-filter">
            {years.map((year, index) => (
                <YearFilter className="btn btn-primary" getYearFilter={getYearFilter} key={index} value={year} />
            ))}
        </div>
    )
}


export default Missions
