import React from 'react'

export default function PropertyEditor({
    state,
    setState
}) {
    return (
        <div>
            <h2>Prop Edits</h2>
            <button className='btn btn-info' onClick={() => setState({ ...state, display: 'canvas' })}>Back</button>
        </div>
    )
}
