import React from 'react';
import Select from 'react-select';
import Logo from '../../assets/images/ScaleHunter(3).svg';
import SideMenu from '../../components/SideMenu';
import Data from '../../assets/data.json';
import '../../global.css';
import { customStyles } from '../../components/SelectStyle';
import Footer from '../../components/Footer';

export default class ChordFinder extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            instrument: "Guitar"
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
                <h1 id="WIP">Work in progress.</h1>
                <Footer />
            </main>
        )
    }
}