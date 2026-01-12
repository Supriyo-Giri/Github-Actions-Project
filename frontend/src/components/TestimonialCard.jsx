import user from '../assets/user.png';


const TestimonialCard = ({ name,comment,key_id }) => {
  return (
    <div className='testimonial-card' id={key_id}>
      <div className="name"><img src={user} alt="" className='user-img'/><b>{name}</b></div>
      <p className='para-content'>{comment}</p>
    </div>
  )
}

export default TestimonialCard