import React from 'react';
import './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoValue: ''
        }
    }
    handleChange(event) {
        this.setState({
          todoValue: event.target.value
        })
    }
    handleKeyUp(e) {  
        if(e.keyCode === 13){
          this.handleBtnClick()
        }
    }
    handleBtnClick() {
        let value = this.state.todoValue
        if(value === '' || this.props.list.includes(value)){
            return
          }
        this.props.addData(value)
        this.setState({
            todoValue: ''
        })
    }
    render() {
        return (
            <div className="header-content">
              <h2>TodoList</h2>
              <div>
                <input placeholder="添加todo" value={this.state.todoValue} onChange={this.handleChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)}>
                
                </input>
                <button className="add-bt" onClick={this.handleBtnClick.bind(this)}>添加</button>
              </div>
          </div>
        )
    }
}
export default Header