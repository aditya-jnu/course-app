import { useState } from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props){
    let courseData=props.courseData;
    let likedCourse=props.likedCourse;
    let setlikedCourse=props.setlikedCourse;
    const desc = courseData.description.substring(0, 100) + "....";

    function clickHandle(){
        if(likedCourse.includes(courseData.id)){
            // Alread liked hai so we have to remove from liked
            setlikedCourse((prev)=>prev.filter((cid)=>cid!==courseData.id));
            toast.warning("Like removed");
        }
        else{
            //  Already Liked nahi hai se we haveto add it in the array
            if(likedCourse.length===0){
                setlikedCourse([courseData.id]);
            }
            else{
                setlikedCourse((prev)=>
                    [...prev, courseData.id]
                )}
                toast.success("Liked Successfully")
        }
    }

    return(
        <div className="card">
            <div className="image">
            <img src={courseData.image.url}></img>
            <button onClick={clickHandle}>
                {
                    likedCourse.includes(courseData.id)?(<FcLike/>):(<div><FcLikePlaceholder/></div>)
                }
            </button>
            </div>
            <div className="cardCont">
            <p id="title">{courseData.title}</p>
            <p id="des">{courseData.description.length>100?(desc):(courseData.description)}</p>
            </div>
       </div>    
    
    )

}
export default Card;