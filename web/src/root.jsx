import React from 'react'
import ReactDOM from 'react-dom'
import Dev from '@pages/dev';

function Root() {
    return (
        <Dev/>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));