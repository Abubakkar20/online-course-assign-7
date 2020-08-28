import React from 'react';
import FakeData from '../../FakeData/Information'
import { useState } from 'react';
import './Course.css'
import Elemant from '../CourseElemant/Elemant';
import Cart from '../Cart/Cart';


const Course = () => {
    // console.log(FakeData)
    const slice = FakeData.slice(0, 17)

    const [course, setCourse] = useState(slice)

const [ cart,setCart ] =useState ([]);

const handlClick = (cours) => {
    console.log("click")
    const newCart = [...cart,cours]
    setCart(newCart)
}
    return (
        <div className={"course-container"}>
            <div className={"courseInfo"}>
                <h2 className={"course-h2"}> Total Course: {course.length}</h2>
                {
                    course.map(cours => <Elemant
                        handlClick = {handlClick}
                        cours = {cours}>
                        </Elemant>  )
                    
                    
                }
            </div>
            <div className={"cart-container"}>
            <Cart cart ={cart}> </Cart>
            </div>

        </div>
    );
};

export default Course;