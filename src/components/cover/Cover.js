import React from 'react'
import "./Cover.css"
import sinaudio from "../../media/sinaudio.mp4" 

const Cover = () => {
    return (
        <div className = "cover-container">
            <video className="video" src={sinaudio} autoPlay loop />

            <a
        
        className="App-link"
        href="https://teamarv.github.io/Practicas_B/"
        target="_blank"
        rel="noopener noreferrer"
      >
          <h1>
          PRUEBA SALTO ENTRE REPOSITORIOS Y JAVASCRIPT...  :)
        </h1>
      </a>
            
        </div>
    )
}

export default Cover
