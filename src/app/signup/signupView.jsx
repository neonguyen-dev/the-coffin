export default function SignupView(){
  return (
    <div className="header">
      <h1>Sign up</h1>
      <p>Please fill in this form to sign up as external</p>
      
      <hr></hr>
      <div>
        <label><b>Name: </b></label>
        <input type="text" placeholder="John Protagonist" name="name" required></input>          
      </div>

      <hr></hr>
      <div>
        <label><b>Email: </b></label>
        <input type="text" placeholder="john@example.com" name="email" required></input>          
      </div>

      <hr></hr>
      <div>
        <label><b>Plus one: </b></label>
        <input type="text" placeholder="Do you have a specific +1?" name="name" required></input>          
      </div>

      <hr></hr>
      <p>I consent to having my data temporarily saved in compliance with <a href="https://gdpr-info.eu/">GDPR Rules and Regulations</a>.</p>

      <label>
        <input type="checkbox" name="remember"></input> I agree 
      </label>

      <div class = "clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
      </div>

    </div>
  );
}