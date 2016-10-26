import React, { Component } from 'react';
import WorkList from './components/WorkList';
import load from './utils/load';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      active: 0,
      term: ''
    };

    this.loadData();
  }

  showId () {
        alert (this.state.data[document.getElementById('WorkList').value - 1].name);
  }

  loadData() {
    load(this.props.data).then(users => {
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-sm-8 col-md-9 col-lg-10">
            <WorkList data={this.state.data} update={this.updateData.bind(this)} parent={this} />
          </div>
        </div>
      </div>
    );
  }
}
