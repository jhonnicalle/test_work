import Card from '../../components/Card'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import './Home.sass'
import list from '../../images/list.png'
import cards from '../../images/cards.png'
import Roller from '../../components/Roller'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      
       
      {/* </div> */}
      <Navbar />
      <Header />
      <div className='section-card'>
        <Card />
      </div>
      
      <div className='section-options'>
        <div className='content-section-options'>
          <h2 className='title'>Get Your Card</h2>
          <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim elit vel erat laoreet egestas id gravida felis.</p>
        </div>

        <div className='options'>
          <div className='paper'>
            <div className='image'>
              <img src={cards} alt='...' />
            </div>
            <span className='title'>Title</span>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.</p>
          </div>
          <div className='paper paper-up'>
            <div className='image'>
              <img src={list} alt='...' />
            </div>
            <span className='title'>Title</span>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.</p>
          </div>
          <div className='paper'>
            <div className='image'>
              <img src={cards} alt='...' />
            </div>
            <span className='title'>Title</span>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.</p>
          </div>
        </div>
      </div>
      <div>
        <Roller />
      </div>

      
      <Footer />
    </div>
  )
}

export default Home