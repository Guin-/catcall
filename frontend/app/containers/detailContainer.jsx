import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCatDetail, clearCatDetail } from '../actions/catDetailActions'
import Loading from '../components/loading'
import CatDetail from '../components/catDetail'
import CatIntro from '../components/catIntro'
import ShelterDetail from '../components/shelterDetail'
import ErrorAlert from '../components/errorAlert'

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
      <Grid className="view">
        <Row>
          <CatIntro cat={catDetail}/>
        </Row>
        <Row>
          <CatDetail cat={catDetail}/>
          <ShelterDetail cat={catDetail}/>
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

