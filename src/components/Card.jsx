import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;

    

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            setlikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else {
            if (likedCourses.length === 0) {
                setlikedCourses([course.id]);
            } else {
                setlikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Like Added");
        }
    }

    return (

        <div className='w-[300px] text-white bg-opacity-80 rounded-md overflow-hidden bg-[#1f0d47]'>
            <div className=' relative '>
                <img src={course.image.url} />
                <div className=' flex items-center justify-center w-[40px] h-[40px] rounded-full absolute bg-white right-2 top-[9.3rem]'>
                    <button onClick={clickHandler} >
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize={"1.75rem"} /> :<FcLikePlaceholder fontSize={"1.75rem"} />
                        }
                    </button>
                </div>
            </div>
            <div className=' p-4'>
                <p className=' text-white font-semibold text-lg leading-6 '>{course.title}</p>
                <p className=' text-white mt-2'>{

                    course.description.length > 100 ?(course.description.substring(0,100))+ "...":(course.description)

                }</p>
            </div>
        </div>

    )
}

export default Card