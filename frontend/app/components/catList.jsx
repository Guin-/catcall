import React from 'react'
import CatCard from './catCard'
import { Grid, Row } from 'react-bootstrap'

class CatList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cats = this.props.data
    const catItems = cats.map((cat, id) => {
      return(
        <CatCard cat={cat} key={cat.id} />
      )
    })
    return (
      <Grid>
        <Row>
          {catItems}
        </Row>
      </Grid>
    )
  }
}

export default CatList;
