
import ApplicationService from '../services/ApplicationService';
import React, { Component } from 'react';

class BatchSubmission extends Component {

    state = {
        selectedFile: null
    };

    handleChange = event => {
        console.log(event.target.files[0]);
        this.setState({ selectedFile: event.target.files[0] });
    };

    handleUpload = (event) => {
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        // formData.append(
        //     "myFile",
        //     this.state.selectedFile,
        //     this.state.selectedFile.name
        // );
        

        formData.append("file",this.state.selectedFile);

        event.preventDefault();
        console.log("selected file",formData);
        ApplicationService.uploadFile(formData)
        .then(res => {
            this.props.history.push('/applications');
        });
    };

    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {
        if (!this.state.selectedFile) {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <h1>Batch Submission</h1>
                <div>
                    <input type="file" name="file" onChange={this.handleChange} />
                    <button onClick={this.handleUpload}>
                        Upload
				    </button>
                </div>
                    {/* {this.fileData()} */}
            </div>
        );
    }
}

export default BatchSubmission; 
