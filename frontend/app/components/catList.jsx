import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import Infinite from 'react-infinite'
import Media from 'react-media'
import CatCard from './catCard'
import Loading from '../components/loading'

class CatList extends React.Component {
  constructor(props) {
    super(props)
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this)
    this.state = {
      page: 1,
      isInfiniteLoading: false,
    }
  }

  handleInfiniteLoad() {
    this.setState({isInfiniteLoading: true})
    setTimeout(() => {
      this.setState({ page : this.state.page + 1,
                      isInfiniteLoading: false}),
      this.props.fetchCatList(this.props.zipcode, this.state.page)
    }, 2500)
  }

  elementInfiniteLoad() {
    return (
      <Row>
        <Loading />
      </Row>
    )
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
        // group cat card elements into arrays of 3 cat card items
        // ex: [[CatCard1, CatCard2, CatCard3], [CatCard4, CatCard5, CatCard6]]
        index % groupSize === 0 && row.push([]);
        row[row.length - 1].push(element);
        return row
    }, []).map((rowContent, index) => {
      // surround every group with a bootstrap row
      // use the index as a key for the row
      // rows are used as elements for infinite scroll on large devices
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

export default CatList;

