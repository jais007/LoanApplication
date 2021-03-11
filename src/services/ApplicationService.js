import axios from 'axios'

const APPLICATION_API_BASE_URL="";

class ApplicationService{
     
    // getApplications(){
    //     return axios.get(APPLICATION_API_BASE_URL);
    // }

    uploadFile(file){
        return axios.post(APPLICATION_API_BASE_URL+"upload",file);
    }
    getApplications(pageNo){
        return axios.get(APPLICATION_API_BASE_URL+"applications/page/"+pageNo);
    }
    addApplication(application){
        return axios.post(APPLICATION_API_BASE_URL+"applications",application);
    }
    getApplicationById(employeeId){
        return axios.get(APPLICATION_API_BASE_URL + 'applications/' + employeeId);
    }
    getApplicationsByDate(){
        return axios.get(APPLICATION_API_BASE_URL+"applicationsbydate");
    }
    getTotalCount(){
        return axios.get(APPLICATION_API_BASE_URL+"total-submission");
    }
    getTodaysCount(){
        return axios.get(APPLICATION_API_BASE_URL+"todays-submission");
    }
    getTotalApprovedCount(){
        return axios.get(APPLICATION_API_BASE_URL+"total-approved");
    }
    getTodaysApprovedCount(){
        return axios.get(APPLICATION_API_BASE_URL+"todays-approved");
    }
    getTotalRejectedCount(){
        return axios.get(APPLICATION_API_BASE_URL+"total-rejected");
    }
    getTodaysRejectedCount(){
        return axios.get(APPLICATION_API_BASE_URL+"todays-rejected");
    }
}


export default new ApplicationService()