import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner.js";
import { apiUrl, filterData } from "./data.js";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const[info,setInfo]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)

  function targ(t){
    console.log("Clicked ",t)
    let ta=t;
    setCategory(ta)
  }
  // ***********
  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output= await response.json();
      console.log("hiii",output);
      setInfo(output.data);
    }
    catch(error){
      toast.error("Something went wrong!!")
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <Nav/>
      <Filter filterData={filterData} targ={targ} />
      <div>
        {loading?(<Spinner/>): (<Cards info={info} category={category}/>)}
      </div>
    </div>
  );
}
export default App;
