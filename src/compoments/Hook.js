import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './Hook.css';
export default function HookTest({type}) {
    const [isOn, setIsOn] = useState(() => {
        console.log('init isOn');
        return false;
    });
    const inputRef = useRef(null);
    useEffect((status) => {
        console.log('this component did mount', status);
        console.log(arguments);
        return () => {
            console.log('use effect done1');
        }
    }, [isOn])
    useEffect((status) => {
        console.log('this component did mount2', status);
        console.log(arguments);
        return () => {
            console.log('use effect done2');
        }
    })
    useEffect((status) => {
        console.log('this component did mount3', status);
        console.log(arguments);
        return () => {
            console.log('use effect done3');
        }
    }, [])
    useEffect((status) => {
        console.log('this component did mount4 type', status);
        console.log(arguments);
    }, [type])
    useLayoutEffect((status) => {
        console.log('this component did useLayoutEffect', status);
        console.log(arguments);
    })
    const clickDiv = () => {
        console.log(inputRef);
        console.log(inputRef.current.value)
    }
    return <div>
        <input ref={inputRef}/>
        {
            !!isOn ? 
                <div className="btn" onClick={() => {setIsOn(!isOn)}}>开</div> : 
                <div className="btn" onClick={() => {setIsOn(!isOn)}}>关</div>
        }
        <div onClick={clickDiv}>
            onclick
        </div>
    </div>
}