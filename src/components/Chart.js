import React, { useState, useEffect } from "react";
import { Line ,Bar} from "react-chartjs-2";
import axios from "axios";
import ApplicationService from '../services/ApplicationService';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [applicationDate, setapplicationDate] = useState([]);
  const [applicationCount, setapplicationCount] = useState([]);
  const [applicationApproved, setapplicationApproved] = useState([]);
  const [applicationRejected, setapplicationRejected] = useState([]);

  const chart = () => {
    let appDate = [];
    let appCount = [];
    let appApproved=[];
    let appRejected=[];

    ApplicationService.getApplicationsByDate()
    .then(res=>{
      //  console.table("Testing",res.data);
        for (const dataObj of res.data ) {
          appDate.push(dataObj[0]);
          appCount.push(parseInt(dataObj[1]));
          appApproved.push(parseInt(dataObj[2]));
          appRejected.push(parseInt(dataObj[3]));
        }
        appCount.reverse();
        appDate.reverse();
        appApproved.reverse();
        appRejected.reverse();
        console.log("Date", appDate);
        console.log("Count", appCount);
        console.log("Approved", appApproved);
        console.log("Rejected", appRejected);
        setChartData({
          labels: appDate,
          datasets: [
            {
              label: "Submitted",
              data: appCount,
              backgroundColor: "rgba(30,144,255,0.6)",
              borderColor: "rgba(255,99,132,1)",
              hoverBackgroundColor: 'rgba(30,144,255,1)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              borderWidth: 1
            },
            {
                label: "Approved",
                data: appApproved,
                backgroundColor: "rgba(25,209,25, 0.6)",
                borderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: 'rgba(25,209,25,1)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
              },
              {
                label: "Rejected",
                data: appRejected,
                backgroundColor: "rgba(255,99,71, 0.6)",
                borderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: 'rgba(255,99,71, 1)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
              }
          ]
        });
    })
    .catch(err => {
        console.log(err);
      });
    console.log(appDate, appCount);
  };
 
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <h1>Chart</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Chart", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            legend:{
                display:false
            },
            title: { text: "Chart", display: true },
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         autoSkip: true,
            //         maxTicksLimit: 10,
            //         beginAtZero: true
            //       },
            //       gridLines: {
            //         display: false
            //       }
            //     }
            //   ],
            //   xAxes: [
            //     {
            //       gridLines: {
            //         display: false
            //       }
            //     }
            //   ]
            // }
          }}
        />
      </div>
      
    </div>
  );
};

export default Chart;