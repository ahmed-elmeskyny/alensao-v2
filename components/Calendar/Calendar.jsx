//react
import React, {useState} from "react";

//style
import 'react-calendar/dist/Calendar.css';
import styles from "./Calendar.module.scss";

//react-calendar
import Calendar from "react-calendar";


const Calendars = ()=> {

    const [value, onChange] = useState(new Date());
    

    return (
        <div className={styles.calendarContainer}>
            <Calendar 
               onChange={onChange}
               value={value}
               className={styles.calendar}
               ></Calendar>
        </div>
    )
};

export default Calendars;