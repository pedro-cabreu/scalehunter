import React from 'react';
import '../global.css';
import { motion } from 'framer-motion';

class Keys extends React.Component{


    isNoteInScale(note, sus = false){

        if(sus){
    
            return this.props.scale.includes(note) ? "#FD7014" : "#EEEEEE";
        }else{
    
            return this.props.scale.includes(note) ? "#FD7014" : "#393E46";
        }
    }

    componentDidUpdate(){

        // console.log(this.state);
    }

    render(){
        return(
            <motion.div className="mainKeys" animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -400}} transition={{duration: 0.4}}>
                <svg width="998" height="316" viewBox="0 0 998 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={this.isNoteInScale("C")} d="M2 308V8C2 4.68629 4.68629 2 8 2H67C70.3137 2 73 4.6863 73 8V308C73 311.314 70.3137 314 67 314H8C4.68629 314 2 311.314 2 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("D")} d="M73 308V8C73 4.68629 75.6863 2 79 2H138C141.314 2 144 4.6863 144 8V308C144 311.314 141.314 314 138 314H79C75.6863 314 73 311.314 73 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("E")} d="M144 308V8C144 4.68629 146.686 2 150 2H209C212.314 2 215 4.6863 215 8V308C215 311.314 212.314 314 209 314H150C146.686 314 144 311.314 144 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("F")} d="M215 308V8C215 4.68629 217.686 2 221 2H280C283.314 2 286 4.6863 286 8V308C286 311.314 283.314 314 280 314H221C217.686 314 215 311.314 215 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("G")} d="M286 308V8C286 4.68629 288.686 2 292 2H351C354.314 2 357 4.6863 357 8V308C357 311.314 354.314 314 351 314H292C288.686 314 286 311.314 286 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("A")} d="M357 308V8C357 4.68629 359.686 2 363 2H422C425.314 2 428 4.6863 428 8V308C428 311.314 425.314 314 422 314H363C359.686 314 357 311.314 357 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("B")} d="M428 308V8C428 4.68629 430.686 2 434 2H493C496.314 2 499 4.6863 499 8V308C499 311.314 496.314 314 493 314H434C430.686 314 428 311.314 428 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("C")} d="M499 308V8C499 4.68629 501.686 2 505 2H564C567.314 2 570 4.6863 570 8V308C570 311.314 567.314 314 564 314H505C501.686 314 499 311.314 499 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("D")} d="M570 308V8C570 4.68629 572.686 2 576 2H635C638.314 2 641 4.6863 641 8V308C641 311.314 638.314 314 635 314H576C572.686 314 570 311.314 570 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("E")} d="M641 308V8C641 4.68629 643.686 2 647 2H706C709.314 2 712 4.6863 712 8V308C712 311.314 709.314 314 706 314H647C643.686 314 641 311.314 641 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("F")} d="M712 308V8C712 4.68629 714.686 2 718 2H777C780.314 2 783 4.6863 783 8V308C783 311.314 780.314 314 777 314H718C714.686 314 712 311.314 712 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("G")} d="M783 308V8C783 4.68629 785.686 2 789 2H848C851.314 2 854 4.6863 854 8V308C854 311.314 851.314 314 848 314H789C785.686 314 783 311.314 783 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("A")} d="M854 308V8C854 4.68629 856.686 2 860 2H919C922.314 2 925 4.6863 925 8V308C925 311.314 922.314 314 919 314H860C856.686 314 854 311.314 854 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("B")} d="M925 308V8C925 4.68629 927.686 2 931 2H990C993.314 2 996 4.6863 996 8V308C996 311.314 993.314 314 990 314H931C927.686 314 925 311.314 925 308Z" stroke="#EEEEEE" strokeWidth="4"/>
                    <path fill={this.isNoteInScale("C#", true)} d="M51 179V0H94V179H51Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("C#", true)} d="M548 179V0H591V179H548Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("D#", true)} d="M619 179V0H662V179H619Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("A#", true)} d="M903 179V0H946V179H903Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("F#", true)} d="M761 179V0H804V179H761Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("G#", true)} d="M832 179V0H875V179H832Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("A#", true)} d="M410 179V0H453V179H410Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("G#", true)} d="M339 179V0H382V179H339Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("F#", true)} d="M264 179V0H307V179H264Z" stroke="#EEEEEE" strokeWidth="2"/>
                    <path fill={this.isNoteInScale("D#", true)} d="M122 179V0H165V179H122Z" stroke="#EEEEEE" strokeWidth="2"/>
                </svg>
            </motion.div>
        )
    }
}

export default Keys;