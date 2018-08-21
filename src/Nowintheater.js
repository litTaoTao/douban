import React,{Component} from 'react'
//https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&for_mobile=1&start=0&count=18&loc_id=108288&_=0
//https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&for_mobile=1&start=0&count=18&loc_id=108288&_=0
//https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&for_mobile=1&start=0&count=18&loc_id=108288&_=0
import axios from 'axios'
import './Nowintheater.css'


class Nowintheater extends Component{
	constructor(props){
		super(props)
		console.log(props)
		this.state={
			list:this.props.match.params.name
		}
	}
	
	
	componentWillMount(){
		axios.get("/db/rexxar/api/v2/subject_collection/"+this.state.list+"/items",{
			params:{
				os:'ios',
				for_mobile:1,
				start:0,
				count:18,
				loc_id:108288,
				_:0
			}
		}).then((res)=>{
				
			this.setState({
				list:res.data
			})
			console.log(this.state.list)
		})
	}
	render(){
				let n=this.state.list.subject_collection_items
				return (
					n?<div>
						<div id='app'>
							<h1>{this.state.list.subject_collection.name}</h1>
							
							<section id='list' className='grid'>
							{
								
								Object.keys(this.state.list.subject_collection_items).map((item,index)=>{
									return <div key={index} className="item">
										<div className='cover'>
											<div className='wp ratio3_4'>
												<img className='img-show' src={n[item].cover.url} />
											</div>
										</div>
										<div className='info'></div>
										
									</div>
								})
							}
								
							</section>
						</div>
					</div>:'')
	}
}
export default Nowintheater

