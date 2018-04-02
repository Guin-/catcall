import React from 'react'
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'

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
            <FormControl.Feedback />
          </FormGroup>
          <Button type="submit">Find A Cat</Button>
        </form>
      </div>
    )
  }
}

export default LocationForm;
