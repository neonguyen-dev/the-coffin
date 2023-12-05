export default function SignupView(){
    return (
        <div className="header">
            <h1>Sign up</h1>
            <p>Please fill in this form to sign up as external</p>
            
            <hr></hr>
            <div>
                <label><b>Name: </b></label>
                <input type="text" placeholder="Enter your name" name="name" required></input>          
            </div>

            <hr></hr>
            <div>
                <label><b>Email: </b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input>          
            </div>

            <hr></hr>
            <div>
                <label><b>Plus one for: </b></label>
                <input type="text" placeholder="Do you have a specific +1?" name="name" required></input>          
            </div>

            <hr></hr>
            <p>I agree to having my data temporarily saved in compliance with <a href="#">GDPR Rules and Regulations</a>.</p>

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