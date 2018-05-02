import React from 'react'
import CatCard from './catCard'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import Infinite from 'react-infinite'
import Media from 'react-media'
import { fetchCatList } from '../actions/catListActions'

class CatList extends React.Component {
  constructor(props) {
    super(props)
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this)
    this.state = {
      offset: 0,
      isInfiniteLoading: false,
    }
  }

  handleInfiniteLoad(){
    this.setState({isInfiniteLoading: true})
    setTimeout(() => {
      this.setState({ offset : this.state.offset + 30,
                      isInfiniteLoading: false}),
      this.props.fetchCatList(this.props.zipcode, this.state.offset)
    }, 2500)
  }

  elementInfiniteLoad() {
    return <div className="loading">
            <h3>Loading...</h3>
           </div>;
}
  render() {
    const cats = this.props.data
    const groupSize = 3
    const mobileRows = cats.map((cat, id) => {
        return(
            <CatCard cat={cat} key={cat.id} />
        )
    })
    const rows = mobileRows.reduce((row, element, index)=>{
        index % groupSize === 0 && row.push([]);
        row[row.length - 1].push(element);
        return row
    }, []).map((rowContent, index) => {
      return <div className="row" key={index}>{rowContent}</div>
    })

    return (
      <Grid>
        <Media query="(max-width: 1024px)">
        {matches =>
            matches ? (
              <Infinite elementHeight={400} useWindowAsScrollContainer
                infiniteLoadBeginEdgeOffset={600}
                isInfiniteLoading={this.state.isInfiniteLoading}
                onInfiniteLoad={this.handleInfiniteLoad}
                loadingSpinnerDelegate={this.elementInfiniteLoad()}
              >
                {mobileRows}
              </Infinite>
            ) : (
              <Infinite elementHeight={400} useWindowAsScrollContainer
                infiniteLoadBeginEdgeOffset={600}
                isInfiniteLoading={this.state.isInfiniteLoading}
                onInfiniteLoad={this.handleInfiniteLoad}
                loadingSpinnerDelegate={this.elementInfiniteLoad()}
              >
                {rows}
              </Infinite>
            )
          }
        </Media>
      </Grid>
    )
  }
}


const mapStateToProps = (state) => ({
  zipcode: state.zipcode.zipcode
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatList(zipcode, offset) {
      dispatch(fetchCatList(zipcode, offset))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CatList);
