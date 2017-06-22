

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './table-components/Table.js';


const my_table ={ 
    columns:[{
        header:'Наименование',
        col:'title',
        type:'string'
    },
    {
        header:'Количество',
        col:'count',
        type:'number'
    }
    ],
    values: [   
 {
      ID: 'id1',
      title: 'Позиция 1',
      count: 1
  },
 {
     ID: 'id2',
     title: 'Позиция 2',
     count: 5
 },
 {
     ID: 'id3',
     title: 'Позиция 3',
     count: 6
 }
 ,
 {
     ID: 'id4',
     title: 'Позиция 4',
     count: 0
 }
 ,
 {
     ID: 'id5',
     title: 'Позиция 5',
     count: 6
 }
]};


class App extends Component {
    constructor(props){
       super(props);
        this.state = {
            tableCollumns:[],//my_table.columns,
            tableData:my_table.values,
        };
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
            <Table data={this.state.tableData} colls={this.state.tableCollumns}/>
          </div>
      </div>
    );
  }
}

export default App;
