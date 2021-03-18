import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';
import { withTheme } from '../../context/AppContext';
import DropdownSelect from '../DropdownSelect';
import axios from 'axios';
import Global from '../../Global';

export default withTheme(props => {

    const { context } = props;

    const [data, setData] = useState({
        title: null,
        description: null,
        categories: [],
        category: [],
        body: null,
        user_permissions: props.context.auth.user.id
    })

    const handleSubmit = () => {
        const post = {
            ...data,
            categories: data.categories.map(val => val.value),
            category: data.category.value
        }
        console.log('sending --', post);
        axios(Global.API_URL+'/posts', {
            method: 'POST',
            data: post,
            headers: {
                Authorization:
                    `Bearer ${context.auth.jwt}`,
            },
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log('again')
    }, [])

    return (
        <div className='bg-white pt-4'>
            <div className="container">

                <form action="#">
                    {/* <p className="comment-notes"><span id="email-notes">Your email address will not be
                                                published.</span> Required fields are marked <span className="required">*</span></p> */}
                    <h1 className='text-center'>Create Blog Post</h1>
                    <div className="w-100">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input id="name" type="text" onChange={e => setData({ ...data, title: e.target.value })} />
                        </div>
                    </div>
                    <div className="row row--10">
                        <div className='col-md-6'>
                            <DropdownSelect
                                label='Category'
                                value={data.category}
                                onChange={e => setData({ ...data, category: e })}
                                options={context.categories.map((val, i) => {
                                    return { value: val.id, label: val.name }
                                })}
                            />
                        </div>
                        <div className='col-md-6'>
                            <DropdownSelect
                                label='Categories'
                                value={data.categories}
                                isMulti={true}
                                onChange={e => setData({ ...data, categories: e })}
                                options={context.categories.map((val, i) => {
                                    return { value: val.id, label: val.name }
                                })}
                            />
                        </div>
                    </div>
                    <div className="row row--10">
                        <div className="col-12">
                            <div className="form-group">
                                <label>Short Description</label>
                                <textarea name="message" onChange={e => setData({ ...data, description: e.target.value })}></textarea>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h5>Type Article Here.</h5>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={editor => {
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const html = editor.getData();
                                    console.log({ event, editor, html });
                                    setData({ ...data, body: html })
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
                            <hr />
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <div onClick={handleSubmit} className="form-submit cerchio mt-5 mb-5" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                                    <a className="axil-button button-rounded" href="#submit" tabindex="0"><span>Add Your Comment</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
});
