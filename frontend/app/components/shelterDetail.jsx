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
              <h2 className="contact-heading"> Adopt {cat.name}</h2>
              <div className="contact-details">
              { cat.contact.phone ?
              <p>{cat.contact.phone}</p> : null
              }
              { cat.contact.email ?
              <p>{cat.contact.email}</p> : null
              }
              {cat.contact.address.address1 ?
              <p>{cat.contact.address.address1}</p> : null
              }
              { cat.contact.address.address2 ?
              <p>{cat.contact.address.address2}</p> : null
              }
              <p>{cat.contact.address.city} {cat.contact.address.state} {cat.contact.address.postcode}</p>
              </div>
            </div>
          </div>
        </Col>
    )
  }
}

export default ShelterDetail;
