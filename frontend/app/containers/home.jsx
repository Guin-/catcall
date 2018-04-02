import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'
import LocationForm from '../components/locationForm'
import { fetchCatList } from '../actions/catListActions'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {zipcode: ''}
  }

  getValidationState() {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.zipcode);
    if (isValidZip) return 'success'
    else if (this.state.zipcode.length > 0) return 'error'
    return null
  }

  handleChange(e) {
    this.setState({ zipcode: e.target.value });
  }

  submitLocationForm(event) {
    event.preventDefault()
    console.log('onSubmit function runs', this.state.zipcode)
    const { dispatch } = this.props
    if (this.getValidationState() === 'success') {
      return (
      dispatch(fetchCatList(this.state.zipcode)),
      this.props.history.push('/cats')
      )
    }
  }

  render() {
    return (
      <div className='viewport-background'>
            <div className='search-section'>
                <h2>Meet your furever friend</h2>
                <p className='lead'>Find adoptable cats near:</p>
                <LocationForm
                   validation={this.getValidationState()}
                   value={this.state.zipcode}
                   onSubmit={this.submitLocationForm.bind(this)}
                   onChange={this.handleChange.bind(this)}
                 />
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catList : state.catList.catList
})


export default connect(mapStateToProps)(Home);

