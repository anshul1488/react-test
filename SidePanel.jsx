import React from 'react';
import 'jquery-ui/ui/widgets/accordion';
import Frame from './Frame';

class SidePanel extends React.Component {
    state = {
        gridDetailsForPerson : {
            frameHeader: 'Person Details',
            colNum: 'three',
            rows: [
                [
                    { columnHeader: 'Member ID', columnValue: '-', columnWidth: 'three' },
                    { columnHeader: 'First Name', columnValue: '-', columnWidth: 'three' },
                    { columnHeader: 'Last Name', columnValue: '-', columnWidth: 'three' }
                    
                ],
                [
                    { columnHeader: 'Date of Birth', columnValue: '-', columnWidth: 'three' }
                ]
            ]
        },
        gridDetailsForCoverage : {
            frameHeader: 'Coverage Details',
            colNum: 'three',
            rows: [
                [
                    { columnHeader: 'Benefit ID', columnValue: 'B123', columnWidth: 'three' },
                    { columnHeader: 'Product Type', columnValue: 'Short Term Disability', columnWidth: 'three' },
                    { columnHeader: 'Policy Number', columnValue: 'PL-4354', columnWidth: 'three' }
                ],
                [
                    { columnHeader: 'Coverage ID ', columnValue: 'C123', columnWidth: 'three' },
                    { columnHeader: 'Coverage Start Date', columnValue: '01/02/2000', columnWidth: 'three' },
                    { columnHeader: 'Coverage End Date', columnValue: '01/02/2030', columnWidth: 'three' }
                ],
                [
                    { columnHeader: 'Benefit Amount', columnValue: '$110.00', columnWidth: 'three' },
                    { columnHeader: 'Total Premium Amount', columnValue: '$2200.00', columnWidth: 'three' }
                ]
            ]
        }
    };


    componentWillReceiveProps = (props) => {
        if(props.searchResults != null && props.selectedRowIndex != null) {
            let memberNode = props.searchResults[0].MembersForMasterPlanResponseRoot.Members.Member[props.selectedRowIndex];
            let gridDetailsForPersonNew = {
                frameHeader: 'Person Details',
                colNum: 'three',
                rows: [
                    [
                        { columnHeader: 'Member ID', columnValue: memberNode.MemberID, columnWidth: 'three' },
                        { columnHeader: 'First Name', columnValue: memberNode.FirstName, columnWidth: 'three' },
                        { columnHeader: 'Last Name', columnValue: memberNode.LastName, columnWidth: 'three' }
                        
                    ],
                    [
                        { columnHeader: 'Date of Birth', columnValue: memberNode.BirthDate, columnWidth: 'three' }
                    ]
                ]
            };
            this.setState({ gridDetailsForPerson: gridDetailsForPersonNew});
        }
        
    }

    render() {
        
        return (
        <div className="ui segment"> 
            <Frame gridDetails={this.state.gridDetailsForPerson} />
            <Frame gridDetails={this.state.gridDetailsForCoverage} />
        </div>
        );
    }
}

export default SidePanel;