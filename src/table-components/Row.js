'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell.js';

class Row extends Component {
    constructor(props) {
    super(props);
    }
    render() {
        const item = this.props.data;
        let resultTemplate = '';
        if (item) {
            resultTemplate = Object.keys(item).map(function(tkey, index) {
                return (                
                        <Cell key={item.ID + tkey } value={item[tkey]} />
                    );
                });
               
} 
        return (
          <div className="Row">
            {resultTemplate}
          </div>
      );
    }
}

Row.defaultProps={
    data:{
        title:'(нет)',
        count:0
    }
};

Row.propTypes={
    data: PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    }),
};

export default Row;