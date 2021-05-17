import React from 'react';
import Footer from '../../components/Footer';
import Keys from '../../components/Keys';
import '../../global.css';
import Select from 'react-select'
import Logo from '../../assets/images/logo.svg';
import Data from '../../assets/data.json';
import { Scale } from "@tonaljs/tonal";
import Guitar from '../../components/Guitar';

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

const relatives = {
    "Gb": "F#",
    "Ab": "G#",
    "Bb": "A#",
    "Cb": "B",
    "Db": "C#",
    "Eb": "D#"
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
        console.log(query)
        let result = Scale.get(query);
        let arrTemp = [];
        console.log("array inicial: ", result.notes);

        result.notes.map((value, index) => {

            value.split("")[1] === "b" ? arrTemp[index] = relatives[value] : arrTemp[index] = value;

            if(arrTemp[index] === "B#") arrTemp[index] = "C";
            if(arrTemp[index] === "E#") arrTemp[index] = "F";

            return true;
        });

        console.log("array final:", arrTemp)

        this.setState({

            scaleArr: arrTemp
        })
    }

    handleInstrumentChange(){

        switch(this.state.instrument){

            case "Guitar":
                return <Guitar tuning={this.state.tuning} scale={this.state.scaleArr}/>;

            case "Keys":
                return <Keys scale={this.state.scaleArr}/>;

            case "Ukulele":
                return <h1 id="WIP">Work in progress.</h1>;

            case "Bass":
                return <h1 id="WIP">Work in progress.</h1>;

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
                <header>
                    <div className="logo">
                        <img src={ Logo } alt="ScaleHunter" />
                    </div>
                    <div className="nav">
                        <div className="select-group">
                            <label>Instrument:</label>
                            <Select id="instrument" defaultValue={Data.instruments[0]} styles={customStyles} options={Data.instruments} onChange={this.setInstrument}/>
                        </div>
                        {this.state.instrument === "Guitar" ?
                            <div className="select-group">
                                <label>Tuning:</label>
                                <Select id="tuning" defaultValue={Data.tunings[0]} styles={customStyles} options={Data.tunings} onChange={this.setTuning}/>
                            </div> : null
                        }
                        <div className="select-group">
                            <label>Root:</label>
                            <Select id="root" defaultValue={Data.roots[0]} styles={customStyles} options={Data.roots} onChange={this.setRoot}/>
                        </div>
                        <div className="select-group">
                            <label>Scale:</label>
                            <Select id="scale" defaultValue={Data.scales[1]} styles={customStyles} options={Data.scales} onChange={this.setScale}/>
                        </div>
                </div>
                </header>
                {
                    this.handleInstrumentChange()
                }
                <Footer />
            </main>
        );
    }   
}