import React from 'react'
import { connect } from 'react-redux'
import { Alert, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { clearError } from '../actions/clearError'

class ErrorAlert extends React.Component {
  constructor(props) {
    super(props)
  }

  handleDismiss() {
    this.props.clearError()
  }

  render() {
    return (
        <div className="view error">
          <Alert bsStyle="danger" onDismiss={this.handleDismiss.bind(this)}>
            <h1> Something went wrong! </h1>
            <h2> {this.props.errorMessage.message}</h2>
            <LinkContainer to="/">
              <Button onClick={this.handleDismiss.bind(this)} bsStyle="danger">Go Back Home</Button>
            </LinkContainer>
          </Alert>
        </div>
    )
  }
}

const mapDispatchToProps = {
    clearError
  }

export default connect(null, mapDispatchToProps)(ErrorAlert);
