import React,{Component} from 'react'
import './App.css'
import Two from './Two'
import Movie from './Movie'
import Nowintheater from './Nowintheater'
import {Switch,NavLink,Route} from 'react-router-dom'
import One from './One'
class Book extends Component{
	render(){
		return (<div>
			
				<NavLink to='/one'></NavLink>
				
				
      			<Switch>
      				<Route path='/movie' component={Movie} />
      				<Route path='/nowintheater/:name?' component={Nowintheater} />
      				
      				
      				<Route path='/one' component={One} />
							<Route path='/two/:id' component={Two} />
							<Route component={One} />
							
				</Switch>
		</div>)
	}
}

export default Book
