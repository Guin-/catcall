import React from 'react'
import { Col } from 'react-bootstrap'
import Datapill from './datapill'

class CatDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    const { attributes, environment, tags } = this.props.cat
    const health = Object.keys(attributes).filter(key => attributes[key])
    const okWith = Object.keys(environment).filter(key => environment[key])
    const notOkWith = Object.keys(environment).filter(key => !environment[key] == null  && !environment[key])
    return (
        <Col lg={10} lgOffset={1}>
        <div className="detail-section about-inner">
          <div>
          <h2> About </h2>
            {
              (health.length > 0) &&
              <div>
                 <h3> Health & Behavior </h3>
                 { health.map((tag, index) => { return(<Datapill key={index} tag={tag}/>)})}
              </div>
            }
            {
              (okWith.length > 0) &&
              <div>
                <h3> Ok With </h3>
                 { okWith.map((tag, index) => { return(<Datapill key={index} tag={tag}/>)})}
              </div>
            }
            {
              (notOkWith.length > 0) &&
              <div>
                <h3> Prefers Home Without </h3>
                 { notOkWith.map((tag, index) => { return(<Datapill key={index} tag={tag}/>)})}
              </div>
            }
            {
              (tags.length > 0) &&
                <div>
                  <h3> Characteristics </h3>
                 { tags.map((tag, index) => { return(<Datapill key={index} tag={tag}/>)})}
                </div>
              }
        </div>
          <div>
            <h3> Meet {cat.name} </h3>
            <p> { cat.description ? cat.description : "Please use the given contact information to find out more about me!" }</p>
          </div>
      </div>
      </Col>
    )
  }
}

export default CatDetail;
