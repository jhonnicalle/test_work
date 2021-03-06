import { Link } from 'react-router-dom'
import './Header.sass'

const Header = () => {
  return (
    <div className='header'>
      <div className='content'>
        <h2 className='title'>Be Smart Take Card</h2>
        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim elit vel erat laoreet egestas id gravida felis. </p>
        <Link to='/users'><button className='button'>Go to users</button></Link>
      </div>
    </div>
  )
}

export default Header