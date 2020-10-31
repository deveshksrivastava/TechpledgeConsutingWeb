import React from 'react'


const Child =(props: {Name:string}) =>(
<div>{props.Name}</div>
)
   


export default function ParentChild() {
    return (
        <div>
            <Child Name="Devesh Kumar Srivastav" />
        </div>
    )
}
