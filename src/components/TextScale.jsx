import React from 'react';

export default class TextScale extends React.Component{


    render(){

        return (
            <div className="textScale">
                {
                    this.props.scale.map(note => (

                        <h1>{note}</h1>
                    ))
                }
            </div>
        );
    }
}