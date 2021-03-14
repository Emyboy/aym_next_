import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default () => {
    return (
        <div className='bg-white'>
            <div className="container">

                <form action="#">
                    <p className="comment-notes"><span id="email-notes">Your email address will not be
                                                published.</span> Required fields are marked <span className="required">*</span></p>
                    <div className="row row--10">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input id="name" type="text" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                                <label>Your Email</label>
                                <input id="email" type="email" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                                <label>Your Website</label>
                                <input id="website" type="text" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label>Leave a Reply</label>
                                <textarea name="message"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <p className="comment-form-cookies-consent">
                                <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                                <label for="wp-comment-cookies-consent">Save my name, email, and
                                                        website in this browser for the next time I comment.</label>
                            </p>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-submit cerchio" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                                <input name="submit" type="submit" id="submit" className="axil-button button-rounded" value="Post Comment" />
                            </div>
                        </div>
                    </div>
                </form>

                {/* <h2>Using CKEditor 5 build in React</h2> */}
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        </div>
    );
}
