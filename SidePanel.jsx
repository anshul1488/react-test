import React from 'react';
import 'jquery-ui/ui/widgets/accordion';
import Frame from './Frame';

class SidePanel extends React.Component {

    render(props) {
        var gridDetailsForPerson = {
            frameHeader: 'Person Details',
            colNum: 'three',
            rows: [
                [
                    { columnHeader: 'Member ID', columnValue: '4321', columnWidth: 'three' },
                    { columnHeader: 'First Name', columnValue: 'John', columnWidth: 'three' },
                    { columnHeader: 'Last Name', columnValue: 'Doe', columnWidth: 'three' }
                    
                ],
                [
                    { columnHeader: 'Date of Birth', columnValue: '01/03/1987', columnWidth: 'three' },
                    { columnHeader: 'Marital Status', columnValue: 'Single', columnWidth: 'three' },
                    { columnHeader: 'Gender', columnValue: 'Male', columnWidth: 'three' }
                ]
            ]
        };
        var gridDetailsForCoverage = {
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
        };
        return (
        <div className="ui segment"> 
            <Frame gridDetails={gridDetailsForPerson} />
            <Frame gridDetails={gridDetailsForCoverage} />
        </div>
        );
    }
}

export default SidePanel;
