import React, { Component } from 'react'
import Person from './Person.js'

function NameList(){

    //const names = ['Diana', 'Bruce', 'Clark']
    
    const persons=[
        {
            id: 1,
            name: 'Bruce',
            age: 20,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Diana',
            age: 21,
            skill: 'C#'
        },
        {
            id: 3,
            name: 'Clark',
            age: 22,
            skill: 'React'

        }
    ]

        const personList = persons.map(person => (<Person person={person}/>))
        return (
            <div>{personList}</div>
        )
    
}

export default NameList
