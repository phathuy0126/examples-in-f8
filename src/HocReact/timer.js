import {useState,useEffect} from 'react';
function SetTimer () {
    const [show,setShow] = useState(false);
    const [value,setValue] = useState(60);
    function handleGetValue(e) {
        const value = e.target.value;
        setValue(value);
    }
    function handleSubmit() {        
        setShow(true)        
    }
    function handleStop() {
        setShow(false)        
    }
    return(
        <div>
            <h1>Đồng hồ đếm ngược</h1>
            {show && <CountTimer 
                time = {value}  
            />}
            <input
                onInput={handleGetValue}
                placeholder='Nhập thời gian bắt đầu đếm ngược'
            />
            <button onClick={handleSubmit}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}


function CountTimer ({time}) {
    const [countDown,setCountDown] = useState(time);    
    useEffect(() => {
        const timer = setInterval(() => {
            setCountDown(prevState => prevState - 1);
        }, 1000);        
        if (countDown === 0) {
            alert('reng reng reng ))))')
            clearInterval(timer)
        }
        return () => clearInterval(timer);
    }, [countDown])
    return(
        <div>
            <h1>{countDown}</h1>
        </div>
    );
}
export default SetTimer;