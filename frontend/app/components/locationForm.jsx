import React from 'react'
import { FormControl, FormGroup, HelpBlock } from 'react-bootstrap'

class LocationForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onSubmit, onChange, value, validation } = this.props
    return (
      <div>
        <form onSubmit={onSubmit}>
          <FormGroup
            validationState={validation}
          >
            <FormControl
               type="text"
               bsSize="sm"
               value={value}
               placeholder="Enter your Zip Code"
               onChange={onChange}
            />
           {validation == 'error' ?
            <HelpBlock>Please enter a valid zip code</HelpBlock>
           : null }
          </FormGroup>
          <button type="submit" className="submit-button">Find A Cat</button>
        </form>
      </div>
    )
  }
}

export default LocationForm;
