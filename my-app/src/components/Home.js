import React,{Component} from "react";
const divStyle1 = {

    size : '40px',
    color :'rgb(0,255,128)',
  };
const divStyle2 = {

    padding: 50,
    color :'rgb(0,255,128)',
  
  };
export class Home extends Component {
    render(){
        return( 
        <>
        <div>
            <center><h1 style={divStyle1}>Choose a File</h1></center>
            <h3 style={divStyle2}>
                        A Website for Malware Detection and Prevention. Analyse suspicious files, domains, IPs and URLs to detect malware.website offers a user-friendly interface for scanning and analyzing files, IP addresses, and URLs for potential threats.
                        Leveraging advanced algorithms and databases, our platform provides accurate and real-time threat intelligence to users. We help individuals, small businesses, or large enterprises to cater to their cybersecurity needs effectively.
                </h3>
        </div>
        </>
        )
    }
}