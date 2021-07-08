import React from 'react';
import Select from 'react-select';
import Logo from '../../assets/images/ScaleHunter(3).svg';
import SideMenu from '../../components/SideMenu';
import Data from '../../assets/data.json';
import '../../global.css';
import Footer from '../../components/Footer';
import GuitarChordFinder from '../../components/GuitarChordFinder';

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
export default class ChordFinder extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            instrument: "Guitar",
            tuning: ["E", "A", "D", "G", "B", "E"]
        }

        this.setInstrument = (e) => { this.setState({ instrument: e.value })};
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
                        <div className="select-chord-finder">
                            <label id="bold-label">Instrument:</label>
                            <Select id="instrument-chord-finder" defaultValue={Data.instruments[0]} styles={customStyles} options={Data.instruments} onChange={this.setInstrument}/>
                            <label>Click on the freatboard to find possible chords</label>
                        </div>
                    </div>
                </header>
                <GuitarChordFinder tuning={this.state.tuning} />
                <Footer />
            </main>
        )
    }
}