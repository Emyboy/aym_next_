import React from 'react'
import Canvas from '../components/Builder/Canvas'
import ToolBar from '../components/Builder/ToolBar'

const Builder = props => {
    return (
        <div className='axil-post-list-area post-listview-visible-color axil-section-gap is-active pt-4'>
            <div className='container'>
                <div className='row' style={{ justifyContent: 'center' }}>
                    <div className='col-lg-8 bg-color-white'>
                        <Canvas />
                        
                    </div>
                </div>
            </div>
            <ToolBar />
        </div>
    )
}


export default Builder
