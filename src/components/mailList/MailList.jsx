import './mailList.css'

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">
            Subscribe to our mail!
        </h1>
        <span className='"mailDesc'>Sign up to recieve exciting offers!</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your email' />
            <button>Subscribe</button>

        </div>
        
    </div>
  )
}

export default MailList
