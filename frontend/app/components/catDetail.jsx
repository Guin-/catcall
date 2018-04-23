import React from 'react'

class CatDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cat } = this.props
    return (
        <div className="detail">
          <p>{ cat.name }</p>
        </div>
    )
  }
}


export default CatDetail;
