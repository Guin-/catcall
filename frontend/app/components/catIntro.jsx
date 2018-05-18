import React from 'react'
import { Col } from 'react-bootstrap'
import image_not_available  from '../../static/image_not_available.png'
import health from '../../static/health.png'
import housebroken from '../../static/housebroken.png'
import angry from '../../static/angry.png'

class CatIntro extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { cat } = this.props
    const optionsArray = this.props.cat.options
    let options = []
    const catOptions =  _.forEach(optionsArray, function(value){
        options[value] = true
      })
    return (
      <div>
        <Col xs={12} xsOffset={0} smOffset={1} mdOffset={1} lg={6} lgOffset={0}>
          <div className="cat-detail-container">
            <img src={ cat.photos ? cat.photos.photo[2].$t : image_not_available }
              className="detail-card-image"
            />
          </div>
        </Col>
        <Col xs={12} xsOffset={0} smOffset={1} mdOffset={1} lg={6} lgOffset={0}>
          <div className="cat-detail-container">
              <div className="summary">
                <div className="icon-item">
                  <div className="icon-image-container">
                    <img className="inverted" src={health} alt="health"/>
                  </div>
                  <div className="icon-item-data">
                    <p>{options['altered'] ? 'Spayed/neutered ' : 'Not spayed/neutered '}</p>
                    <p>{options['hasShots'] ? 'Vaccinated ' : 'Unknown vaccination status '}</p>
                    <p>{options['specialNeeds'] ? 'Special needs ': null}</p>
                    <p>{options['noClaws'] ? 'Declawed': null}</p>
                  </div>
                </div>
                <div className="icon-item">
                  <div className="icon-image-container">
                    <img className="inverted" src={housebroken} alt="litter box"/>
                  </div>
                  <div className="icon-item-data">
                    <p>{options['housebroken'] ? 'Housebroken' : options['housetrained'] ? 'Housebroken' : 'Not housebroken/Unknown'}</p>
                  </div>
                </div>
                <div className="icon-item">
                  <div className="icon-image-container">
                    <img className="inverted" src={angry} alt="angry cat"/>
                   </div>
                  <div className="icon-item-data">
                    <p> Prefers Home Without: </p>
                    <p>{options['noDogs'] ? 'Dogs ' : null}</p>
                    <p>{options['noCats'] ? 'Cats ' : null}</p>
                    <p>{options['noKids'] ? 'Kids ' : null}</p>
                   </div>
                </div>
              </div>
          </div>
        </Col>
      </div>
    )
  }
}

export default CatIntro;
