import React from 'react'
import { Col } from 'react-bootstrap'

class ShelterDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    return (
        <Col lg={5} md={6}>
          <div className="detail-section">
            <div className="contact-container">
              <h2> Adopt {cat.name}</h2>
              <p>{cat.contact.phone}</p>
              <p>{cat.contact.email}</p>
              <p>{cat.contact.address.address1}</p>
              <p>{cat.contact.address.address2}</p>
              <p>{cat.contact.address.city} {cat.contact.address.state} {cat.contact.address.postcode}</p>
            </div>
          </div>
        </Col>
    )
  }
}

export default ShelterDetail;
