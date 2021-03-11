import React, { Component } from 'react';
import ApplicationService from '../services/ApplicationService';
import '../App.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

//options for marital status 
const maritalStatusOptions=[
    {value :'Single', label:'Single'},
    {value :'Married', label:'Married'},
    {value :'Separated', label:'Separated'},
    {value :'Divorced', label:'Divorced'},
    {value :'Widowed', label:'Widowed'}];

//options for loan purpose 
const loanPurposeOptions=[
    {value :'Home', label:'Home'},
    {value :'Personal', label:'Personal'},
    {value :'Car', label:'Car'},
    {value :'Education', label:'Education'}];


// const formValid = ({ formErrors, ...rest }) => {
//     let valid = true;
  
//     // validate form errors being empty
//     Object.values(formErrors).forEach(val => {
//       val.length > 0 && (valid = false);
//     });
  
//     // validate the form was filled out
//     Object.values(rest).forEach(val => {
//       val === null && (valid = false);
//     });
  
//     return valid;
//   };


// const onSubmitValidate = ({ formErrors, ...rest }) => {
//     let isError=false;
//     if(rest.firstName ===null || rest.firstName.length < 1){ isError=true; formErrors.firstName = 'required field'; }
//     if(rest.lastName ===null|| rest.lastName.length <  1){ isError=true; formErrors.lastName = 'required field'; }
//     if(rest.ssn ===null||rest.ssn.length.length < 1)  { isError=true; formErrors.ssn = 'required field'; }
//     if(rest.address1 ===null||rest.address1.length <  1){ isError=true; formErrors.address1 = 'required field'; }
//     if(rest.city ===null||rest.city.length <  1){ isError=true; formErrors.city = 'required field'; }
//     if(rest.state ===null|| rest.state.length <  1){ isError=true; formErrors.state = 'required field'; }
//     if(rest.postalCode ===null||rest.postalCode.length <  1){ isError=true; formErrors.postalCode = 'required field'; }
//     // if(this.state.email.length <  1){ isError=true; formErrors.email = 'required field'; }
//     // if(this.state.mobileNo.length <  1){ isError=true; formErrors.mobileNo = 'required field'; }
//     // if(this.state.loanAmount.length <  1){ isError=true; formErrors.loanAmount = 'required field'; }
//     // if(this.state.loanDuration.length <  1){ isError=true; formErrors.loanDuration = 'required field'; }
//     // if(this.state.employerName.length <  1){ isError=true; formErrors.employerName = 'required field'; }
//     // if(this.state.annualSalary.length <  1){ isError=true; formErrors.annualSalary = 'required field'; }
//     // if(this.state.designation.length <  1){ isError=true; formErrors.designation = 'required field'; }
//     // if(this.state.employer_addr_1.length <  1){ isError=true; formErrors.employer_addr_1 = 'required field'; }
//     // if(this.state.employerCity.length <  1){ isError=true; formErrors.employerCity = 'required field'; }
//     // if(this.state.employerState.length <  1){ isError=true; formErrors.employerState = 'required field'; }
//     // if(this.state.employerPostalCode.length <  1){ isError=true; formErrors.employerPostalCode = 'required field'; }
//     this.setState({formErrors})

//     // validate form errors being empty
//     // Object.values(formErrors).forEach(val => {
//     //   val.length > 0 && (valid = false);
//     // });
    
