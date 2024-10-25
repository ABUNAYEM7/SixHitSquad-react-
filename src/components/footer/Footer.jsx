import PropTypes from 'prop-types'
import cricket from '../../assets/logo-footer.png'

const Footer = () => {
  return (
    <div className='max-w-screen-2xl'>
      <footer className="flex  flex-col items-center gap-2 bg-[#06091a] text-white p-4 md:p-6 lg:p-10 ">

        <div>
            <img src={cricket} alt="" />
        </div>
        {/* grid-container */}
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
    <nav className='flex flex-col items-center gap-5'>
    <h6 className="footer-title">About us</h6>
    <a className="w-2/3 text-center">We are a passionate team dedicated to providing the best services to our customers.</a>
    
  </nav>
  <nav className='flex flex-col items-start gap-5'>
    <h6 className="footer-title">Quick Links</h6>
    <li className="list-disc">Home</li>
    <li className="list-disc">About</li>
    <li className="list-disc">Services</li>
    <li className="list-disc">Contact</li>
  </nav>
  <form >
    <h6 className="footer-title text-xl font-semibold">Subscribe</h6>
    <fieldset className="form-control ">
      <label className="label">
        <span className="w-2/3 label-text text-white">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
    </div>
    <h3 className='w-full text-center font-bold text-xl border-t-2 pt-4'>@2024 Your Company All Rights Reserved.</h3>
    </footer>
    </div>
  )
}

Footer.propTypes = {

}

export default Footer
