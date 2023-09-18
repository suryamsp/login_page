import { Top_design } from './Top_design'

export function Create_Acc() {
  return (
    <div className='main_container3'>
      <div className='center'><p>...or enter your information below.</p></div>
      <div className='forms'>

        <form>
          <div className='singal_line'>
            <div>
              <label className='lable'>First Name</label>
              <input className="form-controls" id="exampleInputEmail1" />
            </div>

            <div>
              <label className='lable'>Last Name</label>
              <input className="form-controls" id="exampleInputPassword1" />
            </div>

          </div>
          <div className='singal_line2'>
            <label className='lable'>Email address</label>
            <input type="email" className="form-controlss" />
          </div>
          <div className='singal_line'>
            <div>
              <label className='lable'>Password</label>
              <input type="password" className="form-controls" id="exampleInputPassword1"  />
            </div>
            <div>
              <label className='lable'>Conform Password</label>
              <input type="password" className="form-controls" id="exampleInputPassword1"  />
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>

            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label style={{ marginLeft: "10px" }}>I accept the terms & conditions</label>
            <button type="submit" className="login_btn">Register</button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </div>
        </form>
      </div>
      <div className='new_cus' style={{ marginTop: "10px" }}><p>Have an account? <a routerlink="../login" href="http://localhost:5173/"> Sign in!</a></p></div></div>
  );
}
