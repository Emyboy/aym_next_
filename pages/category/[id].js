import React from 'react'
import CatCard from '../../components/CatCard/CatCard'
import CatBtn from '../../components/EachCat/CatBtn'

export default function Category() {
    const child = { width: `30em`, height: `100%` }
    const parent = { width: `60em`, height: `100%` }
    return (
        <div className='pt-3 axil-post-list-area post-listview-visible-color axil-section-gap is-active'>
            <h2 className='text-center'>Select A Category</h2>
            <div class="nav-tabs mt--20 scrolling-wrapper m-1" role="tablist">
                {
                    new Array(20).fill('hello').map((val, i) => {
                        return <CatBtn key={i} />
                    })
                }
            </div>
            <div className='container'>
                <div className="row">
                    {
                        new Array(20).fill('yo').map((val, i) => {
                            return <CatCard key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
