import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import { MDBCard, MDBCardTitle, MDBCardBody, MDBBtn, MDBRow, MDBCol,MDBContainer, MDBIcon } from 'mdbreact';
import ApplicationService from '../services/ApplicationService';
//import Chart from './Chart'
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
class DashboardComponent extends Component {

    constructor() {
        super();
        this.state = {
            application:[],
            TotalSubmission:null,
            TotalApproved:null,
            TotalReject:null,
            TodaysSubmission:null,
            TodaysApproved:null,
            TodaysReject:null,
        }
        this.addnewApplication = this.addnewApplication.bind(this);
        this.viewApplication = this.viewApplication.bind(this);
        this.batchSubmission = this.batchSubmission.bind(this);
    }
    componentDidMount() {

        
        ApplicationService.getTotalCount().then(res => {
            this.setState({ TotalSubmission: res.data});
        })
        ApplicationService.getTotalApprovedCount().then(res => {
            this.setState({ TotalApproved: res.data});
        })
        ApplicationService.getTotalRejectedCount().then(res => {
            this.setState({ TotalReject: res.data});
        })
        ApplicationService.getTodaysCount().then(res => {
            this.setState({ TodaysSubmission: res.data});
        })
        ApplicationService.getTodaysApprovedCount().then(res => {
            this.setState({ TodaysApproved: res.data});
        })
        ApplicationService.getTodaysRejectedCount().then(res => {
            this.setState({ TodaysReject: res.data});
        })        
       
    }
    batchSubmission(){
        this.props.history.push('/batch-submission');
    }
    addnewApplication() {
        this.props.history.push('/add-application');
    }
    viewApplication() {
        this.props.history.push('/applications');
    }
    AddApplicationNewComponent() {
        this.props.history.push('/new');
    }
    render() {
        return (
            <div className="container">
                <div className="container" style={{marginTop:"20px",alignItems:'center',flexDirection:"row"}}>
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBCard
                                className='card-image'
                                style={{
                                    backgroundImage:
                                        "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                            >
                                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                                    <div>
                                        <h5 className='pink-text'>
                                            <MDBIcon icon='chart-pie' /> 
                                         </h5>
                                        <MDBCardTitle tag='h3' className='pt-2'>
                                            <strong>New Applications</strong>
                                        </MDBCardTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                            officia accusamus minus error nisi architecto nulla ipsum
                                            dignissimos. Odit sed qui, dolorum!
                                      </p>
                                        <MDBBtn color='pink' onClick={this.addnewApplication} >
                                            <MDBIcon icon='clone left'  /> Click here
                                     </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBCard
                                className='card-image'
                                style={{
                                    backgroundImage:
                                        "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
                                }}
                              >
                                <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
                                    <div>
                                        <h5 className='orange-text'>
                                            <MDBIcon icon='desktop' /> 
                                      </h5>
                                        <MDBCardTitle tag='h3' className='pt-2'>
                                            <strong>View Applications</strong>
                                        </MDBCardTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                            officia accusamus minus error nisi architecto nulla ipsum
                                            dignissimos. Odit sed qui, dolorum!
                                         </p>
                                        <MDBBtn color='deep-orange'  onClick={this.viewApplication} >
                                            <MDBIcon icon='clone left' /> Click here
                                       </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBCard
                                className='card-image'
                                style={{
                                    backgroundImage:
                                        "url('https://mdbootstrap.com/img/Photos/Others/images/49.jpg')"
                                }}
                            >
                                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                                    <div>
                                        <h5 className='pink-text'>
                                            <MDBIcon icon='chart' /> 
                                         </h5>
                                        <MDBCardTitle tag='h3' className='pt-2'>
                                            <strong>Batch Submission</strong>
                                        </MDBCardTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                            officia accusamus minus error nisi architecto nulla ipsum
                                            dignissimos. Odit sed qui, dolorum!
                                      </p>
                                        <MDBBtn color='pink' onClick={this.batchSubmission} >
                                            <MDBIcon icon='clone left' /> Click here
                                     </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                </div>
                <div className="container" style={{marginTop:"20px", marginle:"10px",alignItems:'center',flexDirection:"row"}}>
                    <MDBContainer>
                    <MDBRow md="6" className="mb-4">
                        <MDBCol md="6" className="mb-4">
                        <MDBCard color="indigo" text="white" className="text-center">
                            <MDBCardBody>
                            Total Submission : {this.state.TotalSubmission}
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard color="pink lighten-2" text="white" className="text-center">
                            <MDBCardBody>
                            Total Approved : {this.state.TotalApproved}
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard color="info-color" text="white" className="text-center">
                            <MDBCardBody>
                             Todal Reject: {this.state.TotalReject}
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>

                        <MDBCol md="6">
                        <MDBCard color="red lighten-1" text="white" className="text-center">
                            <MDBCardBody>
                            Today's Submission: {this.state.TodaysSubmission}
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard color="success-color" text="white" className="text-center">
                            <MDBCardBody>
                            Today's Approved : {this.state.TodaysApproved}
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard color="mdb-color lighten-2" text="white" className="text-center">
                            <MDBCardBody>
                            Today's Rejected : {this.state.TodaysReject}
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
                </div>
                {/* <div>
                    <Chart />
                </div> */}

                <div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;