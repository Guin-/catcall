import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCatDetail } from '../actions/catDetailActions'
import CatDetail from '../components/catDetail'
import CatIntro from '../components/catIntro'
import ShelterDetail from '../components/shelterDetail'

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
      <Grid>
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

