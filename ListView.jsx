import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class ListView extends React.Component {
    state = {
        data : [],
        columns : [
            { Header: 'First Name', accessor: 'FirstName' },
            { Header: 'Last Name', accessor: 'LastName' },
            { Header: 'Member ID', accessor: 'MemberID' },
        ]
    };
    
    componentWillReceiveProps = (props) => {
        this.setState({ data: this.createDataForListView(props)});
    }
    
    createDataForListView = (props) => {
        const dataInput = [];
        if(props.searchResults != null) {
            props.searchResults.map(m => {
                let memberNode = m.MembersForMasterPlanResponseRoot.Members.Member;
                for(var index = 0; index < memberNode.length; index++) {
                    Object.entries(memberNode[index]).forEach(([key, value]) => {
                        dataInput[index] = memberNode[index];
                    });
                }
                return dataInput;
            });
        }
        return dataInput;
    }

    handleRowSelection = (props, rowInfo, instance) => {
        if (rowInfo) {
            return {
                onClick: (e) => {
                    this.props.getSelectedRowIndex(
                        this.props.searchResults.map(m => {
                            return rowInfo.index;
                        })
                    );
                }
            }
        } else {
            return {};
        }
    }

    render() {
        return (
            <div className="ui segment">
                <ReactTable data={ this.state.data } columns={ this.state.columns } defaultPageSize={ 10 } noDataText='' 
                    getTrProps={ this.handleRowSelection } />
            </div>
        );
    }
}

export default ListView;