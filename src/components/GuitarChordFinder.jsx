import React from 'react';
import '../global.css';
import Data from '../assets/data.json';
import { motion } from 'framer-motion';
import Fingerboard from '../assets/instruments/GuitarFingerboard.svg';
import { Chord } from "@tonaljs/tonal";

export default class GuitarChordFinder extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            notesArr: [],
            chordName: ["N"]
        }
    }

    assertArrayIndex(index){
        
        if(index > 11){

            return index - 12;
        }else{

            return index;
        }
    }

    handleClick(e){

        e.target.style.fill === "rgb(253, 112, 20)" ? e.target.style.fill = "#393E46" : e.target.style.fill = "#FD7014";
    
        let checkNote = this.state.notesArr.indexOf(e.target.attributes.note.value)
        
        if(checkNote >= 0) this.state.notesArr.splice(checkNote, 1)

        this.state.notesArr.push(e.target.attributes.note.value);

        this.setState({
            chordName: Chord.detect(this.state.notesArr)
        })
    }

    handleOpenNote(e){

        e.target.style.color === "rgb(253, 112, 20)" ? e.target.style.color = "#EEEEEE" : e.target.style.color = "#FD7014";

        let checkNote = this.state.notesArr.indexOf(e.target.attributes.note.value)
        
        if(checkNote >= 0) this.state.notesArr.splice(checkNote, 1)

        this.state.notesArr.push(e.target.attributes.note.value);

        this.setState({
            chordName: Chord.detect(this.state.notesArr)
        })

        console.log(this.state.notesArr)
    }

    render(){

        return(
            <motion.div className="guitarWrapperChordFinder" animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -400 }} transition={{ duration: 0.4 }}>
                <div className="fretboardWrapper">
                    <div className="tuningLabel" style={{ marginTop: "7vh" }}>
                        {
                            this.props.tuning.slice(0).reverse().map((element) => (<h1 note={ element } onClick={ this.handleOpenNote.bind(this) }>{element}</h1>))
                        }
                    </div>
                    <div className="mainGuitarChordFinder">
                        <img src={ Fingerboard } alt="" />
                        <svg id="fingerboardScale" className="fingerboardNotes" width="812" height="236" viewBox="0 0 812 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 1)].value } x="0.834961" y="193.107" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 2)].value } x="66.265" y="194.552" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 3)].value } x="131.695" y="195.997" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 4)].value } x="197.126" y="197.443" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 5)].value } x="262.556" y="198.888" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 6)].value } x="327.986" y="200.333" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 7)].value } x="393.416" y="201.778" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 8)].value } x="458.846" y="203.224" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 9)].value } x="524.276" y="204.669" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 10)].value } x="589.706" y="206.114" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 11)].value } x="655.136" y="207.56" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 12)].value } x="720.566" y="209.005" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 13)].value } x="785.996" y="210.451" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[1]) + 1)].value } x="0.965149" y="159.251" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[1]) + 2)].value } x="66.3735" y="160.185" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[1]) + 3)].value } x="131.782" y="161.118" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[1]) + 4)].value } x="197.191" y="162.052" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 5)].value } x="262.599" y="162.985" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 6)].value } x="328.008" y="163.918" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 7)].value } x="393.416" y="164.852" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 8)].value } x="458.824" y="165.785" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 9)].value } x="524.232" y="166.719" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 10)].value } x="589.641" y="167.652" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 11)].value } x="655.049" y="168.586" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 12)].value } x="720.458" y="169.519" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 13)].value } x="785.866" y="170.452" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 1)].value } x="0.834961" y="123.863" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 2)].value } x="66.2729" y="124.373" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 3)].value } x="131.711" y="124.882" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 4)].value } x="197.149" y="125.392" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 5)].value } x="262.587" y="125.901" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 6)].value } x="328.025" y="126.411" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 7)].value } x="393.463" y="126.921" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 8)].value } x="458.901" y="127.43" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 9)].value } x="524.339" y="127.94" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 10)].value } x="589.777" y="128.449" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 11)].value } x="655.215" y="128.959" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 12)].value } x="720.653" y="129.468" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 13)].value } x="786.091" y="129.978" width="25" height="25" rx="7"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 1)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 0.835083 112.329)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 2)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 66.2731 111.82)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 3)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 131.711 111.31)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 4)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 197.149 110.801)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 5)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 262.587 110.291)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 6)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 328.025 109.781)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 7)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 393.463 109.272)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 8)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 458.901 108.762)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 9)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 524.339 108.253)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 10)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 589.777 107.743)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 11)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 655.215 107.234)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 12)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 720.653 106.724)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 13)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 786.091 106.214)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 1)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 0.965271 76.941)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 2)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 66.3737 76.0076)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 3)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 131.782 75.0741)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 4)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 197.191 74.1407)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 5)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 262.599 73.2073)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 6)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 328.008 72.2738)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 7)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 393.416 71.3405)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 8)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 458.824 70.407)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 9)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 524.233 69.4735)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 10)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 589.641 68.5402)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 11)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 655.049 67.6067)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 12)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 720.458 66.6733)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 13)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 785.866 65.7399)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 1)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 0.835083 43.0857)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 2)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 66.2651 41.6404)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 3)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 131.695 40.1951)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 4)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 197.126 38.7498)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 5)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 262.556 37.3044)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 6)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 327.986 35.8591)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 7)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 393.416 34.4138)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 8)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 458.846 32.9685)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 9)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 524.276 31.5232)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 10)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 589.706 30.0779)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 11)].value } width="25" height="25" rx="7" transform="matrix(1 0 0 -1 655.136 28.6326)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 12)].value } width="25" height="250" rx="7" transform="matrix(1 0 0 -1 720.566 27.187)"/>
                            <rect onClick={ this.handleClick.bind(this) } note={ Data.roots[this.assertArrayIndex(Data.roots.findIndex(element => element.value === this.props.tuning[0]) + 13)].value } fill="red" width="205" height="25" rx="7" transform="matrix(1 0 0 -1 785.996 25.7417)"/>
                        </svg>
                    </div>
                </div>
                <label className="chordName">{ this.state.chordName.map((element, index) => index === 0 ? (<label> {element} </label>) : (<label>| {element} </label>)) } </label>
            </motion.div>
        )
    }
}