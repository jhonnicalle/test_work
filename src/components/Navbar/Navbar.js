import logo from '../../images/logo_white.png'
import './Navbar.sass'

const Navbar = () => {
  return (
    <>
      <div className='background' />
      <div className='navbar'>
        <div className='left'>
          <img src={logo} alt='LOGO' />
        </div>
        <div className='middle'>
          <span className='option'>Products</span>
          <span className='option'>Developers</span>
          <span className='option'>Company</span>
        </div>
        <div className='rigth'>
          <span className='option'>Support</span>
          <span className='option'>Sign in</span>
        </div>
      </div>
    </>
  )
}

export default Navbar