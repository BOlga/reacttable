

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row.js';
import Header from './Header.js';
import './table.css';

class Table extends Component {
    constructor(props) {
    super(props);
    }

    render() {
        const data = this.props.data;
        const columns = this.props.colls;
        let resultTemplate = '';
        let headerTemplate = '';

        if(columns.length > 0){
            let cols = [];
            for(let i=0; i<columns.length;i++)
            {
                cols[i]=columns[i].header;
            }
            headerTemplate =  <Header data={cols}/> ;
        }        

    if (data.length > 0) {
            resultTemplate =
                data.map(function(item, index) {
                return (
                 <Row  key={item.ID} data={item}/>
                 )
                 });
            if(headerTemplate===''){
               let cols = Object.keys(data[0]);
               headerTemplate =  <Header data={cols}/> ;
            }
        } else {
            resultTemplate = <div className="Table_empty">(нет данных)</div>
        }
   
        return (
          <div className="Table">
            {headerTemplate}
            {resultTemplate}
          </div>
        );
    }
}

Table.defaultProps={
    data:[],
    colls:[]
};

Table.propTypes={
    data:PropTypes.array.isRequired,
    colls:PropTypes.array.isRequired,
};

//Table.prototype.createRowData = function createRowData(){
//        const data = this.props.data;
//        const columns = this.props.colls;
//    let result = [];
//    for(i=0; i<data.length;i++){
   
//    }
//}
//else{
//    data.map(function(item, index) {
//        result[index] = {
//            name:item.,
//            type:item.type,
//            value:oValue[item.col]
//        }
//    });
//}
//        return result;

//}

//Table.prototype.convertData = function convertData(oValue, columns){
//    let result = [];
//    columns.map(function(item, index) {
//        result[index] = {
//            name:item.col,
//            type:item.type,
//            value:oValue[item.col]
//        }
//    });
//    return result;
    
//}


export default Table;