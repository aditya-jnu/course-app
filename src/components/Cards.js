import { useState } from "react";
import Card from "./Card";
function Cards(props){
  let category=props.category;
  const[likedCourse,setlikedCourse]=useState([]);

  console.log("hii",props.info);
  let info=props.info;
  const allcourses=[];
  const getCourses=()=>{
    if(category==="All"){
     Object.values(info).forEach(array=>{
      array.forEach((course)=>{
        allcourses.push(course);
      })
     })
     return allcourses;
    }
    else{
      return info[category];
    }
  }

  return(
    <div className="c">
    <div className="cards">
      {
        getCourses().map((x)=>{
             return <Card key={x.id} courseData={x} likedCourse={likedCourse} setlikedCourse={setlikedCourse}/>
        })
      }
    </div>
    </div>
  )
}
export default Cards;