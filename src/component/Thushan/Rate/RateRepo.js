import React, { useEffect, useState } from 'react';
import axios from "axios";
import jsPDF from 'jspdf';

function RateReport(){
    const addid = "2329443"

 const[rate, setrate] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8989/rate/get2/'+addid)
        .then(res=> setrate(res.data.Rate))
        .catch(error=> console.log(error));
    },[]); 
    console.log("report page = ");
    console.log(rate);
    var count = 0;
    var totalRate =0;
    rate.map((dataSet,key)=>{
        console.log(dataSet.rating);
        count = count+dataSet.rating;
        totalRate++;
    })

    function downloadReport(){
        const doc1 = new jsPDF("landscape","px","a4","false");
        doc1.setFont('Helvertica','bold');
        doc1.text(50,20,"Rate Report for Ad_ID = "+`${addid}` );
        doc1.text(50,60,"Feed back");
        doc1.text(230,60,"Rate");
        doc1.text(430,60,"Date");
        var y = 75;
        var tcount1 =0;
        var tcount2 =0;
        rate.map((dataSet,key)=>{
            tcount1++;
            tcount2 += dataSet.rating;
            doc1.setFont('Helvertica','Normal');
            doc1.text(50,y,dataSet.feed_back);
            doc1.text(230,y,`${dataSet.rating}`);
            doc1.text(430,y,dataSet.date);
            y = y+15;
        })
        var average = tcount2/tcount1
        
        doc1.text(1,y,"_________________________________________________________________________________________");
        y = y+15;
        doc1.text(50,y,"Total rates  = "+`${tcount2}`);
        y = y+15;
        doc1.text(50,y,"Avarage Rate  = "+`${average}`);
        doc1.save('a.pdf');

    }

    return(
             
        
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        Feed back
                    </div>
                    <div class="col-1">
                      Rate
                    </div>
                    <div class="col-3">
                        
                    
                    </div>
                </div>
             </div>

            { rate.map((no,key)=>(


               // <div><h1>{no.feed_back}</h1></div>
               
                <div class="container">
                <div class="row border border-dark">
                    <div class="col-4">
                        {no.feed_back}
                    </div>
                    <div class="col-1">
                    {no.rating}
                    </div>
                    <div class="col-3">
                        <div class="row">
            
                        </div>
                    </div>
                </div>
                </div>

            ))}
            <button class="btn-primary" onClick={()=>{downloadReport()}}>Download Report</button>
        </div>
    )

}

export default RateReport;