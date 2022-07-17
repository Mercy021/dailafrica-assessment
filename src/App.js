//import logo from './logo.svg';
import './App.css';
import dialAfrica from './images/dialafrika.png';
import lightArt from './images/bubble.jpg';
import Art from './images/ferlin.jpg';
import Ingo from './images/ingo.jpg';
import Izabela from './images/izabela.jpg';
import { BsCart} from 'react-icons/bs'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <nav>
          
          <img src={dialAfrica} className="logo" alt="logo" />
          <BsCart className='cart' />
          <hr></hr>
        </nav>
      
        <h1>Samurai King Testing</h1>
        <img src={lightArt} className="art" alt="logo" />

        <div className="bottom-left">Photo of the day</div>


        <div id='row'>
          <div id='order'><h1 className="about">About the Samurai King Resting</h1> 

          <h4>Pets</h4>

        <p>So how did the classical Latin become so incoherent? According to McClintock,<br></br>
         a 15th century typesetter likely scrambled part of Cicero's De Finibus in order <br></br>
         to provide placeholdertext to mockup various fonts for a type specimen book.So <br></br>
         how did the classical Latin become so incoherent? According to McClintock, <br></br>
         a 15th century typesetter likely scrambled part of Cicero's De Finibus in order <br></br>
         to provide placeholder .<br></br>

         <br></br>text to mockup various fonts for a type specimen book.<br></br>
         So how did the classical Latin become so incoherent? According to McClintock.</p></div>
        
         <div id='order'><h1 className="story">People also buy</h1>
         <div class="row">
  <div class="column">
    </div>
</div>
         <div class="card">
         <img src={Art} className="art2" alt="logo" /> 
         </div>

         <div class="card">
         <img src={Ingo} className="art3" alt="logo" /> 
         </div>

         <div class="card">
         <img src={Izabela} className="art4" alt="logo" /> 
         </div> 

         <h1 className="details">Details</h1>
         <p className="size">Size: 1020 x 1020 pixel
         Size: 15 mb</p> 


</div>
      </div>
         <hr></hr>

         <h1>Photography/<span>Premium Photos</span></h1>
         <>
       <div className="container">
          <div className="row">
            <div className="col">
            <h1>Category</h1> 
              </div>
              </div>
              </div>
             
              <ol>
              <form action="/action_page.php">
              <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input></li>
  <li><label for="cle1">People</label></li>
  <li><input type="checkbox" id="cle2" name="cle2" value="People"></input></li>
  <li><label for="cle2">Premium</label></li>
  <li><input type="checkbox" id="cle3" name="cle3" value="Premium"></input></li>
  <li><label for="cle3">Pets</label></li>
  <li><input type="checkbox" id="vehicle3" name="cle3" value="Pets"></input></li>
  <li><label for="cle3">Food</label></li>
  <li><input type="checkbox" id="cle3" name="cle3" value="Food"></input></li>
  <li><label for="cle3">Landmarks</label></li>
  <li><input type="checkbox" id="cle3" name="cle3" value="Landmarks"></input></li>
  <li><label for="cle3">Cities</label></li>
  <li><input type="checkbox" id="cle3" name="cle3" value="Cities"></input></li>
  <li><label for="cle3">Nature</label></li>
 </form>

              
  </ol>
    
  <div className="container">
          <div className="row">
            <div className="col">
            <h1>Price range</h1> 
              </div>
              </div>
              </div>
             
              <ol>
              <form action="/action_page.php">
              <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input></li>
  <li><label for="cle1">Lower than $20</label></li>
  <li><input type="checkbox" id="cle2" name="cle2" value="People"></input></li>
  <li><label for="cle2">$20 - $100</label></li>
  <li><input type="checkbox" id="cle3" name="cle3" value="Premium"></input></li>
  <li><label for="cle3">$100 - $200</label></li>
  <li><input type="checkbox" id="vehicle3" name="cle3" value="Pets"></input></li>
  <li><label for="cle3">More then $200</label></li>
  <li><input type="checkbox" id="cle3" name="cle3" value="Food"></input></li>
 </form>

              
  </ol>
            
  {/* <label for="vehicle1"> </label>
  <input type="checkbox" ></input>
  <label for="vehicle2"> I</label>
  <input type="checkbox" ></input>
  <label for="vehicle3"></label>
  */}

              {/* <ol>
  <li>People</li>
  <li>Premium</li>
  <li>Pets</li>
  <li>Food</li>
  <li>Landmarks</li>
  <li>Cities</li>
  <li>Nature</li>
</ol> 
<div className="container">
          <div className="row">
            <div className="col">
<h1>Price range</h1> 
</div>
              </div>
              </div>
              <ol>
             
  <li>Lower than $20</li>
  <li>$20-$100</li>
  <li>$100-$200</li>
  <li>More than $200</li>
</ol>  */}
              
              
              {/* <div className="row">
            <div className="col">
              <button className='btn'>People</button>
              <button className='btn'>Premium</button>
              <button className='btn'>Pets</button>
              <button className='btn'>Food</button>
              <button className='btn'>Landmarks</button>
              <button className='btn'>Cities</button>
              <button className='btn'>Nature</button>
             
</div>
            </div>
            <div className="container">
          <div className="row">
            <div className="col">
            <h1>Price range</h1> 
              </div>
              </div>
              
              
              <div className="row">
            <div className="col">
              <button className='btn'>Lower than $20</button>
              <button className='btn'>$20-$100</button>
              <button className='btn'>$100-$200</button>
              <button className='btn'>More than $200</button>

              </div> */}
{/* 
       
              <div className='col'>
            <div className='cards'>
              <div className='card0'>
                <div className='card1'>
                <img src={Izabela} className="art4" alt="logo" /> 
               
                <div className='body'>
                  <h2 className='producttitle'>People</h2>
                  <h2 className='title'>Red Bench</h2>
                  <span className='price'>$3.89</span>
                  </div>
                </div>
              </div>
              </div>
          

            <div className='card0'>
                <div className='card1'>
                <img src={Izabela} className="art4" alt="logo" /> 
             
                <div className='body'>
                  <h2 className='producttitle'>People</h2>
                  <h2 className='title'>Red Bench</h2>
                  <span className='price'>$3.89</span>
                  </div>
                </div>
              </div>
            


            
              <div className='card0'>
                <div className='card1'>
                <img src={Izabela} className="art4" alt="logo" /> 
               
                <div className='body'>
                  <h2 className='producttitle'>People</h2>
                  <h2 className='title'>Red Bench</h2>
                  <span className='price'>$3.89</span>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
            */}
            
           
 </>


         
     
    
        
      </header>
    
      
    </div>
  );
}


export default App;


  