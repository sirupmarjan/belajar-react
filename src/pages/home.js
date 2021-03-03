import React,{Component} from 'react'
import { Jumbotron } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import CardList from '../CardList';
import {stockData} from "../data"

var fruits = ["Apple", "Banana"];
class Home extends Component{
    render(){
        return(
            <div>
      <h1>Device Test!</h1>
      <MediaQuery minWidth={1224}>
        <p>You are a desktop or laptop</p>
        <MediaQuery minWidth={1824}>
          <p>You also have a huge screen</p>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
          {/* //populate data */}
         {stockData.map((data,key) =>{
             return(
                <div key={key}>
                 <CardList title={data.title} subtitle={data.subtitle} text={data.text} link={data.link}/>
                </div>
             );
         })}
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        {/* You can also use a function (render prop) as a child */}
        {(matches) =>
          matches
            ? <p>You are retina</p>
            : <p>You are not retina</p>
        }
      </MediaQuery>
    </div>
        );
    }
}



const Example = () => (
    <div>
      <h1>Device Test!</h1>
      <MediaQuery minWidth={1224}>
        <p>You are a desktop or laptop</p>
        <MediaQuery minWidth={1824}>
          <p>You also have a huge screen</p>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
          <p>You are on Tabler or phone</p>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        {/* You can also use a function (render prop) as a child */}
        {(matches) =>
          matches
            ? <p>You are retina</p>
            : <p>You are not retina</p>
        }
      </MediaQuery>
    </div>
  )



export default Home;

