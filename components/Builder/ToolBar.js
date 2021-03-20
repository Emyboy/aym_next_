import React from 'react'
import { FaHeading } from 'react-icons/fa'
import EachTool from './EachTool'


export default function ToolBar() {
    return (
        <div className='fixed-bottom scrollmenu'>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool name='Heading' icon={<FaHeading size={15} />} /></a>
        </div>  
//         <div class="scrollmenu">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   ...
// </div>
    )
}
