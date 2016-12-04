// @flow
import React from 'react';

function App(props: { message: string }): React$Element<{}>{
    return <h1> Hello {props.message} </h1>;
}

export default App;