import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCatDetail, clearCatDetail } from '../actions/catDetailActions'
import Loading from '../components/loading'
import CatDetail from '../components/catDetail'
import ShelterDetail from '../components/shelterDetail'
import ErrorAlert from '../components/errorAlert'
import image_not_available  from '../../static/image_not_available.png'

class DetailContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchCatDetail(id)
  }

  componentWillUnmount() {
    this.props.clearCatDetail()
  }

  render() {
    const { catDetail , error, isFetching } = this.props

    if (!isFetching && error) {
      return (
        <ErrorAlert errorMessage={error}/>
      )
    }
    else if ( isFetching || Object.entries(catDetail).length === 0  ) {
      return(
        <Loading />
      )
    }
    return (
      <div className="parent">
        <div className="div1 area">
            <img src={ catDetail.photos.length >=1 ? catDetail.photos[0]['large'] : image_not_available }
              className="detail-view-image"
            />
          </div>
        <ShelterDetail cat={catDetail}/>
        <CatDetail cat={catDetail}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  isFetching: state.catDetail.isFetching,
  error: state.catDetail.error,
  catDetail: state.catDetail.catDetail
})

const mapDispatchToProps = {
    fetchCatDetail,
    clearCatDetail
  }

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);

