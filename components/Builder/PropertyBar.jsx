import React from 'react'
import { FaHeading, FaParagraph, FaImage, FaLink } from 'react-icons/fa'
import EachTool from './EachTool'


export default function PropertyBar({
    state,
    setState
}) {
    return (
        <div className='fixed-bottom scrollmenu animate__animated animate__fadeInUp text-center border'>
            <a>
                My property bar
            </a>
        </div>
    )
}
