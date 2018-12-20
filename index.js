import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ListView from './components/ListView';
import SidePanel from './components/SidePanel';

class MemberSelfAdminTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySearchBar: true,
            displayListView: true,
            displaySidePanel: true,
            searchResults: null,
            selectedRowIndex: null
        };    
    }

    getSearchResults = (results) => {
        this.setState({ searchResults: results });
    }

    getSelectedRowIndex = (selectedRowIndexInListView) => {
        this.setState({ selectedRowIndex: selectedRowIndexInListView });
    }

    render() {  
        return (
            <div className="ui container">
                <div className="ui grid">
                    { this.state.displaySearchBar &&
				    <div className="sixteen wide column">
                        <SearchBar getSearchResults={ this.getSearchResults } />
                        <br />
                    </div> }
                    { this.state.displayListView &&
                    <div className="six wide column">
                        <ListView searchResults={ this.state.searchResults }
                            getSelectedRowIndex={ this.getSelectedRowIndex } />
				        <br />
                    </div> }
                    { this.state.displaySidePanel &&
				    <div className="ten wide column">
                        <SidePanel searchResults={ this.state.searchResults } 
                            selectedRowIndex={ this.state.selectedRowIndex } />
					    <br />
                    </div> }
                </div>
		    </div>
        );
    }
}

ReactDOM.render(
    <MemberSelfAdminTab />,
    document.querySelector('#memberSelfAdminTab')
);