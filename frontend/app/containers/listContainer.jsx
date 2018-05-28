import React from 'react'
import { connect } from 'react-redux'
import CatList from '../components/catList'
import { fetchCatList, clearCatList } from '../actions/catListActions'

class ListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.clearCatList(),
    this.props.fetchCatList(this.props.zipcode, 0)
  }

  render() {
    const { catList, zipcode, fetchCatList} = this.props
    return (
      <div className="view">
        <CatList data={catList}
                zipcode={zipcode}
                fetchCatList={fetchCatList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catList : state.catList.catList,
  zipcode: state.zipcode.zipcode
})

const mapDispatchToProps = {
    fetchCatList,
    clearCatList
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

