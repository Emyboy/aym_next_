import React from 'react'
import { FaHeading, FaParagraph, FaImage, FaLink} from 'react-icons/fa'
import EachTool from './EachTool'


export default function ToolBar({
    state,
    setState
}) {
    return (
        <div className='fixed-bottom scrollmenu'>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Paragraph' icon={<FaParagraph size={15} />} /></a>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Image' icon={<FaImage size={15} />} /></a>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Link (URL)' icon={<FaLink size={15} />} /></a>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Heading' icon={<FaHeading size={15} />} /></a>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Paragraph' icon={<FaParagraph size={15} />} /></a>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Image' icon={<FaImage size={15} />} /></a>
            <a><EachTool onClick={() => setState({ ...state, display: 'property' })} name='Link (URL)' icon={<FaLink size={15} />} /></a>
        </div>
    )
}
