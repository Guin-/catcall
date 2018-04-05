import React from 'react'
import { Col } from 'react-bootstrap'

class CatCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    return (
      <div className="cat-card">
        <div>
          <img
            src={cat.photos.photo[3].$t}
            className= "cat-card-image"
          />
        </div>
        <h2>{cat.name}</h2>
        <h3>{cat.age} | {cat.sex} | {cat.size}</h3>
        <h4>{cat.breed}</h4>
      </div>
    )
  }
}

export default CatCard;;
