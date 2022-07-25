import Button from '../button'
import Clock from './clock'
import style from './Timer.module.scss'

export default function Timer() {
    return (
        <div className={style.timer}>
            <p className={style.title}>choose a card and start the timer</p>
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}