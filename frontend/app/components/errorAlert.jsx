import React from 'react'
import { connect } from 'react-redux'
import { Alert, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { clearError } from '../actions/clearError'
import error from '../../static/error.png'

class ErrorAlert extends React.Component {
  constructor(props) {
    super(props)
  }

  handleDismiss() {
    this.props.clearError()
  }

  render() {
    return (
        <div className="view error-view">
          <Alert bsStyle="warning" onDismiss={this.handleDismiss.bind(this)}>
            <div className="icon-image-container">
              <img src={error} alt="error"/>
            </div>
            <div className="icon-item-data">
              <h1>Something went wrong!</h1>
              <h2>{this.props.errorMessage.message}</h2>
              <LinkContainer to="/">
                <Button onClick={this.handleDismiss.bind(this)} bsStyle="info">
                  Go Back Home
                </Button>
              </LinkContainer>
            </div>
          </Alert>
        </div>
    )
  }
}

const mapDispatchToProps = {
    clearError
  }

export default connect(null, mapDispatchToProps)(ErrorAlert);
