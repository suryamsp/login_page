 import { Top_design } from './Top_design'
 
 export function Login() {
  return (
    <div className='main_container2'>
      <div className='form'>
        <form>
          <div>
            <label className='lable'>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
          </div>
          <div>
            <label className='lable'>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"  />
            <label className='lable'><a href="http://localhost:5173/reset"> Forget Your Password?</a></label>
          </div>
          <div>

            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label style={{ marginLeft: "10px" }}>Remember Password</label>
            <button type="submit" className="login_btn">Login</button>
          </div>
          <div className='policy'>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className='new_cus'><p>New user?<a href="http://localhost:5173/new"> Create an account!</a> </p></div>
      
      </div>


  );
}
