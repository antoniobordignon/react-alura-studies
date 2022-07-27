import Button from '../button'
import Clock from './clock'
import style from './Timer.module.scss'
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useState } from 'react';

interface Props {
    selected: ITask | undefined
}

export default function Timer({ selected}: Props) {
    const [time, setTime] = useState<number>();
    if(selected?.time) {
        setTime(timeToSeconds(selected.time));
    }
    return (
        <div className={style.timer}>
            <p className={style.title}>choose a card and start the timer</p>
            Time: {time}
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}