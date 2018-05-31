import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCatDetail } from '../actions/catDetailActions'
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
    let id = this.props.match.params.id;
    this.props.fetchCatDetail(id);
  }

  render() {
    const { catDetail, error, isFetching } = this.props
    if (isFetching) {
      return(
        <Loading />
      )
    }
    else if (error) {
      return (
        <ErrorAlert errorMessage={error}/>
      )
    }
    return (
      <Grid className="view">
        <Row>
          <CatIntro cat={catDetail} />
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


const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatDetail(id) {
      dispatch(fetchCatDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);

