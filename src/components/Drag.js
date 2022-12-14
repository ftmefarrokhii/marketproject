import React, {Fragment, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import plus from '../images/plus.png';

const Drag=()=>{
    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
      };
      
      const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 300,
        height: 300,
        padding: 4,
        boxSizing: 'border-box'
      };
      
      const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
      };
      
      const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
      };
      const [files, setFiles] = useState([]);
      const {getRootProps, getInputProps} = useDropzone({
        accept: {
          'image/*': []
        },
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      });
      
      const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
              // Revoke data uri after image is loaded
              onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
          </div>
        </div>
      ));
    
      useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
      }, []);
      
      const clickHandler=(e)=>{
        e.defaultprevent();
      }
      return (
        <Fragment>
        <section className="container" style={{backgroundColor:"red",height:"350px"}}>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
          <p style={{width:"300px"}}>add image for adding product</p>
          {/* <img src={plus} style={{width:"100px"}} alt="logo"></img> */}
        </div>
        
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
        <div><label>enter code</label><input></input></div>
        <div><label>enter price</label><input></input></div>
        <div><button onChange={clickHandler}>add to products</button></div>
      </section>
      
      
      </Fragment>
       
      
       
  );

}
export default Drag;