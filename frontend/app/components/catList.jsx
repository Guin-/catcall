import React from 'react'
import CatCard from './catCard'

class CatList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cats = this.props.data
    console.log(cats)
    const catItems = cats.map((cat, id) => {
      return(
        <CatCard name={cat.name} key={cat.id}>
          <p>{cat.age}</p>
          <p>{cat.breed}</p>
          <p>{cat.size}</p>
        </CatCard>
      )
    })
    return (
      <div>
        {catItems}
      </div>
    )
  }
}

export default CatList;
