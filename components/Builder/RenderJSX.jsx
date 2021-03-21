import React from 'react'

export default function RenderJSX({
    tag,
    content,
    styles,
    caption,
    src,
    alt
}) {
    switch (tag) {
        case 'h2':
            return <h2 style={styles}>{content}</h2>
        case 'p':
            return <p className='mb-4' style={styles}>{content}</p>
        case 'img':
            return <figure class="wp-block-image">
                <img src={src} alt={alt} />
                    <figcaption>{caption}</figcaption>
                            </figure>
        case 'blockquote':
            return <blockquote className='mb-2' style={styles}><p>
                "{content}"
                </p></blockquote>
        default:
            return <p className='mb-4' style={styles}>{content}</p>
    }
}
