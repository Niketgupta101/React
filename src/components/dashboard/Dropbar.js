import React from 'react'

const Dropbar = (props) => {
    return (
        <div class="accordion-item">
    <h2 class="accordion-header" id={props.number}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={props.databstarget} aria-expanded="true" aria-controls={props.id}>
        {props.title}
      </button>
    </h2>
    <div id={props.id} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        hi
      </div>
    </div>
  </div>
    )
}

export default Dropbar
