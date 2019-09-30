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
      <Col xs={12} xsOffset={0} smOffset={1} mdOffset={1} lg={6} lgOffset={0}>
        <div className="cat-detail-container">
          <h1 className="cat-detail-header">Contact</h1>
            <div className="icon-item">
              <img className="icon-image" src={email} alt="email"/>
              <span className="icon-item-data">{cat.contact ? cat.contact['email'] : 'N/A'}</span>
            </div>
            <div className="icon-item">
              <img className="icon-image" src={phone} alt="phone"/>
              <span className="icon-item-data">{cat.contact['phone'] || 'N/A'}</span>
            </div>
            <div className="icon-item">
              <img className="icon-image" src={address} alt="address"/>
              <div className="icon-item-data">
                <p className="address">{cat.contact.address['address1'] || 'N/A' && cat.contact.address['address2']}</p>
                <p className="address">{cat.contact.address['city']} {cat.contact.address['state']} {cat.contact.address['postcode']}
                </p>
              </div>
            </div>
        </div>
      </Col>
    )
  }
}

export default ShelterDetail;
