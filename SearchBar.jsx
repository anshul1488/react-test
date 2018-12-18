import React from 'react';
import 'jquery-ui/ui/widgets/button';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    handleChange = (e) => {
  
    }
    handleClick = () => {
      ReactDOM.findDOMNode(this.refs.firstNameRef).value = "";
      ReactDOM.findDOMNode(this.refs.lastNameRef).value = "";
      ReactDOM.findDOMNode(this.refs.membderIDRef).value = "";
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
                            title="Search for member records" ref="someName"> 
                        Search
                    </button>
                    <button className="ui primary button" data-toggle="tooltip" data-placement="bottom" title="Clear all search criteria" onClick={this.handleClick} >
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
