import Button from '../button'
import Clock from './clock'
import style from './Timer.module.scss'
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Timer({ selected, finishTask}: Props) {
    const [time, setTime] = useState<number>();
    const [ intervalId, setIntervalId] = useState<number>(0);

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    },[selected])

    function startRegressive(counter: number = 0) {
        let interval:any = setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return startRegressive(counter - 1);
            }
            finishTask();
        },1000); 
        
        setIntervalId(interval);
    }

    const Pause = () => {
        clearInterval(intervalId);
    }

    const Reset = () => {
        clearInterval(intervalId);
        if(selected?.time) {
        setTime(timeToSeconds(selected.time));
        }
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Choose a card and start the timer</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <section className={style.buttons}>
            <Button onClick={() => startRegressive(time)}>
                Start
            </Button>
            <Button onClick={() => Pause()}>
                Stop
            </Button>
            <Button onClick={() => Reset()}>
                Reset
            </Button>
            </section>
        </div>
    )
}