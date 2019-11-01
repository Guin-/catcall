import React from 'react'
import { connect } from 'react-redux'
import CatList from '../components/catList'
import ErrorAlert from '../components/errorAlert'
import { fetchCatList, clearCatList } from '../actions/catListActions'

class ListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.clearCatList()
    this.props.fetchCatList(this.props.zipcode, 1)
  }

  componentWillUnmount() {
    this.props.clearCatList()
  }

  render() {
    const { error, catList, zipcode, fetchCatList} = this.props
    if (error) {
      return (
          <ErrorAlert errorMessage={error}/>
      )
    }
    return (
      <div className="view list-view">
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
  error: state.catList.error,
  zipcode: state.zipcode.zipcode
})

const mapDispatchToProps = {
    fetchCatList,
    clearCatList
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

