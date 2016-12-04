// @flow
import React from 'react';
import ReactDOM from 'react-dom';

function App(props: { message: string}){
    return <h1> Hello {props.message} </h1>;
}

export default App;