import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class ListView extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            data : [],
            columns : [
                { Header: 'First Name', accessor: 'FirstName' },
                { Header: 'Last Name', accessor: 'LastName' },
                { Header: 'Member ID', accessor: 'MemberID' },
            ],
            members : [
                {
                    "MembersForMasterPlanResponseRoot":{
                       "Members":{
                          "Member":[
                             {
                                "MasterPlanID":"12",
                                "MemberID":"3214",
                                "CustomerNo":"15",
                                "FirstName":"John",
                                "LastName":"Doe",
                                "BirthDate":"1995-10-26"
                             },
                             {
                                "MasterPlanID":"12",
                                "MemberID":"4325",
                                "CustomerNo":"13",
                                "FirstName":"Jone",
                                "LastName":"Collin",
                                "BirthDate":"2001-11-30"
                             },
                             {
                                "MasterPlanID":"12",
                                "MemberID":"5938",
                                "CustomerNo":"90",
                                "FirstName":"Martin",
                                "LastName":"Fleming",
                                "BirthDate":"1988-01-16"
                             }
                          ],
                       }
                    }
                }
            ]
        };
        
    }

    componentDidMount = () => {
        this.setState({ data: this.createDataInputForListView() });
    }

    createDataInputForListView = () => {
        const dataInput = [];
        this.state.members.map(m => {
                let memberNode = m.MembersForMasterPlanResponseRoot.Members.Member;
                for(var index = 0; index < memberNode.length; index++) {
                    Object.entries(memberNode[index]).forEach(([key, value]) => {
                        dataInput[index] = memberNode[index];
                    });
                }
            });
        
        
        return dataInput;
    }

    getTrProps = (state, rowInfo, instance) => {
        if (rowInfo) {
          return {
            onClick: (e) => {
               this.props.getSelectedRow(
                this.state.members.map(m => {
                    let memberNode = m.MembersForMasterPlanResponseRoot.Members.Member;
                    return memberNode[rowInfo.index];
                })
                );
            }
          }
        }
        return {};
    }

    render() {
        return (
            <div className="ui segment">
                <ReactTable data={this.state.data} columns={this.state.columns} defaultPageSize={10} getTrProps={this.getTrProps} />
            </div>
        );
    }
}

export default ListView;
