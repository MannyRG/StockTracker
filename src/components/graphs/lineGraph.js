import React from 'react'
import {Line } from 'react-chartjs-2';


const LineGraph = ({data, name, date}) => {
   

const getData=(dataSet, dataName)=>{
    if(dataSet===0)return;


    const dateStamp = dataSet.t.map(unixtime=>{
            const unixTime= new Date(unixtime * 1000)
            const hour = unixTime.getHours()
            const day = unixTime.getDate()
            const month = unixTime.getMonth()
            return `${month}/${day}`
     })

    const chartData = {
            labels: dateStamp,
            datasets:[
                {
                    label:dataName,
                    data:data.h,
                    fill: false,
                    backgroundColor: "red",
                    borderColor: 'green',
                    tension: 0.4
                }
            ]
        }
    return chartData;

}
 
    return (
        <>
            <Line 
               data={getData(data, name)}
               style={{"borderTop": "1px solid black", "height": "100%", "width": "100%"}}       
           />
        </>
    )
}



export default LineGraph;
