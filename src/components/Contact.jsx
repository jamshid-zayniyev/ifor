import React from 'react'
import Iframe from 'react-iframe'
const Contact = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-6">


    <p class="text-center w-responsive mx-auto mb-5 text-secondary fs-4">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        <div class="col-md-12 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
       
        
       

    </div>


        </div>
        <div className="col-md-6">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264454505!2d69.1392805926193!3d41.28251254344918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1676120109722!5m2!1sen!2s" width="100%" height='300px'  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        <div className="row text-center">
          <div className="col-md-4">
          <i class="fa fa-map-marker fs-3 mt-4"></i>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-md-4">
          <i class="fa fa-phone mt-4 fs-3"></i>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-md-4">
          <i class="fa fa-envelope mt-4 fs-3"></i>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact