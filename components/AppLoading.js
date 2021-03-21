import React from 'react'
import { Spinner } from 'react-activity'

export default () => {
    return (
        <div className='text-center' style={{ paddingTop: '40vh' }}>
            <Spinner size={30} color='#007bff' />
        </div>
    )
}
