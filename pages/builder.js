import React, { useState } from 'react'
import Canvas from '../components/Builder/Canvas'
import ToolBar from '../components/Builder/ToolBar'
import PropertyEditor from '../components/Builder/PropertyEditor'

const Builder = props => {
    const [state, setState] = useState({
        display: 'canvas',
    })

    const Page = () => {
        switch (state.display) {
            case 'canvas':
                return <Canvas state={state} setState={setState} />
            case 'property':
                return <PropertyEditor state={state} setState={setState} />

            default:
                return <Canvas state={state} setState={setState} />;
        }
    }

    return (
        <div className='axil-post-list-area post-listview-visible-color axil-section-gap is-active pt-4'>
            <div className='container'>
                <div className='row' style={{ justifyContent: 'center' }}>
                    <div className='col-lg-8 bg-color-white'>
                        <Page />
                    </div>
                </div>
            </div>
            <ToolBar state={state} setState={setState} />
        </div>
    )
}


export default Builder
