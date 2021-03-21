import React from 'react'

export default function RenderJSX({
    tag,
    content,
    styles
}) {
    switch (tag) {
        case 'h2':
            return <h2 style={styles}>{content}</h2>
        case 'p':
            return <p className='mb-2' style={styles}>{content}</p>
        default:
            return <p className='mb-2' style={styles}>{content}</p>
    }
}
