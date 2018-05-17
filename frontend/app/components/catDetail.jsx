import React from 'react'
import { Col } from 'react-bootstrap'

class CatDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    return (
      <Col xs={12} xsOffset={0} smOffset={1} mdOffset={1} lg={6} lgOffset={0}>
        <div className="cat-detail-container">
          <h1> Meet { cat.name }</h1>
          <p> { cat.description ? cat.description : "Please use the given contact information to find out more about me!" }</p>
        </div>
      </Col>
    )
  }
}

export default CatDetail;
