

const Header = (props) => {
  console.log(props)
  return (
      <h1>
        {props.course}
      </h1>
  )
}
const Content  = (props) => {
  console.log('Componente Content2')
  console.log(props.name[0])
  console.log(props.name[1])
  console.log(props.name[2])
  return (  <div>
    
        <Part data={props.name[0]}/>
        <Part data={props.name[1]}/>
        <Part data={props.name[2]}/>
      </div>
  )
}

const Part = (props) => {
  
  console.log('Componente Part')
  console.log(props)
  console.log(props.data.part)
  return (
    <>
      <p>
         {props.data.part} {props.data.exercise}
      </p></>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <><hr></hr>
      <p>Number of exercises {props.num}</p></>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  const data=[{part:part1,exercise:exercises1},{part:part2,exercise:exercises2},{part:part3,exercise:exercises3}]

  return (
    <div>
      <Header course={course}/>
      <Content name={data}/>
      <Total num={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App