import React from 'react'

class CatCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.props.children}
      </div>
    )
  }
}

export default CatCard;;
