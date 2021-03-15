import React from 'react'

export default function Heading({
    text
}) {
    return (
        <div className="col-lg-12">
            <div className="page-title">
                <h2 className="title mb--40">{text}</h2>
            </div>
        </div>
    )
}
