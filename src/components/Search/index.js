import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ReturnResult(props){
    if(props.isShow){
       let results =[]
        for (let index = 0; index < 6; index++) {
            results.push(   
                <>               
                <Link to="/fol">
                    fol_teste.pdf
                </Link> 
                <br/>    
                </>                     
            )
        }
        return results;
    }
}

function Search(){
    const [showResult, setShowResult] = useState(0)
    return(
        <>
        <div className="searchBar">
            <input/>
            <button onClick={()=> {setShowResult(1)}}> 
                Buscar
            </button>
        </div>
        <div className="searchResult">
                <ReturnResult isShow={showResult}/>
        </div>
        </>
    )
}

export default Search;