import React,{Component} from "react";

const footerStyle = {
    backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  
  };
  
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

export class Footer extends Component {
    render(){
        return( 
        <>
                <footer style={footerStyle}>
                    <ul style={listStyle}>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <p>Secure Sight inc.</p>
                </footer>
        </>
        )
    }
}