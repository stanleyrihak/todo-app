import React, { useState } from 'react'

const CreateTodoRow = ({ handleSubmit }) => {
  const [currentInputValue, setCurrentInputValue] = useState('')

  let handleInputChange = (el) => {
    setCurrentInputValue(el.target.value)
  }

  return (
    <div className="todo-row todo-row--create">
      <form
        className="todo-row__form"
        action="submit"
        onSubmit={(e) => {
          handleSubmit(e, currentInputValue)
          setCurrentInputValue('')
        }}
      >
        <input
          className="todo-row__input"
          type="text"
          placeholder="Create a new todo..."
          value={currentInputValue}
          onChange={handleInputChange}
        />
        <div className="todo-row__submit">
          <input className="todo-row__submit--btn" type="submit" value="submit" />
        </div>
      </form>
    </div>
  )
}

export default CreateTodoRow
