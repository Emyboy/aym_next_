import React, { useState, useEffect } from 'react'
import Canvas from '../components/Builder/Canvas'
import ToolBar from '../components/Builder/ToolBar'
import PropertyEditor from '../components/Builder/PropertyEditor'
import Global from '../Global'
import PropertyBar from '../components/Builder/PropertyBar'

const Builder = props => {
    const [state, setState] = useState({
        display: 'canvas',
        builder: [],
        property: null,
        propertyTag: null
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

    useEffect(() => {
        console.log('builder just rendered')
    }, [state.builder])

    return (
        <div className='axil-post-list-area post-listview-visible-color axil-section-gap is-active pt-4'>
            <div className='container'>
                <div className='row' style={{ justifyContent: 'center' }}>
                    <div className='col-lg-8 bg-color-white p-2'>
                        <Page />
                    </div>
                </div>
            </div>
            {
                state.property ?
                    <PropertyBar state={state} setState={setState} /> :
                    <ToolBar state={state} setState={setState} />
            }
        </div>
    )
}


export default Builder


