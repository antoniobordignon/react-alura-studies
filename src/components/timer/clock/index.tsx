import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDen, minuteUnity] = String(minutes).padStart(2, '0');
    const [secondeDen, secondUnity] = String (seconds).padStart(2, '0');
    return(
        <>
            <span className={style.clockNumber}>{minuteDen}</span>
            <span className={style.clockNumber}>{minuteUnity}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondeDen}</span>
            <span className={style.clockNumber}>{secondUnity}</span>
        </>
    ) 
}