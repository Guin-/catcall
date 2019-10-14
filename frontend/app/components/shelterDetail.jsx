import React from 'react'
import { Col } from 'react-bootstrap'
import email from '../../static/email.png'
import phone from '../../static/phone.png'
import address from '../../static/address.png'

class ShelterDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    return (
        <div className="div2 area">
          <div className="contact-container">
            <h2> Contact </h2>
            <p>{cat.contact.phone}</p>
            <p>{cat.contact.email}</p>
            <p>{cat.contact.address.address1}</p>
            <p>{cat.contact.address.address2}</p>
            <p>{cat.contact.address.city} {cat.contact.address.state} {cat.contact.address.postcode}</p>
          </div>
        </div>
    )
  }
}

export default ShelterDetail;
