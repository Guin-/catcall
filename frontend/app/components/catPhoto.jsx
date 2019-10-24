import React from 'react'
import { Col } from 'react-bootstrap'

class CatPhoto extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    return (
        <Col lg={5} lgOffset={1} md={6}>
          <div className="detail-section">
            <div className="detail-view-image-container">
              <img src={ cat.photos.length >=1 ? cat.photos[0]['large'] : image_not_available }
                className="detail-view-image"
              />
            </div>
          </div>
        </Col>
    )
  }
}

export default CatPhoto;
