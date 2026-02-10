import { useEffect, useRef, useState } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState<number>(0);
    const flag = useRef(false);
    useEffect(() => {
        if (!flag.current) return;

        const timerid = setTimeout(() => {
            setSeconds(prev => (prev + 1));
        }, 1000);

        return () => clearTimeout(timerid);
    }, [seconds])
    const handletimer = () => {
        flag.current = true
        setSeconds(prev => prev + 1);
    }

    const stoptimer = () => {
        flag.current = false;
        resettimer();
    }

    const resettimer = () => {
        setSeconds(-1);
    }

    let totalseconds = seconds;
    let totalminutes = (Math.floor(seconds / 60));
    let totalhours = Math.floor(totalminutes / 60);

    let secondss = totalseconds % 60;
    let minutes = totalminutes % 60;
    let hours = totalhours % 24;
    return (
        <>
            <p>{hours} H : {minutes} M : {secondss} S</p>
            <button onClick={() => handletimer()}>start</button>
            <button onClick={() => stoptimer()}>stop</button>
            <button onClick={() => resettimer()}>reset</button>

        </>
    )
}

export default Timer