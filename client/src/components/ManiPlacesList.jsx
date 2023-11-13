import React from 'react';
import './ManiPlacesList.css'

export default function ManiPlacesList(props) {
  return (
    <div className='ManiPlacesList'>
      <ul>
        {
          props.students.map(s => (
            <li key={s.id}>
            </li>
          ))

        }
      </ul>
    </div>
  )
}