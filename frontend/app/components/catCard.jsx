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
      <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={4} mdOffset={0} lg={4} lgOffset={0}>
        <Link to={`cats/${cat.id}`}>
          <div className="cat-card">
            <div className="image-container">
              <Image
                src={ cat.photos ? cat.photos.photo[3].$t : image_not_available }
                className= "cat-card-image"
              />
            </div>
            <div className='info-container'>
              <h3>{cat.name}</h3>
              <h4>{cat.age} {cat.size === 'L' ? 'Large' : cat.size === 'M' ? 'Medium' : 'Small' } {cat.sex === 'M' ? 'Male' : 'Female'}</h4>
              <h4>{cat.breed ? cat.breed : cat.breeds[0] + ' & ' + cat.breeds[1]}</h4>
            </div>
          </div>
        </Link>
      </Col>
    )
  }
}

export default CatCard;

