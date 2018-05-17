import React from 'react'
import { connect } from 'react-redux'
import CatList from '../components/catList'

class ListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { catList } = this.props
    return (
      <div>
        <CatList data={catList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catList : state.catList.catList
})

export default connect(mapStateToProps)(ListContainer);
