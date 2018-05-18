import React from 'react'
import { Col, Media } from 'react-bootstrap'
import email from '../../static/email.png'
import phone from '../../static/phone.png'
import location from '../../static/location.png'

class ShelterDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  fillEmptyValues() {
    const {cat} = this.props
    _.forEach(cat, function(value, key) {
      if(value.length == undefined && key != 'photos'){
        cat[key] = false
      }
    })
    return cat
  }

  render() {
  {this.fillEmptyValues()}
    const { cat } = this.props
    return (
      <Col xs={12} xsOffset={0} smOffset={1} mdOffset={1} lg={6} lgOffset={0}>
        <div className="cat-detail-container">
          <h1 className="cat-detail-header">Contact</h1>
            <div className="icon-item">
              <img className="icon-image" src={email} alt="email"/>
              <span className="icon-item-data">{cat.email || 'N/A'}</span>
            </div>
            <div className="icon-item">
              <img className="icon-image" src={phone} alt="phone"/>
              <span className="icon-item-data">{cat.phone || 'N/A'}</span>
            </div>
            <div className="icon-item">
              <img className="icon-image" src={location} alt="location"/>
              <div className="icon-item-data">
                <p className="address">{cat.address1 || 'N/A' && cat.address2}</p>
                <p className="address">{cat.city}, {cat.state} {cat.zip}</p>
              </div>
            </div>
        </div>
      </Col>
    )
  }
}

export default ShelterDetail;
