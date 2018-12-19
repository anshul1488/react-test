import React from 'react';
import 'jquery-ui/ui/widgets/button';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {

    handleReset = () => {
      ReactDOM.findDOMNode(this.refs.firstNameRef).value = "";
      ReactDOM.findDOMNode(this.refs.lastNameRef).value = "";
      ReactDOM.findDOMNode(this.refs.membderIDRef).value = "";
      this.props.getSearchResults(null);
    }

    handleSearch = () => {
        this.props.getSearchResults(this.makeData());
    }

    makeData = () => {
        const members = [
            {
                "MembersForMasterPlanResponseRoot":{
                   "Members":{
                      "Member":[
                         {
                            "ID": 1, 
                            "MasterPlanID":"12",
                            "MemberID":"3214",
                            "CustomerNo":"15",
                            "FirstName":"John",
                            "LastName":"Doe",
                            "BirthDate":"1995-10-26"
                         },
                         {
                            "ID": 2, 
                            "MasterPlanID":"12",
                            "MemberID":"4325",
                            "CustomerNo":"13",
                            "FirstName":"Jone",
                            "LastName":"Collin",
                            "BirthDate":"2001-11-30"
                         },
                         {
                            "ID": 3, 
                            "MasterPlanID":"12",
                            "MemberID":"5938",
                            "CustomerNo":"90",
                            "FirstName":"Martin",
                            "LastName":"Fleming",
                            "BirthDate":"1988-01-16"
                         },
                         {
                            "ID": 4, 
                            "MasterPlanID":"12",
                            "MemberID":"8429",
                            "CustomerNo":"39",
                            "FirstName":"Guy",
                            "LastName":"Richards",
                            "BirthDate":"1982-11-09"
                         }
                      ],
                   }
                }
            }
        ];
        return members;
    }

    render(props) {
        return (
            <div className="ui segment">
                <div className="ui form">
                    <div className="two fields">
                        <div className="field">
                            <label>First name</label>
                            <input type="text" name="firstName" placeholder="Enter First Name" ref="firstNameRef" onChange={this.handleChange}/>
                        </div>
                        <div className="field">
                            <label>Last name</label>
                            <input type="text" name="lastName" placeholder="Enter Last Name" ref="lastNameRef" onChange={this.handleChange}/>
                        </div>
                        <div className="field">
                            <label>Member ID</label>
                            <input type="text" name="memberId" placeholder="Enter Member ID" ref="membderIDRef" onChange={this.handleChange}/>
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