import React, { Component } from 'react';
import ApplicationService from '../services/ApplicationService';
class ListApplicationComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            applications: [],
            totalpages:[],
           // applicationPerPage:5,
        }
        //this.addnewApplication = this.addnewApplication.bind(this);
    }

    // addnewApplication() {
    //     this.props.history.push('/add-application');
    // }
    viewApplication(id){
        this.props.history.push(`/view-application/${id}`);
    }
    componentDidMount() {
        
        ApplicationService.getApplications(1)
        .then((res)=>{
            this.setState({
                totalpages: new Array(res.data.totalPages).fill(0),
                applications: res.data.content,
            });
        })
    }
        // ApplicationService.getApplications()
        // .then((res) => {
        //     this.setState({application: res.data});
        // })

         // let page=this.state.currentPage;
        // ApplicationService.getApplications(page-1)
        // .then(res => {
        //     this.setState({ 
        //         application: res.data,
        //         totalPages:res.data.totalPages,
        //         totalElements:res.data.totalElements,
        //         currentPage:res.number + 1
        //     });
        // })
    pageChange(e){
        ApplicationService.getApplications(e.target.id)
        .then((res)=>{
            this.setState({
                totalpages: new Array(res.data.totalPages).fill(0),
                applications:[],
                applications: res.data.content 
            });
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Applications List</h2>
                 <div children="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Application ID</th>
                                <th>Applicant Name</th>
                                <th>Application Submitted date</th>
                                <th>Application Status</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.applications.map(
                                    application =>
                                        <tr key={application.id}>
                                            <td><a href="" onClick={()=> this.viewApplication(application.id)}>{application.id}</a></td>
                                            <td>{application.firstName} {application.lastName}</td>
                                            <td>{application.applicationDate}</td>
                                             {application.applicationStatus=="Approved" ? 
                                            <td style={{color:'#40D428'}}>{application.applicationStatus}</td> :
                                            <td style={{color:'#ff0000'}}>{application.applicationStatus}</td>}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {this.state.totalpages.map((ele,index)=>{
                        return <button onClick={this.pageChange.bind(this)} id={index+1}>{index+1}</button>
                    })
                    }
                </div>
                <div>
                    <br></br><br></br>
                </div>
            </div>
        );
    }
}

export default ListApplicationComponent;