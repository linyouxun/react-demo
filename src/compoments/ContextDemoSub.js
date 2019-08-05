import React from 'react';
// const ReactDemoContext = React.createContext(null)
import { ReactDemoContext } from './';


class ContextDemoSub extends React.Component {
    render() {
        return <ReactDemoContext.Consumer>
            {
                value => {
                    debugger
                    return value
                }
            }
        </ReactDemoContext.Consumer> 
    }
}

export default ContextDemoSub;