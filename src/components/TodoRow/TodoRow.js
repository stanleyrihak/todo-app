import React from 'react'
import xko from '../../AppImages/x.png'

const TodoRow = (props) => {
  const { state, id, changeState, children, deleteTodo } = props
  if (state === 'ongoing') {
    return (
      <div className={`todo-row todo-row--ongoing`}>
        <div onClick={() => changeState(id)} className={`todo-row__pipe todo-row__pipe--ongoing`}></div>
        <p className='todo-row__text'>{children}</p>
        <img className='todo-row__delete' src={xko} alt='' onClick={() => deleteTodo(id)} />
      </div>
    )
  } else {
    return (
      <div className={`todo-row todo-row--completed`}>
        <div onClick={() => changeState(id)} className={`todo-row__pipe todo-row__pipe--completed`}></div>
        <p className='todo-row__text'>
          <s>{children}</s>
        </p>
        <img className='todo-row__delete' src={xko} alt='' onClick={() => deleteTodo(id)} />
      </div>
    )
  }
}

export default TodoRow
