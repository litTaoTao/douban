import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
import './App.css'
import Header from './Header'
import Middle from './Middle'
import Foot from './Foot'

class One extends Component{
	constructor(props){
		super(props)
		
		this.state={
			listT:'',
			listH:''
		}
	}
	
		componentWillMount(){
			
		 
		  fetchJsonp('https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=android&start=0&count=8&loc_id=0&_=0')
		    .then((response)=>{
		      return response.json()
		    }).then((json)=>{
		     // console.log(json); // 在此处进行接收数据之后的操作
		      this.setState({
		      	listT:json.subject_collection_items

		      })
		     // console.log(this.state.listT)
		    })
		    
		      fetchJsonp('https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?os=android&start=0&count=8&loc_id=0&_=0')
		    .then((response)=>{
		      return response.json()
		    }).then((json)=>{
		     // console.log(json); // 在此处进行接收数据之后的操作
		      this.setState({
		      	listH:json.subject_collection_items

		      })
		    //  console.log(this.state.listH)
		    })
		    
		}
		 
		
	render(){
		//console.log(this.state.list)
		//let a=(this.state.list instanceof Object )
		//console.log(a)
		const m1=this.state.listT
		const m2=this.state.listH
		
		return (<div>
				
				<Header />
				<Middle />
				<Foot />
			
			
			
			
			<div className='card'>
				<section className='interests'>
					<header>
						<h2>发现好图书</h2> 
						<a>更多</a>
					</header>
					<ul>
						<li><a href='javascript:;'>小波看书</a></li>
						<li><a href='javascript:;'>村上春树周边</a></li>
						<li><a href='javascript:;'>我凭名字认定了你</a></li>
						<li><a href='javascript:;'>不可饶恕的女人们</a></li>
						<li className='line'></li>
						<li><a href='javascript:;'>爱欲书</a></li>
						<li><a href='javascript:;'>他们还写侦探小说书</a></li>
						<li><a href='javascript:;'>人生识字始优惠</a></li>
						<li><a href='javascript:;'>诗歌书店</a></li>
					</ul>
				</section>
			</div>
			
			<div className='card'>
				<section className='types'>
					<header>
						<h2>分类浏览</h2> 
						<a>更多</a>
					</header>
					<div className='section-content'>
						<ul className='type-list'>
							<li><a href='javascript:;'>小说<span></span></a></li>
							<li><a href='javascript:;'>爱情<span></span></a></li>
							<li><a href='javascript:;'>历史<span></span></a></li>
							<li><a href='javascript:;'>外国文字<span></span></a></li>
							<li><a href='javascript:;'>青春<span></span></a></li>
							<li><a href='javascript:;'>励志<span></span></a></li>
							<li><a href='javascript:;'>随笔<span></span></a></li>
							<li><a href='javascript:;'>传记<span></span></a></li>
							<li><a href='javascript:;'>推理<span></span></a></li>
							<li><a href='javascript:;'>旅行<span></span></a></li>
							<li><a href='javascript:;'>奇幻<span></span></a></li>
							<li><a href='javascript:;'>经营<span></span></a></li>
							
						</ul>
					</div>
				</section>
			</div>
			<div className='download-app'>
				<div className='info'>
					<img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width="48" />
					<div className='info-content'>
						<strong>豆瓣</strong>
						<div></div>
					</div>
				</div>
				<a href="https://www.douban.com/doubanapp/card/log?category=book_home&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1" rel="nofollow">去 App Store 免费下载 iOS 客户端</a>
			</div>
		</div>)
	}
}


export default One