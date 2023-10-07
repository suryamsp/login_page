import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

export function Top_design() {
  return (
    <div className='main_container'>
      <div><img className="logo" src="https://avatars2.githubusercontent.com/u/58701512?s=280&v=4" /></div>
      <div><h4>Sign up on Start Bootstrap</h4></div>
      <div className='content'><p>Join our community of designers and developers and manage your</p></div>
      <div className='content'><p>purchases, favorite themes and snippets, comments, and more!</p></div>
      <div>
        <div className='t_logo'></div>
        <div className='f_logo'></div>
        <div className='g_logo'></div>
        <div className='git_logo'></div>

      </div>
      <div className='btn_container'>

        <button type="button" className="btn btn-primary"><FacebookIcon />Primary</button>


        <button type="button" className="btn btn-primary"><TwitterIcon />Primary</button>


        <button type="button" className="btn btn-primary"><GitHubIcon /> Primary</button>


        <button type="button" className="btn btn-primary"><GoogleIcon />Primary</button>
      </div>
      <hr></hr>
    </div>
  );
}
