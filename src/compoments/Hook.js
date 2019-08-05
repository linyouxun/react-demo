import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import './Hook.css';



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    componentDidCatch(error, info) {
        alert('1111')
        this.setState({
            error
        });

        // 设置崩溃以后显示的UI
        // 上传错误日志
    }

    render() {

        if (this.state.error) { // 如果页面崩溃，则显示下面的UI
            return (
                <div style={{justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{color: 'red'}}>
                        {this.state.error && this.state.error.toString()}
                    </div>

                </div>
            );
        }
        return this.props.children;
    }
}

function MyComponent(props) {
    
    const computedVal = useMemo(() => 
        props.a + props.b,
        [props.a, props.b]
    , props);
    return <div>{computedVal}</div>;
}

export default function HookTest({type}) {
    const [isOn, setIsOn] = useState(() => {
        console.log('init isOn');
        return false;
    });
    const [count, setCount] = useState(() => {
        console.log('init count');
        return 0;
    });
    const inputRef = useRef(null);
    // useEffect((status) => {
    //     console.log('this component did mount', status);
    //     // console.log(arguments);
    //     return () => {
    //         console.log('use effect done1');
    //     }
    // }, [isOn])
    // useEffect((status) => {
    //     console.log('this component did mount2', status);
    //     // console.log(arguments);
    //     return () => {
    //         console.log('use effect done2');
    //     }
    // })
    // useEffect((status) => {
    //     console.log('this component did mount3', status);
    //     // console.log(arguments);
    //     return () => {
    //         console.log('use effect done3');
    //     }
    // }, [])
    // useEffect((status) => {
    //     console.log('this component did mount4 type', status);
    //     // console.log(arguments);
    //     return () => {
    //         console.log('end this component did mount4 type', status);
    //     }
    // })
    // useLayoutEffect((status) => {
    //     console.log('this component did useLayoutEffect', status);
    //     // console.log(arguments);
    //     return () => {
    //         console.log('end this component did useLayoutEffect', status);
    //     }
    // })
    const clickDiv = () => {
        console.log(inputRef);
        console.log(inputRef.current.value)
        setCount(count + 1);
    }
    if (count > 5) {
        throw new Error('3')
    }
    // let a = [1,2,3]
    // let value = a[3].toString()
    return <div>
        <input ref={inputRef}/>
        <MyComponent a={1} b={count}/>
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