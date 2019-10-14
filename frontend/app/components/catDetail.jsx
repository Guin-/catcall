import React from 'react'

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
        <div className="div3 area">
        <div className="div4 about-inner">
          <div>
            {
              (health.length > 0) &&
              <div>
                 <h3> Health & Behavior </h3>
                 <p> {health} </p>
              </div>
            }
            {
              (okWith.length > 0) &&
              <div>
                <h3> Ok With </h3>
                <p>{okWith}</p>
              </div>
            }
            {
              (notOkWith.length > 0) &&
              <div>
                <h3> Prefers Home Without </h3>
                <p>{notOkWith}</p>
              </div>
            }
            {
              (tags.length > 0) &&
                <div>
                  <h3> Characteristics </h3>
                  <p> {tags.map(tag => tag)}</p>
                </div>
              }
          </div>
        </div>
        <div className="div5 about-inner">
          <div>
            <h3> Meet {cat.name} </h3>
            <p> { cat.description ? cat.description : "Please use the given contact information to find out more about me!" }</p>
          </div>
        </div>
        </div>
    )
  }
}

export default CatDetail;
