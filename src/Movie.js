import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
import './App.css'
import {NavLink} from 'react-router-dom'

// 解决403图片缓存问题
function   getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 7 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }


class Movie extends Component{
	constructor(props){
		super(props)
		
		this.state={
			list:'',
			listT:'',
			listH:''
		}
	}
	
		componentWillMount(){
			fetchJsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0')
		  .then((response)=>{
		    return response.json()
		  }).then((json)=>{
		   // console.log(json); // 在此处进行接收数据之后的操作
		    this.setState({
		    	list:json.subject_collection_items

		    })
		   //console.log(this.state.list)
		  })
		 
		  fetchJsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&start=0&count=8&loc_id=108288&_=0')
		    .then((response)=>{
		      return response.json()
		    }).then((json)=>{
		     // console.log(json); // 在此处进行接收数据之后的操作
		      this.setState({
		      	listT:json.subject_collection_items

		      })
		   //   console.log(this.state.listT)
		    })
		    
		      fetchJsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&start=0&count=8&loc_id=108288&_=0')
		    .then((response)=>{
		      return response.json()
		    }).then((json)=>{
		     // console.log(json); // 在此处进行接收数据之后的操作
		      this.setState({
		      	listH:json.subject_collection_items

		      })
		     // console.log(this.state.listH)
		    })
		}
		 
		
	render(){
		//console.log(this.state.list)
		//let a=(this.state.list instanceof Object )
		//console.log(a)
		const m1=this.state.listT
		const m=this.state.list
		const m2=this.state.listH
		
		return (<div>
			<div className='card'>
				<section>
					<header>
						<h2>影院热映</h2> 
						<NavLink to='/nowintheater/movie_showing'>更多</NavLink>
					</header>
					<div className='section-content'>
						<ul className='row items'>
							{
								Object.keys(m).map((item,index)=>{
									return (
										<li className='item'  key={m[item].id}>
											<NavLink to={"/two/"+m[item].id}><img className='item-poster' src={getImages(m[item].cover.url)} /></NavLink>
											<span className="item-title">{m[item].title}</span>
											<p>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='num'> 9.0</span>
											</p>
											<div className='rank'></div>
										</li>
									) 
								})
							}
						
						</ul> 
						
						
						
					</div>
				</section>
			</div>
			
			<div className='card'>
				<section>
					<header>
						<h2>免费在线电影</h2> 
						<NavLink to='/nowintheater/movie_free_stream'>更多</NavLink>
					</header>
					<div className='section-content'>
						<ul className='row items'>
							{
								Object.keys(m1).map((item,index)=>{
									return (
										<li className='item'  key={m1[item].id}>
											<NavLink to={"/two/"+m1[item].id}><img className='item-poster' src={getImages(m1[item].cover.url)} /></NavLink>
											<p>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='stars'></span>
												<span className='num'> 9.0</span>
											</p>
											<span className="item-title">{m1[item].title}</span>
											<div className='rank'></div>
										</li>
									) 
								})
							}
						
						</ul> 
						
						
						
					</div>
				</section>
			</div>
			
			<div className='card'>
				<section>
						<header>
							<h2>新片速递</h2> 
							<NavLink to='/nowintheater/movie_latest'>更多</NavLink>
						</header>
					<ul className='row items'>
						{
							Object.keys(m2).map((item,index)=>{
										return (
											<li className='item'  key={index}>
												<NavLink to={"/two/"+m2[item].id}><img className='item-poster' src={getImages(m2[item].cover.url)} /></NavLink>
												<span className="item-title">{m2[item].title}</span>
												<p>
													<span className='stars'></span>
													<span className='stars'></span>
													<span className='stars'></span>
													<span className='stars'></span>
													<span className='stars'></span>
													<span className='num'> 9.0</span>
												</p>
												<div className='rank'></div>
											</li>
										) 
									})
						}
					</ul>
				</section>
			</div>
			
			
			<div className='card'>
				<section className='interests'>
					<header>
						<h2>发现好电影</h2> 
						<NavLink to='/nowintheater'>更多</NavLink>
					</header>
					<ul>
						<li><a href='javascript:;'>同时入选IMDB250和豆瓣电影250的电影</a></li>
						<li><a href='javascript:;'>带你进入不正常的世界</a></li>
						<li><a href='javascript:;'>用电【影】来祭奠逝去的岁月</a></li>
						<li><a href='javascript:;'>女孩们的故事【电影】</a></li>
						<li className='line'></li>
						<li><a href='javascript:;'>使用 App 【找电影】功能</a></li>
						<li><a href='javascript:;'>科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
						<li><a href='javascript:;'>美国生活面面观</a></li>
						<li><a href='javascript:;'>2015终极期待</a></li>
						<li><a href='javascript:;'>经典韩国电影——收集100部</a></li>
						
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
							<li><a href='javascript:;'>经典<span></span></a></li>
							<li><a href='javascript:;'>冷门佳片<span></span></a></li>
							<li><a href='javascript:;'>豆瓣高分<span></span></a></li>
							<li><a href='javascript:;'>动作<span></span></a></li>
							<li><a href='javascript:;'>喜剧<span></span></a></li>
							<li><a href='javascript:;'>爱情<span></span></a></li>
							<li><a href='javascript:;'>悬疑<span></span></a></li>
							<li><a href='javascript:;'>恐怖<span></span></a></li>
							<li><a href='javascript:;'>科幻<span></span></a></li>
							<li><a href='javascript:;'>治愈<span></span></a></li>
							<li><a href='javascript:;'>文艺<span></span></a></li>
							<li><a href='javascript:;'>成长<span></span></a></li>
							<li><a href='javascript:;'>动画<span></span></a></li>
							<li><a href='javascript:;'>华语<span></span></a></li>
							<li><a href='javascript:;'>欧美<span></span></a></li>
							<li><a href='javascript:;'>韩国<span></span></a></li>
							<li><a href='javascript:;'>日本<span></span></a></li>
							
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
export default Movie