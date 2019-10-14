import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Image } from 'react-bootstrap'
import image_not_available  from '../../static/image_not_available.png'

class CatCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    return (
      <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0} lg={4} lgOffset={0}>
        <Link to={`cats/${cat.id}`} className="cat-card-link">
          <div className="cat-card">
            <div className="image-container">
              <Image
                src={ cat.photos.length >= 1 ? cat.photos[0]['medium'] : image_not_available }
                className= "cat-card-image"
              />
            </div>
            <div className='info-container'>
              <h3>{cat.name}</h3>
              <h4>{cat.age} {cat.size} {cat.gender}</h4>
              <h4>
              {cat.breeds['unknown'] ? 'unknown breed' :
               cat.breeds['secondary'] ? cat.breeds['primary'] + ' & ' + cat.breeds['secondary']
               : cat.breeds['primary']}
               </h4>
            </div>
          </div>
        </Link>
      </Col>
    )
  }
}

export default CatCard;

