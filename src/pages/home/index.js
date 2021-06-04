import React from 'react';
import Footer from '../../components/Footer';
import Keys from '../../components/Keys';
import '../../global.css';
import Select from 'react-select'
import Logo from '../../assets/images/ScaleHunter(3).svg';
import Data from '../../assets/data.json';
import { motion } from 'framer-motion';
import { Scale } from "@tonaljs/tonal";
import Guitar from '../../components/Guitar';
import SideMenu from '../../components/SideMenu';
import TextScale from '../../components/TextScale';
import Metronome from '../../components/Metronome';

const relatives = {
    "Gb": "F#",
    "Ab": "G#",
    "Bb": "A#",
    "Cb": "B",
    "Db": "C#",
    "Eb": "D#"
}

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? '#FD7014' : '#eeeeee',
        backgroundColor: state.isFocused ? '#222831' : '#393e46' ,
        fontWeight: 'regular',
        borderRadius: 6
    }),
    menu: (provided, state) => ({
        ...provided,
        borderRadius: 6,
        backgroundColor: '#393e46',
        padding: 10,
        zIndex: 100
    }),
    input: (provided, state) => ({
        ...provided,
        color: '#eeeeee'
    }),
    control: () => ({
        display: 'flex',
        padding: 5
    }),
    container: (provided, state) => ({
            ...provided,
            backgroundColor: '#393e46',
            borderRadius: 6,
            marginTop: 10
    }),
    singleValue: (provided, state) => {
        const opacity = 1;
        const transition = 'opacity 300ms';
  
        return { ...provided, opacity, transition, color: 'white', fontSize: '18px' };
    }
}

export default class Home extends React.Component{

    constructor(props){

        super(props)

        this.state = {
            scale: "minor",
            scaleArr: ["A"],
            instrument: "Guitar",
            root: "A",
            tuning: ["E", "A", "D", "G", "B", "E"],
            isGuitar: true,
        }

        this.setScale = (e) => { this.setState({ scale: e.value }, () => {this.handleScaleChange()});};
        this.setRoot = (e) => { this.setState({ root: e.value }, () => {this.handleScaleChange()});};
        this.setInstrument = (e) => { this.setState({ instrument: e.value }, () => {this.handleInstrumentChange()});};
        this.setTuning = (e) => { this.setState({ tuning: e.value }, () => {this.handleScaleChange()});};
    }

    handleScaleChange(){

        let query = this.state.root + " " +this.state.scale
        let result = Scale.get(query);
        let arrTemp = [];
        // console.log("array inicial: ", result.notes);

        result.notes.map((value, index) => {

            value.split("")[1] === "b" ? arrTemp[index] = relatives[value] : arrTemp[index] = value;

            if(arrTemp[index] === "B#") arrTemp[index] = "C";
            if(arrTemp[index] === "E#") arrTemp[index] = "F";

            return true;
        });

        // console.log("array final:", arrTemp)

        this.setState({

            scaleArr: arrTemp
        })
    }

    handleInstrumentChange(){

        switch(this.state.instrument){

            case "Guitar":
                return <Guitar tuning={this.state.tuning} scale={this.state.scaleArr}/>;

            case "Keys":
                return <Keys scale={this.state.scaleArr} />;

            case "Ukulele":
                return <h1 id="WIP">Work in progress.</h1>;

            case "Bass":
                return <h1 id="WIP">Work in progress.</h1>;

            case "Text":
                return <TextScale scale={this.state.scaleArr}/>

            default:
                return null;
        }
    }

    componentDidMount(){

        this.handleScaleChange()
    }

    render(){
        return(
            <main>
                <SideMenu />
                <header>
                    <div className="logo">
                        <img src={ Logo } alt="ScaleHunter" />
                    </div>
                    <div className="nav">
                        <motion.div className="select-group" animate={{ opacity: 1 }} initial={{ opacity: 0}} transition={{duration: 0.4}}>
                            <label>Instrument:</label>
                            <Select id="instrument" defaultValue={Data.instruments[0]} styles={customStyles} options={Data.instruments} onChange={this.setInstrument}/>
                        </motion.div>
                        {this.state.instrument === "Guitar" ?
                            <motion.div className="select-group" animate={{ opacity: 1 }} initial={{ opacity: 0}} transition={{duration: 0.4}}>
                                <label>Tuning:</label>
                                <Select id="tuning" defaultValue={Data.tunings[0]} styles={customStyles} options={Data.tunings} onChange={this.setTuning}/>
                            </motion.div> : null
                        }
                        <motion.div className="select-group" animate={{ opacity: 1 }} initial={{ opacity: 0}} transition={{duration: 0.4}}>
                            <label>Root:</label>
                            <Select id="root" defaultValue={Data.roots[0]} styles={customStyles} options={Data.roots} onChange={this.setRoot}/>
                        </motion.div>
                        <motion.div className="select-group" animate={{ opacity: 1 }} initial={{ opacity: 0}} transition={{duration: 0.4}}>
                            <label>Scale:</label>
                            <Select id="scale" defaultValue={Data.scales[1]} styles={customStyles} options={Data.scales} onChange={this.setScale}/>
                        </motion.div>
                    </div>
                </header>
                {
                    this.handleInstrumentChange()
                }
                <Footer />
                <Metronome />
            </main>
        );
    }   
}