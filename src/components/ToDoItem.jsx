import React from "react";
import { connect } from "react-redux";
import { updateToDoText, toggleToDone, removeToDo } from "../actions/index";


class ToDoItem extends React.Component {
  handleInputKeyUp(event) {
    if (event.keyCode === 13) {
      event.target.blur();
    }
  }

  render() {
    const todo = this.props.data;
    console.log(todo);

    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={(event) => this.props.toggleToDone(todo.uuid)}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className="form-control"
            value={todo.text}
            onChange={event => {
              this.props.updateToDoText(todo.uuid, event.target.value);
            }}
            onKeyUp={event => {
              this.handleInputKeyUp(event);
            }}
          />
        </td>
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={event => this.props.removeToDo(todo.uuid, console.log(event))}
          />
        </td>
      </tr>
    );
  }
}
/*
class ToDoItem extends React.Component {
  handleInputKeyUp(e) {
    // Remove focus, when the [Enter] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }

  render() {
    const todo = this.props.data;

    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              defaultValue={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={this.props.toggleToDoDone}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className="form-control"
            defaultValue={todo.text}
            onChange={e => {
              this.props.updateToDoText(todo.uuid, e.target.value);
            }}
            onKeyUp={e => {
              this.handleInputKeyUp(e);
            }}
          />
        </td>
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={e => this.props.removeToDo(todo.uuid)}
          />
        </td>
      </tr>
    );
  }
}

export default ToDoItem;
*/

export default connect(state => (console.log(state),{}), {
  updateToDoText,
  toggleToDone,
  removeToDo
})(ToDoItem);
