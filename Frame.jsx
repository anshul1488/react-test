import React from 'react';

class Frame extends React.Component {

    handleCollapsibleClick = (e) => {
        e.target.classList.toggle("active");
        var content = e.target.nextElementSibling;  
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
        this.setState({ state: this.state });
    }

    render(props) {
        const gridHTML=[];
        gridHTML.push(
            <div className="ui segment">
                <div className="collapsible" onClick={this.handleCollapsibleClick}>
                    {this.props.gridDetails.frameHeader}
                </div>
                <div className="content">
                    <br />
                    <div className={`ui ${this.props.gridDetails.colNum} column grid`}>
                    {
                        this.props.gridDetails.rows.map(function(row, index){
                            return (<div className="row" key={index}>
                            {
                                row.map(function(column, index) {
                                    return (<div className={`ui ${column.columnWidth} column`} key={index}>
                                        <div className="ui header">{column.columnHeader}</div>{column.columnValue}
                                    </div>);
                                })
                            }
                            </div>);
                        })
                    }
                    </div>
                    <br />
                </div>
            </div>)
        return (gridHTML);
    }
}

export default Frame;