import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="Widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>

            <div className="widgets__articleRight"><h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>
            
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <Info />
            </div>
            {newsArticle("Pranjal Agrawal React Developer","Top News -9099 readers")}
            {newsArticle("Coronavirus : Raipur Update","Top News -886 readers")}
            {newsArticle("Tesla hits new hights","Cars and auto -300 readers")}
            {newsArticle("Bitcon breaks $22k","Crypto -8000 readers")}
            {newsArticle("Is Redux too good?","Code-123 readers")}
            {newsArticle("Ev Digital launches its new Branch?!","Top news -6503 readers")}
        </div>
    )
}

export default Widgets
