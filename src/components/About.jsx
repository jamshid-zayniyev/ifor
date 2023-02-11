import React from 'react'
import carouselPhoto1 from "../img/african-american-student-walking-street-talking-phone.jpg"
import carouselPhoto2 from "../img/enchanting-blinde-woman-trendy-knitted-sweater-expressing-happiness-indoor-portrait-charming-european-woman-standing-orange.jpg"
import carouselPhoto3 from "../img/portrait-pretty-lady-red-warm-jacket-stylish-eyeglasses.jpg"
const About = () => {
  return (
    <div className='container mt-5 '>
      <div className="row">
        <div className="col-md-6">
          <h1>About Us</h1>
          <p className='text-secondary fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quaerat.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, eligendi culpa facere repudiandae modi voluptatibus commodi maiores tempora fugiat quasi. Eligendi fugit facilis, dolorum cum architecto vitae officia autem eos magni numquam nisi et atque dignissimos aliquid modi, dolores voluptate esse! Obcaecati iste est deleniti veniam reiciendis officia ab ullam.</p>
          <button className='btn btn-dark'>Read more</button>
          <div className='mt-4'>
            <button className='btn btn-dark'><i class="fa fa-instagram" aria-hidden="true"></i></button>
            <button className='btn btn-dark m-2'><i class="fa fa-telegram" aria-hidden="true"></i></button>
            <button className='btn btn-dark'><i class="fa fa-twitter" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className="col-md-6">

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carouselPhoto1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carouselPhoto2}  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carouselPhoto3}  class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </div>
  )
}

export default About