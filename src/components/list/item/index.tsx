import React from 'react';
import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
  }


export default function Item ({task, time, selected, completed, id, selectTask,}: Props) {

   
    return (
        <li className={`${style.item} ${selected ? style.selectedItem: ''} ${completed ? style.completedItem : ''}`} onClick={() => !completed && selectTask({
            task, time, selected, completed, id
        })}>
            <section>
            <h3>Task: {task}</h3>
            <span>Time: {time}</span>
            </section>
            {completed && <span className={style.concluded} area-Label="task completed"></span>} 
        </li>
    )
}