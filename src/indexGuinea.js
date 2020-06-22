import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';
import { GuineaPigs } from './GuineaPigs';
import { GuineaPigsContainer } from './GuineaPigsContainer';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            <div>
                {/*<GuineaPigs/>*/}
                <GuineaPigsContainer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root')
);