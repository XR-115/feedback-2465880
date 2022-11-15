import React, { Fragment } from 'react'

const App = () => {

    const bootcamps = [
        {
            id:1 , 
            name: 'Ciberseguridad bootcamp',
            average_rating: 8
        },
        {
            id:2 , 
            name: 'Python bootcamp',
            average_rating: 9
        }
    ]

  return (
    <>
       
        <h1>Listado de Bootcamps: </h1>
            <ul>
                { bootcamps.map((bootcamp, index) =>(
                    <li key={index}> {bootcamp.name} </li>
                )) 
                }
            </ul>
            <ul>

            </ul>
    </>
  )
}

export default App
