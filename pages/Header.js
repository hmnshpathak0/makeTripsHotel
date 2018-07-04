import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
  
constructor(){
  super();
  this.handleratingclick=this.handleratingclick.bind(this);
  this.handlepriceclick=this.handlepriceclick.bind(this);
  
}

handleratingclick(event){
console.log(event);
  this.props.onratingClick(event);
}
handlepriceclick(event){
  console.log(event);
    this.props.onpriceClick(event);
  }

render() {
   
    var state=this.state;
   
    var styleDiv={"display":"flex","flex-direction":"row","justify-content":"space-around","justify-items":"space-around","flex-wrap":"wrap"}
    var style={
      "width":"20em",

    }
    return (
<div style={styleDiv}>
<div>
 <h2> Hotels in New Delhi</h2>
  </div>
  <div style={styleDiv}>
<div className="dropdown" >
<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Sort Hotels by Prices
</button>
<div class="dropdown-menu"  aria-labelledby="dropdownMenuButton">
<button className="dropdown-item"  value="1" onClick={this.handlepriceclick} >Low to high</button>
<button className="dropdown-item"  value="2" onClick={this.handlepriceclick} >High to Low</button>
</div>
</div>
&nbsp;&nbsp;
<div className="dropdown">
<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Sort Hotels by Rating
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<button className="dropdown-item"  value="5" onClick={this.handleratingclick} >

   <img value="5" src="./assets/star.png"/>
   <img value="5" src="./assets/star.png"/>
   <img value="5" src="./assets/star.png"/>
   <img value="5" src="./assets/star.png"/>
   <img value="5" src="./assets/star.png"/>
</button>
<button className="dropdown-item" value="4" onClick={this.handleratingclick}>
<img value="4" src="./assets/star.png"/>
   <img value="4" src="./assets/star.png"/>
   <img value="4" src="./assets/star.png"/>
   <img value="4" src="./assets/star.png"/>
   <img value="4" src="./assets/star-1.png"/>
</button>
<button className="dropdown-item"  value="3" onClick={this.handleratingclick}>
<img value="3" src="./assets/star.png"/>
   <img value="3" src="./assets/star.png"/>
   <img value="3" src="./assets/star.png"/>
   <img value="3" src="./assets/star-1.png"/>
   <img value="3" src="./assets/star-1.png"/>
</button>
<button className="dropdown-item" value="2" onClick={this.handleratingclick}>
<img value="2" src="./assets/star.png"/>
   <img value="2" src="./assets/star.png"/>
   <img value="2" src="./assets/star-1.png"/>
   <img value="2" src="./assets/star-1.png"/>
   <img value="2" src="./assets/star-1.png"/>
</button>
<button className="dropdown-item" value="1" onClick={this.handleratingclick}>
<img value="1" src="./assets/star.png"/>
   <img value="1" src="./assets/star-1.png"/>
   <img value="1" src="./assets/star-1.png"/>
   <img value="1" src="./assets/star-1.png"/>
   <img value="1" src="./assets/star-1.png"/>
</button>

</div>
 </div>
</div>
</div>

    )
  }
}
export default Header;