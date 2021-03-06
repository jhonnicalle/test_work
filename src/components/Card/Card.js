import logo from '../../images/logo.png'
import chip from '../../images/chip.png'
import './Card.sass'

const Card = () => {
  return (
    <div class="card">
      <img class="logo" src={logo} alt='...' />    
      <img class="chip" src={chip} alt='...' />    
      <div class="number">41XX XXXX XXXX XXXX</div>
      <div class="expiry-date">XX/XX</div>
      <div class="owner">XXXXX XXXXXX</div>
    </div>
  )
}

export default Card