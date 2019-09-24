import React from 'react'
import { Col } from 'react-bootstrap'
import image_not_available  from '../../static/image_not_available.png'

class CatIntro extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { cat } = this.props
    return (
      <div>
        <Col xs={12} xsOffset={0} smOffset={1} mdOffset={1} lg={6} lgOffset={0}>
          <div className="cat-detail-container">
            <img src={ cat.photos[0]['smail'] || image_not_available }
              className="detail-card-image"
            />
          </div>
        </Col>
      </div>
    )
  }
}

export default CatIntro;
