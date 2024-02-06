import { useState,useEffect } from "react";
function Filter(props){ 
    const [selectedButton, setSelectedButton] = useState(null);
    function gett(t){
       props.targ(t);
       setSelectedButton(t);
    }
    return(
        <div className="filter">{
            props.filterData.map((data)=>{
                return <button key={data.id} onClick={()=>{gett(data.title)}} style={{
                    border: selectedButton === data.title ? "2px solid white" : "none",
                  }}>{data.title}</button>
            })
           }
        </div>
    );
}
export default Filter;