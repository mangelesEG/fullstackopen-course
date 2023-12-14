import React from 'react'

const Course=({course})=>{
    return <>
    <div>
        <Header title={course.name} />
        <Content data={course.parts} />
    </div>
    </>
}

const Header=({title})=>{
return <h1> {title}</h1>
}

const Content=({data}) => {
return <>
    <ul>
       {data.map(part => (
       <Part key={part.id} content={part}></Part>
       ))}
    </ul>
    <strong>Total of exercise {data.map(x=>x.exercises).reduce((acc,num)=>acc+num)}</strong>
</>
}
const Part=({content})=>{
    console.log(content.exercise);
    return <>
    <li>{content.name} - {content.exercises}</li>
    </>
}

export default Course