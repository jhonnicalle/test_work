
import send from '../../images/telegram.png'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import './Footer.sass'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='section-links'>
          <span className='title'>PRODUCTS</span>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div className='section-links'>
          <span className='title'>DEVELOPER</span>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div className='section-links'>
          <span className='title'>COMPANY</span>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div className='email'>
          <span className='title'>NEWLETTER</span>
          <div>
            <input className='input-email' type='text' placeholder='Enter Email'/>
            <button><img src={send} alt='SEND' /></button>
          </div>
        </div>
      </div>
      <div className='copyrigth'>
        <div className='left'>
          <span>Copyrigth © 2021</span>
        </div>
        <div className='middle'>
          <span className='option'>SHOP</span>
          <span className='option'>SERVICE</span>
          <span className='option'>ABOUT</span>
          <span className='option'>SUPPORT</span>
        </div>
        <div className='rigth'>
          <img className='option' src={facebook} alt='...' />
          <img className='option' src={twitter} alt='...' />
        </div>
      </div>
    </>
    
  )
}

export default Footer