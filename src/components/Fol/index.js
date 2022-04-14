import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Link } from 'react-router-dom';
import './fol.css';


function Fol (){
  const styles = {
    page: {maxWidth: "100%"}
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return(
    <div>
      <div className="control">
        <button onClick={() => setPageNumber(pageNumber-1)} disabled={pageNumber <= 1}>{'<<'}</button>
        <button onClick={() => setPageNumber(pageNumber+1)} disabled={pageNumber >= numPages}>{'>>'}</button>
      </div>
      <div className="container">
        <Document
        file="./assets/fol_teste.pdf" 
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}>
          <Page style={styles.page} scale={0.9} pageNumber={pageNumber} />
        </Document>
      </div>
      <p>
          Page {pageNumber} of {numPages}
      </p>
      <Link to="/search">
        <button className="w-100 btn btn-lg btn-primary" >Back</button>
      </Link>
    </div>
  )
}

export default Fol;