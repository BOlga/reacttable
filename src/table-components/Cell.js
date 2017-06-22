import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
    constructor(props) {
    super(props);
    }

    render() {
        const value = this.displayValue(this.props.value, this.props.type);

        return (
          <div className="Cell">
           {value}
          </div>          
      );
    }
}

Cell.prototype.displayValue = function displayValue(value, type){
    if(type==='bool'){
        return '';
    }
    if(type==='number'){
        return '';
    }
    return value.toString(); 
}


Cell.defaultProps={
    value: '',
    type: 'string'
};

Cell.propTypes={
    value:PropTypes.any.isRequired
};


export default Cell;