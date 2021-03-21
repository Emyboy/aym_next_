import React from 'react'
import { FaHeading, FaParagraph, FaImage, FaLink } from 'react-icons/fa'
import EachTool from './EachTool'
import { ImQuotesLeft } from 'react-icons/im'


export default function ToolBar({
    state,
    setState
}) {

    const goToPropperty = (property, propertyTag) => {
        setState({
            ...state,
            display: 'property',
            property,
            propertyTag
        })
    }

    return (
        <div className='fixed-bottom scrollmenu animate__animated animate__fadeInUp text-center border'>
            <a>
                <EachTool onClick={() => goToPropperty('text', 'h2')} name='Heading' icon={<FaHeading size={15} />} />
            </a>
            <a>
                <EachTool onClick={() => goToPropperty('text', 'p')} name='Paragraph' icon={<FaParagraph size={15} />} />
            </a>
            <a>
                <EachTool onClick={() => goToPropperty('media', 'img')}name='Image' icon={<FaImage size={15} />} />
            </a>
            <a>
                <EachTool onClick={() => goToPropperty('text', 'link')} name='Link (URL)' icon={<FaLink size={15} />} />
            </a>
            <a>
                <EachTool onClick={() => goToPropperty('text', 'link')} name='Qootes' icon={<ImQuotesLeft size={15} />} />
            </a>
        </div>
    )
}
