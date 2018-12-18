import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ListView from './components/ListView';
import SidePanel from './components/SidePanel';

class MemberSelfAdminTab extends React.Component {
  state = { selectedRow: null};

  getSelectedRow = (selectedRowInListView) => {
    this.setState({ selectedRow: selectedRowInListView });
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
				  <div className="sixteen wide column">
            <SearchBar />
            <br />
          </div>
          <div className="six wide column">
            <ListView getSelectedRow={this.getSelectedRow} />
					  <br />
				  </div>
				
				  <div className="ten wide column">
            <SidePanel selectedRow={this.state.selectedRow} />
					  <br />
				  </div>
        </div>
		  </div>
    );
  }
}

ReactDOM.render(
    <MemberSelfAdminTab />,
    document.querySelector('#memberSelfAdminTab')
);
