const LearningFetch = () => {
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

  return (
    <>
      {dictData.map((e) => {
        return (
          <p style={{ color: 'white' }}>
            {e.name} is {e.age} years old.
          </p>
        )
      })}
    </>
  )
}

export default LearningFetch
