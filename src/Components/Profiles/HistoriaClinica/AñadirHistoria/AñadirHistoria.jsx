import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
function AñadirHistoria({info}) {
    const [historia, setHistoria]= useState('')

    
  return (
    <>
    <div className="App">
       
       <div className='editor'>
       <div>AñadirHistoria</div>
       <div>
        <h2>Paciente:</h2>
        <h2>Edad</h2>
        <h2>Día Consulta:</h2>
       </div>
    <CKEditor
    editor={ ClassicEditor }
    data={historia}
    onChange={ ( event, editor ) => {
        const data = editor.getData();
        console.log('historia clinica==>', { event, editor, data } );
        setHistoria(data)
    } }


    />
    </div>
    </div>
    </>
  )
}

export default AñadirHistoria