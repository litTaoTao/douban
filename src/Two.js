import React,{Component} from 'react'
import './App.css'
import './two.css'
import axios from 'axios'


//正则
 function change(r){
 	var reg=/<div.*>([\s\S]+)<\/div>/;
 
 	var arr=reg.exec(r);
 	return arr;
 }
 
 
 
class Two extends Component{
	constructor(props){
		super(props)
		//console.log(props)
		this.state={
			id:props.match.params.id,
			list:[]
		}
		let id=this.state.id
		console.log(props.match.params.id)
	}
	componentWillMount(){
		this.getData(this.state.id)
	}
	getData(id){
		axios.get("/db/rexxar/api/v2/elessar/subject/"+id
		).then((res)=>{
				
			this.setState({
				list:res.data
			})
			console.log(this.state.list)
		})
	}
	
	render(){
		let nr=this.state.list
		//console.log(nr)
		
		
		document.title=nr.title+'-豆瓣'
		
		
		
		let value=nr.extra?(nr.extra.rating_group?(nr.extra.rating_group.rating?nr.extra.rating_group.rating.value:''):''):''
		let count=nr.extra?(nr.extra.rating_group?(nr.extra.rating_group.rating?nr.extra.rating_group.rating.count:''):''):''
		let infoOne=nr.extra?(nr.extra.info?(nr.extra.info?(nr.extra.info[0]?nr.extra.info[0][1]:''):''):''):''
		let infoTwo=nr.extra?(nr.extra.info?(nr.extra.info?(nr.extra.info[1]?nr.extra.info[1][1]:''):''):''):''
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		return nr.extra?<div>
			<div className='card2'>
				<h1 className='title'>{nr.title}</h1>
				<section className='subject-info'>
					<div className='right'>
						<img style={{width:'100px'}} src={nr.cover_img.url} />
					</div>
					<div className='left'>
						<p className='rating'>
							<span>
								<span className='star'></span>
								<span className='star'></span>
								<span className='star'></span>
								<span className='star'></span>
								<span className='star'></span>
							</span>
							<strong style={{padding:'0 8px 0 5px',color:'#494949',fontWeight:'normal'}}>{value}</strong>
							<span style={{color:'#aaa'}}>{count?count+'人评价':''}</span>
						</p>
						<p className='meta'>
						{infoOne} / {infoTwo} / 415页 / 精装  / 168 / 2018-6
						</p>
					</div>
				</section>
				<div className='vendors-link-group'>
					<section className='vendors-link' id='other-vendors' style={{display:'block'}}>
						<span className='link'>
							<span className='text'>电子书/纸质版购买</span>
							<span className='info'>京东商城 119.50元起</span>
						</span>
					</section>
				</div>
				<div className='mark-item'>
					<a href='javascript'>想读</a>
					<a href='javascript'>在读</a>
					<a href='javascript'>读过</a>
				</div>
				<section id='channel_tags'>
					<h2>所属频道</h2>
					<ul>
						{
							Object.keys(nr.tags).map((item)=>{
								return <li className='channel_tag' key={nr.tags[item].id}>{nr.tags[item].name} ></li>
							})
						}
					</ul>
				</section>
				<section className='subject-intro'>
					<h2>{nr.title}的内容简介</h2>
					
					
					
					<p className='bd'>{
						change(nr.desc)?change(nr.desc)[1]:''
					
					}</p>
					
					
				</section>
			</div>
		</div>:''
	}
}

export default Two





