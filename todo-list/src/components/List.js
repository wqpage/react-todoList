import React from "react";
import './List.css'
class List extends React.Component {
    constructor(props) {
        super (props)
    }
    handleDelete(index) {
        this.props.deleteItem(index)
    }
    render() {
        return (
            <div className="list-content">
              <div>正在进行</div>
              <ul>
                {
                  this.props.list.map((item,index) => {
                    return <li className="todo-li" key={index}>
                      <input type="checkbox"></input>
                      {item}
                      <button className="delete-bt" onClick={this.handleDelete.bind(this,index)}>删除</button>
                    </li>
                  })
                }
              </ul>
          </div>
        )
    }
}
export default List