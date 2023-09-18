export function Reset() {
  return (
    <div className='reset_con'>
      <div><img className="logo" src="img\download.png" /></div>
      <div><h4>Reset Your Password</h4></div>
      <div className='content'><p>Enter your email address below and we'll send you a link to reset your</p></div>
      <div className='content'><p>password.</p></div>
      <div>
        <hr></hr>
        <div className='reset_pass'>
          <label className='lable'>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
      </div>
      <div>
        <button type="submit" className="reset_btn">Send Reset Password link </button>
      </div>
      <hr></hr>
      <div className='new_cus'><p>New user?<a href="http://localhost:5173/new"> Create an account!</a></p></div>
    </div>
  );

}
