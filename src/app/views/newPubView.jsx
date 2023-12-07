export default function NewPub() {
    return (<div className="header">
    <h1>Create a new pub</h1>
    <p>Fill out the necessary information about the new pub</p>
    
    <hr></hr>
    <div>
        <label><b>Pub Name: </b></label>
        <input type="text" placeholder="Pub name" name="name" required></input>          
    </div>

    <hr></hr>
    <div>
        <label><b>Date: </b></label>
        <input type="text" placeholder="DD/MM/YY" name="date" required></input>          
    </div>

    <hr></hr>
    <div>
        <label><b>Description: </b></label>
        <input type="text" placeholder="Info" name="name" required></input>          
    </div>

    <hr></hr>
    <div>
        <label><b>Food: </b></label>
        <input type="text" placeholder="Food" name="name" required></input>          
    </div>

    <hr></hr>
    <div>
        <label><b>Price: </b></label>
        <input type="text" placeholder="kr" name="name" required></input>          
    </div>

    <hr></hr>
    <div>
        <input type="file" id="myFile" name="filename" ></input>  
        <input type="submit"></input>
    </div>

    

    
    <div class = "clearfix">
    <button type="button" class="cancelbtn">Cancel</button>
    <button type="submit" class="signupbtn">Create Pub!</button>
    </div>

</div>
  );
}