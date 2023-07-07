import React, { useState, useEffect } from 'react'
import TodoRow from '../TodoRow/TodoRow'
import CreateTodoRow from '../CreateTodoRow/CreateTodoRow'
import { db } from '../../firebase'
import { getDocs, updateDoc, addDoc, doc, deleteDoc, collection } from 'firebase/firestore'

const Main = () => {
  const [todos, setTodos] = useState([])
  const todosCollection = collection(db, 'todos')

  const getTodos = async () => {
    const data = await getDocs(todosCollection)
    setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    getTodos()
  }, [])

  // ! mení state riadku
  const changeState = (id) => {
    console.log(id)
    const todo = todos.find((el) => el.id === id)
    const todoDoc = doc(db, 'todos', id)
    let newState
    if (todo.state === 'completed') {
      newState = 'ongoing'
    } else if (todo.state === 'ongoing') {
      newState = 'completed'
    }
    updateDoc(todoDoc, { state: newState })
    setTodos([...todos.filter((el) => el.id !== id), { ...todo, state: newState }])
  }
  //  !mení state riadku
  const deleteTodo = (id) => {
    const todoDoc = doc(db, 'todos', id)
    deleteDoc(todoDoc)
    setTodos([...todos.filter((el) => el.id !== id)])
  }

  const handleSubmit = async (e, value) => {
    e.preventDefault()

    let biggestId = 0
    todos.forEach((todo) => {
      if (biggestId < todo.id) {
        biggestId = todo.id
      }
    })
    await addDoc(todosCollection, {
      title: value,
      state: 'ongoing',
    })
    getTodos()
    return true
  }

  return (
    <div className='app__wrapper-flex'>
      <span className='heading'>To do list</span>
      <div className='todo'>
        <div className='todo__type-in'>
          <CreateTodoRow handleSubmit={handleSubmit}></CreateTodoRow>
        </div>
        {todos.length > 0 ? (
          <div className='todo__checkboxes'>
            {todos
              .filter((todo) => {
                return todo.state === 'ongoing'
              })
              .map((todo) => (
                <TodoRow
                  key={todo.id}
                  state={todo.state}
                  changeState={changeState}
                  deleteTodo={deleteTodo}
                  id={todo.id}>
                  {todo.title}
                </TodoRow>
              ))}
            {todos
              .filter((todo) => {
                return todo.state === 'completed'
              })
              .map((todo) => (
                <TodoRow
                  key={todo.id}
                  state={todo.state}
                  changeState={changeState}
                  deleteTodo={deleteTodo}
                  id={todo.id}>
                  {todo.title}
                </TodoRow>
              ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Main
