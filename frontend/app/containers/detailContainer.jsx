import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCatDetail, clearCatDetail } from '../actions/catDetailActions'
import Loading from '../components/loading'
import CatDetail from '../components/catDetail'
import ShelterDetail from '../components/shelterDetail'
import CatPhoto from '../components/catPhoto'
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
        <div className="view">
          <Loading />
        </div>
      )
    }
    return (
      <Grid className="view">
        <Row>
            <CatPhoto cat={catDetail}/>
            <ShelterDetail cat={catDetail}/>
        </Row>
        <Row>
          <CatDetail cat={catDetail}/>
        </Row>
      </Grid>
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

