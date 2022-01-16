import React from 'react';
import {saveAs} from 'file-saver';

function Download() {

    const SaveFile = () =>{
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };

    return (
        <div className="container">
            <button type="button" class="btn btn-primary" onClick={SaveFile}>Download</button>
        </div>
    )
}

export default Download
