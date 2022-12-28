
import React , {useState , useEffect} from "react";

const  App = () =>{

 const [name,setName] = useState();
 const [email,setEmail] = useState();
 const [Course,setCourse]=useState();
 const [users ,setUsers]=useState([])

 const handleSubmit = (e) =>{
   e.preventDefault();
   users.splice(1,0,name);
   console.log(users);
 }
      
  return(
      <center>
    <div className="mainDive">
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/><br></br>
      <input type="email" placeholder='Enter your email'value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
      <select value={Course} onChange={(e)=>setCourse(e.target.value)}>
        <option value="React">React</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Javascript">Javaript</option>
        </select><br></br>
      <button type="Submit">Submit</button><br></br>
      </form>
      <br></br>
      <h2>Users Available</h2>
      <ol>
        {
          users.map((user,index) => <li key={index}>{user}</li>)
        }
      </ol>
    </div>
    </center>
)
}

export default App;