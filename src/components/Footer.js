import React from 'react';
import '../style/index.css';

function Footer(props) {
    return(
        <div className="footer">
            <h4>{props.text}</h4>            
        </div>        
    );
}

export default Footer;
