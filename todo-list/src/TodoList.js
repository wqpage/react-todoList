import React from 'react';
import Header from './components/Header';
import List from './components/List';
import './Todolist.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:['吃饭','学习react','打豆豆'],
      todoValue: ''
    }
  }
  addData(value) {
    this.setState({
      list: [...this.state.list,value]
    })
  }
  
  handleDelete(index) {
    let list = [...this.state.list];
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
  
  render(){
    return (
      <div className="container">
          <Header todoValue={this.state.todoValue} list={this.state.list} addData={this.addData.bind(this)}/>
          <List list={this.state.list} deleteItem={this.handleDelete.bind(this)}/>
      </div>
    )
  }
  
  
}


export default TodoList;
