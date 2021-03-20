import React from 'react'

export default function EachTool({
    name,
    icon,
    onClick
}) {
    return (
        <div onClick={onClick} className='text-center' style={{ width: '99px'}}>
            {icon}<br />
            <p className='m-0' style={{ fontSize: '10px'}}>{name}</p>
        </div>
    )
}
