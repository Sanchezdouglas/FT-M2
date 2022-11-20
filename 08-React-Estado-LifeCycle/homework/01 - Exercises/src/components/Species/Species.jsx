import ParseOptions from 'eleventy-plugin-toc/src/ParseOptions'
import React from 'react'

export default function Species (props) {
  return (
    <div>
      <h2>Species</h2>
      {props.species.map((specie, idx) => (
        <button key={idx} onClick={props.handleSpecies} value={specie}>
          {specie}
        </button>
      ))}
      <button onClick={props.handleAllSpecies}>All Animals</button>

    </div>
  );
}
