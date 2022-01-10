import { Component } from "react";
import './App.css';
import image from './assets/lotus-white.png'


class Header extends Component {
render() {
    return (
        <div>
    
     
        <div className="header"><h1 id="header">
        City Explorer</h1> <img src={image} alt="white-lotus" className="white-lotus"></img></div>
        </div>
           ) 
        }

    }


export default Header