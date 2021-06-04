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

module.exports = { customStyles }