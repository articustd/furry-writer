import React from 'react'
import ReactDOM from 'react-dom'

export default function Root() {
    return (
        <div>
            <h1>Dev Page</h1>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));