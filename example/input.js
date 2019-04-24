import React from 'react'

const data = { value: 'hi '}

const Component = ({value}) => (
  <div>
    <p> some content </p>
    <p> some {value} </p>
  </div>
)

const App = () => <Component {...data}/>

export default App