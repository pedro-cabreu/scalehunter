import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { CgPiano } from 'react-icons/cg';
import { GiArchiveResearch } from 'react-icons/gi';
import { IoMdDownload, IoMdInformationCircle } from 'react-icons/io';
import { IoMusicalNote } from 'react-icons/io5';
import '../global.css';

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      color: '#eeeeee',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: 0,
      left:0,
      height: '100%',
      width: '228px'
    },
    bmMenu: {
      background: '#222831',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden'
    },
    bmMorphShape: {
      fill: '#393E46'
    },
    bmItemList: {
      color: '#b8b7ad',
    },
    bmItem: {
      display: 'flex',
      // flexDirection: "column",
      alignItems: "center",
      color: "#EEEEEE",
      textDecoration: "none",
      fontWeight: "600",
      marginTop: '7px',
      borderRadius: '6px',
      padding: '10px'
    },
    bmOverlay: {
        top: 0,
        left: 0
    }
}
  

export default class SideMenu extends React.Component {
  
  render () {

    return (
      <Menu styles={ styles }>
        <Link className="menu-item" to="/"><IoMusicalNote className="menu-icon"/> Scales</Link>
        <Link className="menu-item" to="/chords"><CgPiano className="menu-icon"/> Chords</Link>
        <Link className="menu-item" to="/chordfinder"><GiArchiveResearch className="menu-icon"/> Chord Finder</Link>
        <Link className="menu-item" to="/download"><IoMdDownload className="menu-icon"/> Download</Link>
        <Link className="menu-item" to="/about"><IoMdInformationCircle className="menu-icon"/> About</Link>
      </Menu>
    );
  }
}