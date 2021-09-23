import React, { useEffect, useState } from "react";

const Statewise = ()=>{

    const [data, setData] = useState([]);

    const getCovidData = async ()=>{

        const res = await fetch ('https://api.rootnet.in/covid19-in/stats/latest');
        const actualData = await res.json();
        console.log(actualData.data.regional);
        setData(actualData.data.regional)
     }

    useEffect(()=>{
        getCovidData();
    },[])
  
    return (
        <>
        {
            data.map((currElem, ind)=>{
                return(
                    <div className="container">
                    <h1>Name: <span>{currElem.loc}</span></h1>
                    <h1>Total Cases: <span>{currElem.totalConfirmed}</span></h1>
                    <h1>Confirmed Cases: <span>{currElem.confirmedCasesIndian}</span></h1>
                    <h1>Recovered Cases: <span>{currElem.discharged}</span></h1>
                    </div>
                   
                )
    
            })
        }
    
        </>
    )
}

export default Statewise;