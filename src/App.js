import React, { Component } from 'react'
import Mission from './components/mission/Missions';
import MissionSuccess from './components/mission/MissionSuccess';
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import MissionList from './components/mission/MissionList';


class App extends Component {
  state = {
    missions: [],
    years: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    success: ["True", "False"],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await Axios.get('https://api.spacexdata.com/v3/launches?limit=100');
    this.setState({ missions: res.data, loading: false });
  }

  getYearFilter = async missionyear => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${missionyear.nativeEvent.toElement.innerText}`); // finally done using debugging and finding events
    this.setState({ missions: res.data, loading: false });
  }

  getMissionSuccessFilter = async launchsuccess => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchsuccess.nativeEvent.toElement.innerText.toLowerCase()}`); // finally done using debugging and finding events
    this.setState({ missions: res.data, loading: false });
  }

  getLandSuccessFilter = async landsuccess => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${landsuccess.nativeEvent.toElement.innerText.toLowerCase()}`); // finally done using debugging and finding events
    this.setState({ missions: res.data, loading: false });
  }

  render() {

    const { missions, years, success, loading } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-2 filter">
              <h2>Filters</h2>
              <p>Launch Years</p>
              <Mission years={years} getYearFilter={this.getYearFilter} />
              <p>Successful Launch</p>
              <MissionSuccess success={success} getMissionSuccessFilter={this.getMissionSuccessFilter} />
              <p>Successful Landing</p>
              <MissionSuccess success={success} getMissionSuccessFilter={this.getLandSuccessFilter} />
            </div>
            <div className="col-10">
              <MissionList missions={missions} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
