import React, { useState } from 'react'
import { IoSaveSharp } from 'react-icons/io5'
import { GrClose } from 'react-icons/gr'

export default function PropertyEditor({
    state,
    setState
}) {
    const [data, setData] = useState({
        id: state.builder.length + 1,
        content: null,
        tag: state.propertyTag,
    })
    const add = () => {
        console.log('adding --', data)
        setState({
            ...state,
            builder: [...state.builder, data],
            display: 'canvas'
        })
    }

    return (
        <div>
            <div className='border-bottom mb-2 p-2'>
                {/* <div className='rounded bg-danger icon'><AiOutlineCloseCircle size={20} /></div>
                <div><FaRegSave /></div> */}
                <ul class="metabar-block d-flex justify-content-between">
                    <li class="icon" onClick={() => setState({ ...state, display: 'canvas' })}>
                        <a href="#close">
                            <GrClose size={20} />
                        </a>
                    </li>
                    <li class="icon">
                        <a href="#save">
                            <IoSaveSharp size={20} />
                        </a>
                    </li>
                </ul>
            </div>
            <h2 className='text-center'>Prop Edits</h2>
            <textarea rows='8' onChange={e => {
                // console.log('E --', e.target.value);
                setData({ ...data, content: e.target.value })
            }} />
            <h4>{state.property}</h4>
            <button className='btn btn-lg btn-success mb-5' onClick={add}>Add</button>
        </div>
    )
}
