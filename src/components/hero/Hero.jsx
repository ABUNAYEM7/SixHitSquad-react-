import PropTypes from 'prop-types'
import banner from '../../assets/bg-shadow.png'
import cricket from '../../assets/banner-main.png'

const Hero = ({claimClickHandler}) => {
  return (
    <div className='my-6 p-4'>
      <div
  className="hero lg:h-[510px] rounded-xl bg-black"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
  <div className="hero-content  text-center">
    <div className='flex flex-col items-center space-y-4'>
        <img src={cricket} alt="cricket" />
      <h1 className="mb-5 text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5 text-xl font-medium font-secondary">
      Beyond Boundaries Beyond Limits
      </p>
      <button onClick={claimClickHandler} className="btn bg-highlight outline-double outline-highlight">Claim Free Credit</button>
    </div>
  </div>
</div>
    </div>
  )
}

Hero.propTypes = {
    claimClickHandler : PropTypes.func.isRequired,
}

export default Hero
