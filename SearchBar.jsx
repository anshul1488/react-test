import React from 'react';
import 'jquery-ui/ui/widgets/button';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    state = {
        members: []
    }
    handleReset = () => {
      ReactDOM.findDOMNode(this.refs.firstNameRef).value = "";
      ReactDOM.findDOMNode(this.refs.surnameRef).value = "";
      ReactDOM.findDOMNode(this.refs.membderIDRef).value = "";
      this.props.getSearchResults(null);
    }

    handleSearch = async () => {
        const response = await fetch('http://localhost:8080/v1/MembersForMasterPlan', {
        	method: 'post',
            body:  JSON.stringify({
                "MembersForMasterPlanRequestRoot":{
                   "MasterPlanID":"12",
                   "MemberID":"",
                   "FirstName":"",      
                   "LastName":"",
                   "PageSize":"10",
                   "PageNumber":"0",
                   "SortBy":["FirstNames"]
                }
             }),
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
               'Content-Type': 'application/json'
            }
        });
        const membersDataFromApi = [];
        const jsonData = await response.json();
        membersDataFromApi.push(jsonData);
        console.log(membersDataFromApi);
        this.props.getSearchResults(membersDataFromApi);
    }

    render(props) {
        return (
            <div className="ui segment">
                <div className="ui form">
                    <div className="two fields">

                        <div className="field">
                            <label>Member ID</label>
                            <input type="text" name="memberId" placeholder="Enter Member ID" ref="membderIDRef" onChange={this.handleChange}/>
                        </div>
                        
                        <div className="field">
                            <label>First name</label>
                            <input type="text" name="firstName" placeholder="Enter First Name" ref="firstNameRef" onChange={this.handleChange}/>
                        </div>
                        
                        <div className="field">
                            <label>Surname</label>
                            <input type="text" name="surname" placeholder="Enter Surname" ref="surnameRef" onChange={this.handleChange}/>
                        </div>
                        
   

                    </div>
                    <button id="searchButton" className="ui primary button" 
                            type="submit" data-toggle="tooltip" data-placement="bottom"
                            title="Search for member records" ref="someName"
                            onClick={ this.handleSearch }> 
                        Search
                    </button>
                    <button id="resetButton" className="ui primary button" 
                            data-toggle="tooltip" data-placement="bottom" 
                            title="Clear all search criteria" onClick={this.handleReset} >
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;