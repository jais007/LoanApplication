
import React, { Component } from 'react';
import ApplicationService from '../services/ApplicationService';

class ViewApplicationComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            application: {}
        }
    }
    componentDidMount() {
        ApplicationService.getApplicationById(this.state.id).then(res => {
            this.setState({ application: res.data });
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-7 offset-md-3">
                    <h3 className="text-center"> View Applications Details</h3>
                    <div className="card-body">
                    <table>
                        <tr>
                            <td>Application ID </td>
                            <td>{this.state.application.id}</td>
                        </tr>
                         <tr>
                           <td>  First Name </td>
                           <td> {this.state.application.firstName}</td>
                        </tr>
                        {this.state.application.middleName !=="" ?
                        <tr>
                            <td>  Middle Name </td>
                            <td> {this.state.application.middleName}</td>
                        </tr> :<tr></tr> }
                        <tr>
                            <td>  Last Name </td>
                            <td> {this.state.application.lastName}</td>
                        </tr>
                        <tr>
                            <td>  Date of Birth</td>
                            <td>{this.state.application.dob}</td>
                        </tr>
                        <tr>
                            <td>  Marital Status</td>
                            <td> {this.state.application.maritalStatus}</td>
                        </tr>
                        <tr>
                            <td>  SSN </td>
                            <td> {this.state.application.ssn}</td>
                        </tr>
                         <tr>
                            <td> Address Line 1 </td>
                            <td> {this.state.application.address1}</td>
                        </tr>
                        {this.state.application.address2  !=="" ?
                        <tr>
                            <td>  Address Line 2 </td>
                            <td> {this.state.application.address2}</td>
                        </tr> :<tr></tr> }
                        <tr>
                            <td>  City </td>
                            <td> {this.state.application.city}</td>
                        </tr>
                        <tr>
                            <td>  State </td>
                            <td> {this.state.application.state}</td>
                        </tr>
                        <tr>
                            <td>  Zip Code </td>
                            <td> {this.state.application.postalCode}</td>
                        </tr>
                        <tr>
                            <td>  Email ID </td>
                            <td> {this.state.application.email}</td>
                        </tr>
                        {this.state.application.homePhone  !== 0?
                        <tr>
                            <td>  Home Phone </td>
                           <td> {this.state.application.homePhone}</td>
                        </tr> : <tr></tr>}
                        {this.state.application.officePhone  !== 0 ?
                        <tr>
                            <td>  Office Phone</td>
                           <td> {this.state.application.officePhone}</td>
                        </tr> :<tr></tr>}
                        <tr>
                            <td>  Mobile Number</td>
                            <td>{this.state.application.mobileNo}</td>
                        </tr>
                        <tr>
                            <td>  Loan Purpose </td>
                           <td> {this.state.application.loanPurpose}</td>
                        </tr>
                        <tr>
                            <td>  Loan Amount </td>
                            <td>{this.state.application.loanAmount}</td>
                        </tr>
                        <tr>
                            <td>  Loan Duration</td>
                            <td>{this.state.application.loanDuration}</td>
                        </tr>
                        <tr>
                            <td>  Work Experience </td>
                           <td> {this.state.application.workExpYear} {this.state.application.workExpMonth}</td>
                        </tr>
                        <tr>
                            <td> Employer Name </td>
                            <td> {this.state.application.employerName}</td>
                        </tr>
                        <tr>
                            <td>  Annual Salary </td>
                            <td> {this.state.application.annualSalary}</td>
                        </tr>
                        <tr>
                            <td>  Designation </td>
                            <td> {this.state.application.designation}</td>
                        </tr>
                        <tr>
                            <td>  Employer Address Line 1 </td>
                            <td>{this.state.application.employer_addr_1}</td>
                        </tr>
                        {this.state.application.employer_addr_2 !=="" ?
                        <tr>
                            <td>   Employer Address Line 2</td>
                            <td>{this.state.application.employer_addr_2}</td>
                        </tr> :<tr></tr>}
                        <tr>
                            <td>  Employer City</td>
                             <td> {this.state.application.employerCity}</td>
                        </tr>
                        <tr>
                            <td>  Employer State </td>
                            <td>{this.state.application.employerState}</td>
                        </tr>
                        <tr>
                            <td>  Employer PostalCode </td>
                            <td> {this.state.application.employerPostalCode}</td>
                        </tr>
                        <tr>
                            <td> Application Date</td>
                            <td> {this.state.application.applicationDate}</td>
                        </tr>
                        <tr>
                            <td> ApplicationStatus </td>
                            <td>{this.state.application.applicationStatus}</td>
                        </tr>
                        {this.state.application.rejectedReason !=="NA" ?
                        <tr>
                            <td> Reject Reason</td>
                            <td> {this.state.application.rejectedReason}</td>
                        </tr>:<tr></tr>}
                        </table>
                    </div>

                </div>
                <div>
                    <h1>
                        H
                    </h1>
                </div>
            </div>
        )
    }
}

export default ViewApplicationComponent;