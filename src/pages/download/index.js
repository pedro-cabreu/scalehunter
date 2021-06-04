import React from 'react';
import SideMenu from '../../components/SideMenu';
import Logo from '../../assets/images/ScaleHunter(3).svg';
import Footer from '../../components/Footer';
import { SiWindows, SiLinux, SiApple} from 'react-icons/si';
import { motion } from 'framer-motion';

export default class Download extends React.Component{


    render(){

        return(
            <main>
                <SideMenu />
                <header>
                    <div className="logo">
                        <img src={ Logo } alt="ScaleHunter" />
                    </div>                    
                    <div className="nav">
                        <div className="downloadText">
                            <label id="bold-label">Scalehunter will be available for download soon</label>
                        </div>
                    </div>
                </header>
                <div className="downloadWrapper">
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><SiWindows/> Windows</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><SiLinux/> Linux</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><SiApple/> MacOS</motion.button>
                </div>
                <Footer />
            </main>
        );
    }
}