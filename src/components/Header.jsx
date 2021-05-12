import React from 'react';
import Select from 'react-select'
import Logo from '../assets/images/logo.svg';
import Data from '../assets/data.json';

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
      padding: 10
    }),
    control: () => ({
      display: 'flex',
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
  
  
class Header extends React.Component{

    render(){
        return(
            <header>
                <div className="logo">
                    <img src={ Logo } alt="ScaleHunter" />
                </div>
                <div className="nav">
                    <div className="select-group">
                        <label>Instrument:</label>
                        <Select styles={customStyles} options={Data.instruments} />
                    </div>
                    <div className="select-group">
                        <label>Tuning:</label>
                        <Select styles={customStyles} options={Data.tunings} />
                    </div>
                    <div className="select-group">
                        <label>Root:</label>
                        <Select styles={customStyles} options={Data.roots} />
                    </div>
                    <div className="select-group">
                        <label>Scale:</label>
                        <Select styles={customStyles} options={Data.scales} />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;