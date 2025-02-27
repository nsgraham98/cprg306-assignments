"use client";
import React from "react";
import { useAtomValue } from 'jotai'
import { citiesAtom } from './atoms'

function CitiesComponent() {
  const cities = useAtomValue(citiesAtom)
  return (
    <div>
      Cities
      {cities.map((city) => (
        <div key={city}>{city}</div>
      ))}
    </div>
  );
}

export default CitiesComponent