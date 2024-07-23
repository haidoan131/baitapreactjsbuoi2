import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import{Card,CardBody,CardTitle,CardSubtitle,CardText}from 'reactstrap'
import "./cssbaitap.css"
export default function CardTour(props) {
    const {pro}=props

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Khởi tạo AOS với thời gian mặc định là 1000ms
  }, []);

  return (
    <>


    <div>
      <Card
     data-aos="fade-up"
      position-relative
  style={{
    width: '18rem'
  }}
>
<span class="position-absolute top-0 start-0 bg-danger text-white mt-2 ms-2 py-1 px-2 h6 rounded">12 off</span>
  <img
    alt="Sample"
    src={pro.img}
    
  />
  <CardBody  >
  <p className="text-gray font-light"><i className="fa-solid fa-location-pin"></i>  {pro.category}</p>
    <CardTitle  tag="h5">
    {pro.title}
    </CardTitle>
    <p class="card-text">From<span className="font-bold text-primary1 mx-2">{pro.price}</span><span class="text-decoration-line-through text-gray fs-08">$250.00</span></p>
    <div class="fs-08 text-yellow"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>
  </CardBody>
</Card>
    </div>
    </>
  )
}
