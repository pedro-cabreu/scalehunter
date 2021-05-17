import React from 'react';
import { BiHeart } from 'react-icons/bi'

class Footer extends React.Component{

    handleClick(){

        window.location.href = "https://github.com/pedro-cabreu";
    }

    render(){
        return(
            <footer>
                <label onClick={() => this.handleClick()}>Coded with <BiHeart/> by Pedro Abreu</label>
            </footer>
        );
    }
}

export default Footer;