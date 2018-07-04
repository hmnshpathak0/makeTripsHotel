import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {json}  from './service/service';
import Header from './pages/Header'
class FlightsMain extends React.Component {
  
constructor(){
  super();
  this.state = {
              
              HotelInfoArray:[],
              DisplayInfoArray:[],
              }

              this.sortPricing=this.sortPricing.bind(this);
              this.showRatingoption=this.showRatingoption.bind(this);
}


componentDidMount(){
//Call the hotel list function here

var lists=json;
console.log("hotelList"+lists.hotelList);


this.setState({
          HotelInfoArray:lists.hotelList,
          DisplayInfoArray:lists.hotelList
          });
          console.log("hiiiiiii");      
}




showRatingoption(event){
var rating = event.currentTarget.value;
console.log(event.currentTarget.value);
var newlist= this.state.HotelInfoArray.filter(function(element)
{
  if(element.starRating==rating)
return true;
});

console.log(newlist)

this.setState({
  DisplayInfoArray:newlist,
});

}

sortPricing(event){
  console.log("flag"+priceflag)
  var priceflag = event.currentTarget.value;
  var priceSorted=this.state.HotelInfoArray.sort(function(a,b){
  if(priceflag=="2")
    return b.avgTP - a.avgTP
    else
    return a.avgTP - b.avgTP
  })
  
  console.log("sorted array"+priceSorted);
  this.setState({
    DisplayInfoArray:priceSorted,
  })

}

render() {
   
    var state=this.state;
   
    var styleDiv={"display":"flex","flex-direction":"row","flex-wrap":"wrap","padding":"4%"}
    var style={
      "width":"20em",
      "padding":"3%",
    }
    return (

<div>




<Header onratingClick={(event) => this.showRatingoption(event)}  onpriceClick={(event) => this.sortPricing(event)}></Header>

<br></br>

<div style={styleDiv}>
     
 {
this.state.DisplayInfoArray.map(hotels => {  
return (
  
<div className="card" style={style}>
  <img className="card-img-top" src={hotels.mainImages} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title">{hotels.name}</h4>
    <p className="card-text">${hotels.avgTP}</p>
    <p className="card-text">Rating {hotels.starRating}</p>
    <a href="#" class="btn btn-primary">Book</a>
  </div>
</div>

)
  })
}



     </div>
     </div>
    )
  }
}

ReactDOM.render(<FlightsMain />, document.getElementById('app'));
