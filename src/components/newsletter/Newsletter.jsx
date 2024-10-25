import PropTypes from "prop-types";
import backgroundImage from "../../assets/bg-shadow.png";
const Newsletter = ({subscribeClickHandler,
                    subscribeInput,
                    email,
                    }) => {
  return (
    <div className="mt-32 p-10 bg-white relative">
      <div
        className="mt-10 hero w-11/12 mx-auto  rounded-xl outline-double outline-offset-4 p-4 py-10 absolute -top-32 sm:-top-32 md:-top-16 left-4 md:inset-x-4 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-content text-center">
          <div className="w-full">
            <form className="flex flex-col items-center space-y-5">
              <h6 className="text-3xl font-bold text-primary">Subscribe To Our Newsletter</h6>
              <fieldset className="form-control">
                <label className="label">
                  <span className="text-lg font-medium ">Get the latest updates and news right in your inbox!</span>
                </label>
                <div className="flex flex-col sm:flex-row md:flex-row   items-center justify-center gap-4">
                  <input
                  onChange={subscribeInput}
                    type="text"
                    placeholder="username@site.com"
                    value={email}
                    className="w-full input input-bordered "
                  />
                  <button
                   onClick={subscribeClickHandler}
                   className="btn bg-gradient-to-r from-[#e688b3] to-[#f6c155]">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
    subscribeClickHandler : PropTypes.func.isRequired,
    subscribeInput : PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,

};

export default Newsletter;
