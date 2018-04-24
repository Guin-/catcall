import React from 'react'
import { connect } from 'react-redux'
import { fetchCatDetail } from '../actions/catDetailActions'
import CatDetail from '../components/catDetail'

class DetailContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchCatDetail(id);
  }

  render() {
    const { catDetail } = this.props
    return (
      <div>
        <CatDetail cat={catDetail}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catList: state.catList.catList,
  catDetail: state.catDetail.catDetail
})


const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatDetail(id) {
      dispatch(fetchCatDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);

