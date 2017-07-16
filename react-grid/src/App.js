import React, { Component } from 'react';
import Grid from './grid/Grid';
import logo from './logo.svg';
import './App.css';
const gridData = {
  columnData:[{
    name:"header 1",
    id:"header1",
    width:200,
    resize:true,
    draggable: true
  },{
    name:"header 2",
    id:"header2",
    width:200,
    resize:true,
    draggable: true

  },{
    name:"header 3",
    id:"header3",
    width:200,
    resize:true,
    draggable: true
  },{
    name:"header 4",
    id:"header4",
    width:200,
    resize:true,
    draggable: true
  },{
    name:"header 5",
    id:"header5",
    width:200,
    resize:true,
    draggable: true
  },{
    name:"header 5",
    id:"header5",
    width:200,
    resize:true,
    draggable: true
  },{
    name:"header 5",
    id:"header5",
    width:200,
    resize:true,
    draggable: true
  },{
    name:"header 6",
    id:"header6",
    width:300,
    resize:true,
    draggable: true
  },{
    name:"header 7",
    id:"header7",
    width:300,
    resize:true,
    draggable: true
  },{
    name:"header 8",
    id:"header8",
    width:200,
    resize:true,
    draggable: true
  }],
  tableData:[{
    header1:"hello1",
    header2:"hello2",
    header3:"hello3",
    header4:"hello4",
    header5:"hello5",
    header6:"hello6",
    header7:"hello7",
    header8:"hello8"
  },
  {
    header1:"hello1",
    header2:"hello2",
    header3:"hello3",
    header4:"hello4",
    header5:"hello5",
    header6:"hello6",
    header7:"hello7",
    header8:"hello8"
  },
  {
    header1:"hello1",
    header2:"hello2",
    header3:"hello3",
    header4:"hello4",
    header5:"hello5",
    header6:"hello6",
    header7:"hello7",
    header8:"hello8"
    }]
}
class App extends Component {
  constructor(props){
    super(props);
    this.onResize = this.onResize.bind(this);
    this.columnReOrder = this.columnReOrder.bind(this);
    this.onRowClick = this.onRowClick.bind(this);

  }
  onResize(column, width){
    console.log(column.name+ ""+ width);
  }
  columnReOrder(source, target){
    console.log(source+ " "+target);
  }
  onRowClick(row, id){
    console.log(row);
    console.log('selectedrow'+id);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Grid 
          draggable = {"true"}
          columns={gridData.columnData} 
          rows={gridData.tableData}
          onResize={this.onResize}
          onDragEnd={this.columnReOrder}
          onRowClick={this.onRowClick}
          rowHeight="40"
          />
        </div>
      </div>
    );
  }
}

export default App;
