import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell.js';

class Header extends Component {
    constructor(props) {
    super(props);
    }
    render() {
        const data = this.props.data;
        let resultTemplate = '';
        if (data) {
            resultTemplate =data.map(function(item, index) {
                return (                
                        <Cell key={'hc' + index} value={item} />
                    );
                });
               
} 
        return (
          <div className="Header">
            {resultTemplate}
          </div>
      );
    }
}

 Header.defaultProps={
    data:[]
};

Header.propTypes={
    data: PropTypes.array.isRequired
};

export default Header;