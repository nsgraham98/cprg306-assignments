"use client";
import React from "react";
import { useSetAtom } from 'jotai'
import { citiesAtom } from './atoms'

function AddNewCityComponent() {
  const setCities = useSetAtom(citiesAtom)
  const [value, setValue] = React.useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    setCities((cities) => ([...cities, value]))
  }
 
  return (
    <div>
      Enter City
      <form onSubmit={onSubmit}>
        <input style={{color: 'black'}} value={value} type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddNewCityComponent
