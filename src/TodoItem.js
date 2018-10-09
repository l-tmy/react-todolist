import React from 'react'

class TodoItem extends React.Component{
  handleDelete() {
    console.log(this.props.index);
    this.props.handleDelete(this.props.index)
  }
  render() {
    const {content} = this.props;
    return (
      <div onClick={this.handleDelete.bind(this)}>{content}</div>
    )
  }
}

export default TodoItem;