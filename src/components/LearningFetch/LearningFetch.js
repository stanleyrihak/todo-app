import React, { useState, useEffect } from 'react'

const LearningFetch = () => {
  const [data, setData] = useState(null)
  const dictData = [
    {
      name: 'Markus',
      age: '15',
    },
    {
      name: 'Lukáš',
      age: '2',
    },
    {
      name: 'Tomáš',
      age: '45',
    },
    {
      name: 'Anciáš',
      age: '23',
    },
  ]
  const fetchFunc = async () => {
    const dictDataFromAPI = await fetch('http://myjson.dit.upm.es/api/bins/g6l3').then((response) => response.json())
    setData(dictDataFromAPI)
  }
  useEffect(() => {
    fetchFunc()
  }, [])

  return (
    <>
      {data &&
        data.map((e) => {
          return (
            <p key={e.name} style={{ color: 'white' }}>
              {e.name} is {e.age} years old.
            </p>
          )
        })}
    </>
  )
}

export default LearningFetch
