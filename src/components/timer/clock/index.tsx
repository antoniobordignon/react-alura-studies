import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hour * 3600))/ 60);
    const seconds = time % 60;
    const [hourDen, hourUnity] = String(hour).padStart(2, '0');
    const [minuteDen, minuteUnity] = String(minutes).padStart(2, '0');
    const [secondDen, secondUnity] = String (seconds).padStart(2, '0');
    return(
        <>
            <p className={style.clock}>
            <span className={style.clockNumber}>{hourDen}</span>
            <span className={style.clockNumber}>{hourUnity}</span>
            </p>
            <p className={style.clock}>
            <span className={style.clockDivision}>:</span>
            </p>
            <p className={style.clock}>
            <span className={style.clockNumber}>{minuteDen}</span>
            <span className={style.clockNumber}>{minuteUnity}</span>
            </p>
            <p className={style.clock}>
            <span className={style.clockDivision}>:</span>
            </p>
            <p className={style.clock}>
            <span className={style.clockNumber}>{secondDen}</span>
            <span className={style.clockNumber}>{secondUnity}</span>
            <p className={style.clock}>
            </p>
            <span className={style.clockDivisionNone}>:</span>
            </p>
        </>
    ) 
}