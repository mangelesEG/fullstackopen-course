

const Header = (props) => {
  console.log(props)
  return (
      <h1>
        {props.course.name}
      </h1>
  )
}
const Content  = (props) => {
  console.log('Componente Content')
  console.log(props.parts[0])
  console.log(props.parts[1])
  console.log(props.parts[2])
  return (  <div>
    
        <Part data={props.parts[0]}/>
        <Part data={props.parts[1]}/>
        <Part data={props.parts[2]}/>
      </div>
  )
}

const Part = (props) => {
  
  console.log('Componente Part')
  console.log(props)
  console.log(props.data.name)
  return (
    <>
      <p>
         {props.data.name} {props.data.exercises}
      </p></>
  )
}
const Total = (props) => {
  console.log(props)
  const total = props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercise;
  return (
    <><hr></hr>
      <p>Number of exercises {props.parts[0].exercises}</p></>
  )
}

const App = () => {
  
  const course ={
    name: 'Half Stack application development',
   parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]}

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App