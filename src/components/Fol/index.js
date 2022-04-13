import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import './pdf_view.css'


function Fol (){
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return(
    <div>
      <Document 
      file="./assets/fol_teste.pdf" 
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={console.error}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={() => setPageNumber(pageNumber-1)} disabled={pageNumber <= 1}>{'<<'}</button>
        <button onClick={() => setPageNumber(pageNumber+1)} disabled={pageNumber >= numPages}>{'>>'}</button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  )
}

export default Fol;