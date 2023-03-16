import './Mail.css';

const Mail = () => {
  return (
    <div className='Mail'>
        <h1 className='mailTitle'>Save time, save money!</h1>
        <span className='mailDes'>Sign up and we'll send the best deals to you</span>
        <div className='mailInput'>
            <input type='text' placeholder='Enter Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Mail