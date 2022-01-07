import React from 'react'
import xko from '../../AppImages/x.png'

const TodoRow = (props) => {
  const { state, id, changeState, children, deleteTodo } = props
  return (
    <div className={`todo-row todo-row--${state}`}>
      <div onClick={() => changeState(id)} className={`todo-row__pipe todo-row__pipe--${state}`}></div>
      <p className="todo-row__text">{children}</p>
      <img className="todo-row__delete" src={xko} alt="" onClick={() => deleteTodo(id)} />
    </div>
  )
}

export default TodoRow