//     // validate the form was filled out
//     Object.values(rest).forEach(val => {
//       val === null && (isError = true);
//     });
//     return isError;
// };
class AddApplicationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: null,
            middleName: '',
            lastName: null,
            dob: new Date(),
            maritalStatus: '',
            ssn: null,
            address1: null,
            address2: '',
            city: null,
            state: null,
            postalCode: null,
            email: null,
            homePhone: '',
            officePhone: '',
            mobileNo: null,
            loanPurpose: '',
            loanAmount: null,
            loanDuration: null,
            workExpYear: 0,
            workExpMonth: 0,
            employerName: null,
            annualSalary: null,
            designation: null,
            employer_addr_1: null,
            employer_addr_2: '',
            employerCity: null,
            employerState: null,
            employerPostalCode: null,
            formErrors: {
                firstName: "",
                lastName: "",
                // dob: "",
                // maritalStatus: "",
                ssn: "",
                address1: "",
                // address2: "",
                city: "",
                state: "",
                postalCode: "",
                email:"",
                homePhone: "",
                officePhone: "",
                mobileNo: "",
                // loanPurpose: "",
                loanAmount: "",
                loanDuration: "",
                // workExpYear:"",
                // workExpMonth: "",
                employerName: "",
                annualSalary: "",
                designation: "",
                employer_addr_1: "",
                // employer_addr_2: "",
                employerCity: "",
                employerState: "",
                employerPostalCode: "",
            }
        }
        
    }

    handleDateChange=(date)=>{
        this.setState({
            dob:date
        })
        console.log("DOB",this.state.dob)
    }
    handleMaritalChange=(op)=>{
        this.setState({
            maritalStatus:op
        })
        console.log("maritalstatus",this.state.maritalStatus)
    }
    handleLoanPurposeChange=(op)=>{
        this.setState({
            loanPurpose:op
        })
        console.log("loanpurpose",this.state.loanPurpose)
    }
     onSubmitValidate = () => {
        const data=this.state;
        let isError=false;
        
        if(data.firstName === null || data.firstName.length < 1){ isError=true; data.formErrors.firstName = 'required field'; }
        if(data.lastName === null || data.lastName.length < 1){ isError=true; data.formErrors.lastName = 'required field'; }
        if(data.ssn === null || data.ssn.length < 1){ isError=true; data.formErrors.ssn = 'required field'; }
        if(data.address1 === null || data.address1.length < 1){ isError=true; data.formErrors.address1 = 'required field'; }
        if(data.city === null || data.city.length < 1){ isError=true; data.formErrors.city = 'required field'; }
        if(data.state === null || data.state.length < 1){ isError=true; data.formErrors.state = 'required field'; }
        if(data.postalCode === null || data.postalCode.length < 1){ isError=true; data.formErrors.postalCode = 'required field'; }
        if(data.email === null || data.email.length < 1){ isError=true; data.formErrors.email = 'required field'; }
        if(data.mobileNo === null || data.mobileNo.length < 1){ isError=true; data.formErrors.mobileNo = 'required field'; }
        if(data.loanAmount === null || data.loanAmount.length < 1){ isError=true; data.formErrors.loanAmount = 'required field'; }
        if(data.loanDuration === null || data.loanDuration.length < 1){ isError=true; data.formErrors.loanDuration = 'required field'; }
        if(data.employerName === null || data.employerName.length < 1){ isError=true; data.formErrors.employerName = 'required field'; }
        if(data.annualSalary === null || data.annualSalary.length < 1){ isError=true; data.formErrors.annualSalary = 'required field'; }
        if(data.designation === null || data.designation.length < 1){ isError=true; data.formErrors.designation = 'required field'; }
        if(data.employer_addr_1 === null || data.employer_addr_1.length < 1){ isError=true; data.formErrors.employer_addr_1 = 'required field'; }
        if(data.employerCity === null || data.employerCity.length < 1){ isError=true; data.formErrors.employerCity = 'required field'; }
        if(data.employerState === null || data.employerState.length < 1){ isError=true; data.formErrors.employerState = 'required field'; }
        if(data.employerPostalCode === null || data.employerPostalCode.length < 1){ isError=true; data.formErrors.employerPostalCode = 'required field'; }

        this.setState({
            ...this.state
        })
        return isError;
    };
    handleSubmit = (e) => {

        var workexp = parseInt(this.state.workExpMonth) + parseInt(this.state.workExpYear) * 12;
        var annualsal = this.state.annualSalary;
        var status, reason;
        var today = new Date();
        var date = today.getDate() + '-' + today.getMonth() + 1 + '-' + today.getFullYear();
        var birthDate = new Date(this.state.dob);
        var dobdate=this.state.dob.getDate() + '-' + this.state.dob.getMonth() + 1 + '-' + this.state.dob.getFullYear();
        var age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18 || age > 65) {
            if (age < 18) {
                reason = "Age is less than 18";
            } else {
                reason = "Age is greater than 65";
            }
            status = "Rejected";
        } else if (workexp < 6) {
            reason = "Work experience is less than 6 months";
            status = "Rejected";
        } else if (annualsal < 10000) {
            reason = "Annual Salary is less than $10000";
            status = "Rejected";
        } else if (age + parseInt(this.state.loanDuration) > 65) {
            reason = "Loan should be completed before age of 65";
            status = "Rejected";
        }
        else if ((annualsal / 4) < (this.state.loanAmount / this.state.loanDuration)) {
            reason = "Your EMI can not be more than 30% of Monthly Salary";
            status = "Rejected";
        } else {
            reason = "NA";
            status = "Approved";
        }
        console.log("Age",age);
        console.log("workexp",workexp);
        console.log("status",status);
        console.log("annualsal",annualsal);
        console.log("today",today);
        console.log("birthdaye",birthDate);
        e.preventDefault();
      
        let application = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            dob: dobdate,
            maritalStatus: this.state.maritalStatus.value,
            ssn: this.state.ssn,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            postalCode: this.state.postalCode,

            email: this.state.email,
            homePhone: this.state.homePhone,
            officePhone: this.state.officePhone,
            mobileNo: this.state.mobileNo,

            loanPurpose: this.state.loanPurpose.value,
            loanAmount: this.state.loanAmount,
            loanDuration: this.state.loanDuration,

            workExpYear: this.state.workExpYear,
            workExpMonth: this.state.workExpMonth,
            employerName: this.state.employerName,
            annualSalary: this.state.annualSalary,
            designation: this.state.designation,
            employer_addr_1: this.state.employer_addr_1,
            employer_addr_2: this.state.employer_addr_2,
            employerCity: this.state.employerCity,
            employerState: this.state.employerState,
            employerPostalCode: this.state.employerPostalCode,
            applicationDate: date,
            applicationStatus: status,
            rejectedReason: reason,
        };
        const err=this.onSubmitValidate();
        if (!err) {
            console.log('application => ' + JSON.stringify(application));
            ApplicationService.addApplication(application).then(res => {
                this.props.history.push('/applications');
            });
          } else {
            
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
            console.log('application => ' + JSON.stringify(application));
          }

    }
   handleChange = (e)=>{
       e.preventDefault();
       const {name,value}=e.target;
       let formErrors= this.state.formErrors;

       switch(name){
           case 'firstName': formErrors.firstName=value.length < 3 ? 'minimum 3 charecters required' : ""; break;
           case 'lastName': formErrors.lastName=value.length < 3 ? 'minimum 3 charecters required' : ""; break;
        // case 'dob': formErrors.dob=value.length !=10 ? 'Invalid date ' : "" ;break;
        // case 'maritalStatus': formErrors.maritalStatus=value.length < 1 ? 'required field' : "";break;
           case 'ssn': formErrors.ssn=value.length != 10 ? 'must be 10 digit ' : "";break;
           case 'address1': formErrors.address1=value.length < 3 ? 'minimum 3 charecters required' : "";break;
           case 'city': formErrors.city=value.length < 3 ? 'minimum 3 charecters required' : "";break;
           case 'state': formErrors.state=value.length < 1 ? "required field": "";break;
           case 'postalCode': formErrors.postalCode=value.length !== 6 ? 'must be 6 digit' : "";break;
           case 'email': formErrors.email=emailRegex.test(value) && value.length > 0 ? "" : "Invalid email address";break;
           case 'mobileNo': formErrors.mobileNo=value.length !== 10 ? 'must be 10 digit' : "";break;
        // case 'loanPurpose': formErrors.loanPurpose=value.length < 1 ? 'required field' : "";break;
           case 'loanAmount': formErrors.loanAmount=value < 100 ? 'must be greater than or equal to $100' : "";break;
           case 'loanDuration': formErrors.loanDuration=value < 1? 'should be greater than 0' : "";break;
        // case 'workExpYear': formErrors.firstName=value.length  ? 'minimum 3 charecters required' : "";break;
        // case 'workExpMonth': formErrors.workExpMonth=value.length < 3 ? 'minimum 3 charecters required' : "";break;
           case 'employerName': formErrors.employerName=value.length < 3 ? 'minimum 3 charecters required' : "";break;
           case 'annualSalary': formErrors.annualSalary=value < 1 ? 'should be greater than 0' : "";break;
           case 'designation': formErrors.designation=value.length < 1 ? ' required field' : "";break;
           case 'employer_addr_1': formErrors.employer_addr_1=value.length < 3 ? 'minimum 3 charecters required' : "";break;
           case 'employerCity': formErrors.employerCity=value.length < 3 ? 'minimum 3 charecters required' : "";break;
           case 'employerState': formErrors.employerState=value.length < 1 ? "required field" : "";break;
           case 'employerPostalCode': formErrors.employerPostalCode=value.length !=6  ? 'must be 6 digit ' : "";break;
           default:
                break;
       }
       this.setState({formErrors,[name]:value},()=> console.log(this.state))
   };
    
    cancel() {
        this.props.history.push('/');
    }

    render() {
        const {formErrors} =this.state;
        return (

            <div className="row">
                <div className="card col-md-6 offset-md-3 offcet-md-3">
                    <div className="card-body ">
                        <h3 className="text-center">New Application</h3>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName"
                                            className={formErrors.firstName.length > 0 ? "error" : "form-control"}
                                        value={this.state.firstName} onChange={this.handleChange} />
                                      {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)}
                                </div>

                                <div className="form-group col-md-4">
                                    <label> Middle Name: </label>
                                    <input placeholder="Middle Name " name="middleName" className="form-control"
                                        value={this.state.middleName} onChange={this.handleChange} />
                                 {/* {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>

                                <div className="form-group col-md-4">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName"  className={formErrors.lastName.length > 0 ? "error" : "form-control"}
                                        value={this.state.lastName} onChange={this.handleChange} />
                                 {formErrors.lastName.length > 0 && (<span className="errorMessage">{formErrors.lastName}</span>)}
                                 </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> DOB: </label>
                                    <DatePicker
                                        name="dob"
                                        selected={ this.state.dob}
                                        dateFormat='dd-MM-yyyy'
                                        maxDate={new Date()}
                                        showYearDropdown
                                        scrollableYearDropdown="true"
                                        onChange={this.handleDateChange} 
                                    />
                                    {/* <input type="date" name="dob" className="form-control"
                                        value={this.state.dob} onChange={this.handleChange} required/> */}
                                 {/* {formErrors.dob.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>
                                <div className="form-group col-md-4">
                                    <label> SSN: </label>
                                    <input  type="number" placeholder="SSN" name="ssn"   className={formErrors.ssn.length > 0 ? "error" : "form-control"}
                                        value={this.state.ssn} onChange={this.handleChange} />
                                 {formErrors.ssn.length > 0 && (<span className="errorMessage">{formErrors.ssn}</span>)}
                                 </div>
                                <div className="form-group col-md-4">
                                    <label> Marital Status: </label>
                                    <Select  name="maritalStatus"  
                                         value={this.state.maritalStatus}
                                         onChange={this.handleMaritalChange}
                                         options={maritalStatusOptions} 
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label> Address Line 1: </label>
                                    <input placeholder=" Address Line 1" name="address1"  className={formErrors.address1.length > 0 ? "error" : "form-control"}
                                        value={this.state.address1} onChange={this.handleChange}/>
                                 {formErrors.address1.length > 0 && (<span className="errorMessage">{formErrors.address1}</span>)}
                                 </div>
                                <div className="form-group col-md-6">
                                    <label>  Address Line 2: </label>
                                    <input placeholder=" Address Line 2" name="address2" className="form-control"
                                        value={this.state.address2} onChange={this.handleChange} />
                                 {/* {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> City: </label>
                                    <input placeholder="City" name="city"   className={formErrors.city.length > 0 ? "error" : "form-control"}
                                        value={this.state.city} onChange={this.handleChange}/>
                                 {formErrors.city.length > 0 && (<span className="errorMessage">{formErrors.city}</span>)}
                                 </div>

                                <div className="form-group col-md-4">
                                    <label> State: </label>
                                    <input placeholder="State" name="state"   className={formErrors.state.length > 0 ? "error" : "form-control"}
                                        value={this.state.state} onChange={this.handleChange} noValidate/>
                                 {formErrors.state.length > 0 && (<span className="errorMessage">{formErrors.state}</span>)}
                                 </div>

                                <div className="form-group col-md-4">
                                    <label> Postal Code: </label>
                                    <input type="number" placeholder="PostalCode" name="postalCode"   className={formErrors.postalCode.length > 0 ? "error" : "form-control"}
                                        value={this.state.postalCode} onChange={this.handleChange} noValidate/>
                                 {formErrors.postalCode.length > 0 && (<span className="errorMessage">{formErrors.postalCode}</span>)}
                                 </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label> Email: </label>
                                    <input placeholder="Email" type="email" name="email"   className={formErrors.email.length > 0 ? "error" : "form-control"}
                                        value={this.state.email} onChange={this.handleChange} noValidate/>
                                 {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
                                 </div>

                                <div className="form-group col-md-6">
                                    <label> Home Phone: </label>
                                    <input type="number" placeholder="Home Phone" name="homePhone" className="form-control"
                                        value={this.state.homePhone} onChange={this.handleChange} />
                                 {/* {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label> Office Phone: </label>
                                    <input type="number" placeholder="Office Phone" name="officePhone" className="form-control"
                                        value={this.state.officePhone} onChange={this.handleChange} />
                                 {/* {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>

                                <div className="form-group col-md-6">
                                    <label> Mobile: </label>
                                    <input type="number" placeholder="Mobile " name="mobileNo"   className={formErrors.mobileNo.length > 0 ? "error" : "form-control"}
                                        value={this.state.mobileNo} onChange={this.handleChange} />
                                 {formErrors.mobileNo.length > 0 && (<span className="errorMessage">{formErrors.mobileNo}</span>)}
                                 </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> Loan Purpose: </label>
                                    <Select  name="loanPurpose"  
                                        value={this.state.loanPurpose}
                                         onChange={this.handleLoanPurposeChange}
                                         options={loanPurposeOptions} 
                                    />
                                </div>


                                <div className="form-group col-md-4">
                                    <label> Loan Amount: </label>
                                    <input placeholder="Loan Amount" name="loanAmount" className={formErrors.loanAmount.length > 0 ? "error" : "form-control"}
                                        value={this.state.loanAmount} onChange={this.handleChange} />
                                 {formErrors.loanAmount.length > 0 && (<span className="errorMessage">{formErrors.loanAmount}</span>)}
                                 </div>

                                <div className="form-group col-md-4">
                                    <label> Duration(In years): </label>
                                    <input placeholder="Duration" name="loanDuration" className={formErrors.loanDuration.length > 0 ? "error" : "form-control"}
                                        value={this.state.loanDuration} onChange={this.handleChange} />
                                 {formErrors.loanDuration.length > 0 && (<span className="errorMessage">{formErrors.loanDuration}</span>)}
                                 </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label> Work Experince(years): </label>
                                    <input type="number" placeholder="Work Experince(years)" name="workExpYear" className="form-control"
                                     defaultValue="0"
                                        value={this.state.workExpYear} onChange={this.handleChange} />
                                 {/* {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>
                                <div className="form-group col-md-6">
                                    <label>  Work Experince(months): </label>
                                    <input type="number" placeholder="Work Experince(months)" name="workExpMonth" className="form-control" defaultValue="0"
                                        value={this.state.workExpMonth} onChange={this.handleChange} />
                                 {/* {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> Employer Name: </label>
                                    <input placeholder="Employer Name" name="employerName" className={formErrors.employerName.length > 0 ? "error" : "form-control"}
                                        value={this.state.employerName} onChange={this.handleChange} />
                                 {formErrors.employerName.length > 0 && (<span className="errorMessage">{formErrors.employerName}</span>)}
                                 </div>
                                <div className="form-group col-md-4">
                                    <label> Annual Salary: </label>
                                    <input type="number" placeholder="Annual Salary" name="annualSalary" className={formErrors.annualSalary.length > 0 ? "error" : "form-control"}
                                        value={this.state.annualSalary} onChange={this.handleChange} />
                                 {formErrors.annualSalary.length > 0 && (<span className="errorMessage">{formErrors.annualSalary}</span>)}
                                 </div>
                                <div className="form-group col-md-4">
                                    <label> Designation: </label>
                                    <input placeholder="Designation" name="designation" className={formErrors.designation.length > 0 ? "error" : "form-control"}
                                        value={this.state.designation} onChange={this.handleChange} />
                                 {formErrors.designation.length > 0 && (<span className="errorMessage">{formErrors.designation}</span>)}
                                 </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label> Employer Address Line 1: </label>
                                    <input placeholder="Employer Address Line 1" name="employer_addr_1"className={formErrors.employer_addr_1.length > 0 ? "error" : "form-control"}
                                        value={this.state.employer_addr_1} onChange={this.handleChange} />
                                 {formErrors.employer_addr_1.length > 0 && (<span className="errorMessage">{formErrors.employer_addr_1}</span>)}
                                 </div>
                                <div className="form-group col-md-6">
                                    <label> Employer Address Line 2: </label>
                                    <input placeholder="Employer Address Line 2" name="employer_addr_2" className="form-control"
                                        value={this.state.employer_addr_2} onChange={this.handleChange} />
                                 {/* {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)} */}
                                 </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> Employer City: </label>
                                    <input placeholder="City" name="employerCity" className={formErrors.employerCity.length > 0 ? "error" : "form-control"}
                                        value={this.state.employerCity} onChange={this.handleChange} />
                                 {formErrors.employerCity.length > 0 && (<span className="errorMessage">{formErrors.employerCity}</span>)}
                                 </div>
                                <div className="form-group col-md-4">
                                    <label> Employer State: </label>
                                    <input placeholder="State" name="employerState" className={formErrors.employerState.length > 0 ? "error" : "form-control"}
                                        value={this.state.employerState} onChange={this.handleChange} />
                                 {formErrors.employerState.length > 0 && (<span className="errorMessage">{formErrors.employerState}</span>)}
                                 </div>
                                <div className="form-group col-md-4">
                                    <label> Employer Postal Code: </label>
                                    <input type="number" placeholder="PostalCode" name="employerPostalCode" className={formErrors.employerPostalCode.length > 0 ? "error" : "form-control"}
                                        value={this.state.employerPostalCode} onChange={this.handleChange} />
                                 {formErrors.employerPostalCode.length > 0 && (<span className="errorMessage">{formErrors.employerPostalCode}</span>)}
                                 </div>
                            </div>
                            <div className="newApplication">
                                <button className="btn btn-success" type="submit">Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                            </div>
                        </form>
                        <div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddApplicationComponent;



