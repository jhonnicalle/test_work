import { getDefaultNormalizer } from "@testing-library/dom"
import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Navbar from "../../../components/Navbar"
import { getUser } from "../../../redux/actions/usersActions"
import './InfoUser.sass'


const InfoUser = (props) => {

  const getData = () => {
    props.dispatch(
      getUser(props.match.params.id)
    )
  }

  useEffect(() => {
    getData()
  }, [])

  const {name, username, website, phone, email, address } = props.users.userById

  return (
    <div>
      <Navbar />
      {/* <p>{props.users.userById.toString()}</p> */}
      
      <div className='info-section'>
      <span className='title'>User Info</span>
        <div className='info-row'>
          <div className='info-input'>
            <label>Name</label>
            <input readOnly className='input' defaultValue={name} />
          </div>
          <div className='info-input'>
            <label>Username</label>
            <input readOnly className='input' defaultValue={username} />
          </div>
        </div>
        <div className='info-row'>
          <div className='info-input'>
            <label>Website</label>
            <input readOnly className='input' defaultValue={website} />
          </div>
          <div className='info-input'>
            <label>Phone</label>
            <input readOnly className='input' defaultValue={phone} />
          </div>
        </div>
        <div className='info-row'>
          <div className='info-input'>
            <label>email</label>
            <input readOnly className='input' defaultValue={email} />
          </div>
          {/* <div className='info-input'>
            <label>Name</label>
            <input readOnly className='input' defaultValue={`${address}`} />
          </div> */}
        </div>
        <div className='info-row'>
          <div className='info-input'>
            <label>Address</label>
            <textarea readOnly className='input' rows={7} defaultValue={`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`} />
          </div>
        </div>
        <Link to='/users'>
          <button className='back'>Go back</button>
        </Link>
      </div>
      
    </div>
  )
}

export default connect((state) => {return state})(InfoUser)