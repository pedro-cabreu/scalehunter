import React from 'react';

import { GiMetronome } from 'react-icons/gi';
import Metronome from '@kevinorriss/react-metronome'
import { motion } from 'framer-motion';

export default class MetronomeModal extends React.Component{


    constructor(props){

        super(props);

        this.state = {

            toggleModal: false
        }

        this.toggleModal = () => { this.state.toggleModal ? this.setState({ toggleModal: false }) : this.setState({ toggleModal: true })}

    }

    render(){
 
        return(

            <div className="metronomeWrapper">
                <div className="metronomeButton">
                    <motion.button onClick={ this.toggleModal } whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}><GiMetronome /></motion.button>
                </div>
                {
                this.state.toggleModal ? 
                    <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="metronomeModal">
                        <Metronome bpmStyle={{ color: '#EEEEEE' }} railStyle={{  }} playPauseStyle={{ backgroundColor: '#FD7014' }} plusStyle={{ color: '#EEEEEE', backgroundColor: '#222831' }} minusStyle={{ color: '#EEEEEE', backgroundColor: '#222831' }} />
                    </motion.div> 
                    : null
                }
            </div>
        );
    }
}