import React, { Component } from 'react';
import './App.css';
import {Switch,NavLink,Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './close-nav.css'
import Book from './Book'
//https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=android&callback=jsonp3&start=0&count=8&loc_id=108288&_=0
class App extends Component {
	constructor(props){
		super(props)
		this.close=this.close.bind(this)
		this.open=this.open.bind(this)
		
	}
	close(){
		document.getElementById('m').style.display='none'
		document.getElementById('TalionNav').style.display='block'
		
	}
	open(){
		document.getElementById('m').style.display='block'
		document.getElementById('TalionNav').style.display='none'
	}
	
	
  render() {
    return (
      <div className="App">
      	<div id='TalionNav' style={{display:'none'}}>
      		<header className='TalionNav is-active'>
      			<div className='TalionNav-secondary'>
      				<a href="javascript:;" onClick={this.open} className="close-nav">关闭</a>
      				<form action="/search" method="GET"><div><input name="query" type="search" /></div></form>
      				<ul>
      					<li>
      						<div>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(35, 132, 232)'}}>电影</strong>
	      							<span>影院热映</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(230, 70, 126)'}}>同城</strong>
	      							<span>周末活动</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(159, 120, 96)'}}>阅读</strong>
	      							<span>电子书</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(225, 100, 77)'}}>广播</strong>
	      							<span>友邻动态</span>
      							</a>
      						</div>
      					</li>
      					<li>
      						<div>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(122, 106, 219)'}}>电视</strong>
	      							<span>正在热播</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(42, 184, 204)'}}>小组</strong>
	      							<span>志趣相投</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(87, 116, 197)'}}>游戏</strong>
	      							<span>虚拟世界</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(64, 207, 169)'}}>FM</strong>
	      							<span>红心歌单</span>
      							</a>
      						</div>
      					</li>
      					<li>
      						<div>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(159, 120, 96)'}}>图书</strong>
	      							<span>畅销排行</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(244, 143, 46)'}}>音乐</strong>
	      							<span>新碟榜</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(89, 108, 221)'}}>应用</strong>
	      							<span>玩手机</span>
      							</a>
      							<a href="javascript:;" target="_blank">
	      							<strong style={{color: 'rgb(66, 189, 86)'}}>豆品</strong>
	      							<span>生活美学</span>
      							</a>
      						</div>
      					</li>
      				</ul>	
      				
      				<div className='navBottom'>
      					<div className='nav-item'>
      						<a className="toLogin" href="javascript:;">登录豆瓣</a>
      				</div>
      					<div className='nav-item'>
      						<a className="toLogin" href="javascript:;">使用桌面版</a>
      						<a className="toPC">使用豆瓣App</a>
      					</div>
      					
      				</div>
      				
      			</div>
      			<div className='TalionNav-layer'></div>
      		</header>
      	</div>
      	
      	
      	
      		<div id='m'>
				      <div className='TalionNav'>
								<div className='TalionNav-primary'>
									<h1>豆瓣</h1>
									<nav>
										<ul>
											<li><NavLink style={{color:'#2384E8'}} to='/movie'>电影</NavLink></li>
											<li><NavLink style={{color:'#9F7860'}} to='/one'>图书</NavLink></li>
											<li><NavLink style={{color:'#E4A813'}} to=''>广播</NavLink></li>
											<li><NavLink style={{color:'#2AB8CC'}} to=''>小组</NavLink></li>
											<span onClick={this.close}><FontAwesomeIcon icon="stroopwafel" /></span>
										</ul>
									</nav>
								</div>
						</div>
		      	<Book />
      </div>	
      </div>
    );
  }
}

export default App;
