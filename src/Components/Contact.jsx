import Base from "../Base/Base"


export default function Contact() {
  return (
    <Base>
      <div className="">
        <div className="row">
          <div className="col">
            <h2><span className="color">C</span>ontact <span className="color">M</span>e</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Ready to collaborate? Reach out for projects, opportunities, or just to connect.Let's create impactful digital experiences together.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="contact">
              <div className="contact-detail">
                <div className="">
                  <i className='bx bx-envelope' ></i>
                  <h5>Have a question?</h5>
                  <p>I am here to help you</p>
                  <h6 className="color">Email Me At mkarthikeyan@gmail.com</h6>
                </div>
                <div className="">
                  <i className='bx bx-map'></i>
                  <h5>Current Location</h5>
                  <p>Bangalore,India</p>
                  <h6 className="color">Serving Clients Worldwide</h6>
                </div>
              </div>
            </div>

          </div>
          <div className="col-12 col-sm-6">
            <div className="contact-form">
              <form>
                <div className="input-field">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="input-field">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="input-field">
                  <textarea type="text" placeholder="Your message" />
                </div>
                <div className="contact-btn">
                  <button>Send Message</button>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </Base>
  )
}
