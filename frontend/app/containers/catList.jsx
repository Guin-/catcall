import React from 'react'
import { connect } from 'react-redux'

class CatList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='cat-list'>
        <p>I am the cat list Component</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catList : state.catList.catList
})

export default connect(mapStateToProps)(CatList);
