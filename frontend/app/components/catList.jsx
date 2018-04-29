import React from 'react'
import CatCard from './catCard'
import { Grid, Row } from 'react-bootstrap'
import Infinite from 'react-infinite'
import Media from 'react-media'

class CatList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cats = this.props.data
    const groupSize=3
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
              <Infinite elementHeight={400} useWindowAsScrollContainer>
                {mobileRows}
              </Infinite>
            ) : (
              <Infinite elementHeight={400} useWindowAsScrollContainer>
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
