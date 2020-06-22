import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './AttentionGrabber';
import {Input} from "./Input";

export class Home extends React.Component {
    render() {
        return (
            <Input />
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);