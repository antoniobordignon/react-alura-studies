import React, {useState}from 'react';
import Item from './item';
import style from './List.module.scss';

function List() {
    const [tasks, setTasks] = useState([{
        task: 'React', 
        time: '02:00:00'
    }, {
        task: 'Javascript',
        time: '01:10:00'
    }, {
        task: 'Typescript',
        time: '03:00:00'
    }]);
    return (
        <aside className={style.tasksList}>
            <h2 onClick={() => {
                setTasks ([...tasks, {task: "study state", time: "05:00:00"}])
            }}>Studies of the day</h2>
            <ul>
                {tasks.map((item, index) => (
                  <Item
                  key={index}
                    {...item}
                  />  
                ))}
            </ul>
        </aside>
    )
}

export default List;