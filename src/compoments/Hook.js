import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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

export default function HookTest({type}) {
    const [isOn, setIsOn] = useState(() => {
        console.log('init isOn');
        return false;
    });
    const inputRef = useRef(null);
    useEffect((status) => {
        console.log('this component did mount', status);
        // console.log(arguments);
        return () => {
            console.log('use effect done1');
        }
    }, [isOn])
    useEffect((status) => {
        console.log('this component did mount2', status);
        // console.log(arguments);
        return () => {
            console.log('use effect done2');
        }
    })
    useEffect((status) => {
        console.log('this component did mount3', status);
        // console.log(arguments);
        return () => {
            console.log('use effect done3');
        }
    }, [])
    useEffect((status) => {
        console.log('this component did mount4 type', status);
        // console.log(arguments);
    }, [type])
    useLayoutEffect((status) => {
        console.log('this component did useLayoutEffect', status);
        // console.log(arguments);
    })
    const clickDiv = () => {
        console.log(inputRef);
        console.log(inputRef.current.value)
    }

    let a = [1,2,3]
    let value = a[3].toString()
    return <ErrorBoundary>
        <input ref={inputRef}/>
        {
            !!isOn ? 
                <div className="btn" onClick={() => {setIsOn(!isOn)}}>开</div> : 
                <div className="btn" onClick={() => {setIsOn(!isOn)}}>关</div>
        }
        <div onClick={clickDiv}>
            onclick
        </div>
    </ErrorBoundary>
}