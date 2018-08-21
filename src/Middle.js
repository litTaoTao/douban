import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
import {NavLink} from 'react-router-dom'
// 解决403图片缓存问题
function   getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 7 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }
class Middle extends Component{
	constructor(props){
		super(props)
		this.state={
			list:''
		}
	}
	componentWillMount(){
		fetchJsonp('https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=android&start=0&count=8&loc_id=0&_=0')
		    .then((response)=>{
		      return response.json()
		    }).then((json)=>{
		     // console.log(json); // 在此处进行接收数据之后的操作
		      this.setState({
		      	list:json.subject_collection_items

		      })
		   //   console.log(this.state.list)
		    })
	}
	
	render(){
		const m1=this.state.list
		return (<div>
			<div className='card'>
				<section>
					<header>
						<h2>最受关注图书｜非虚构类</h2> 
						<a>更多</a>
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
		</div>)
	}
}

export default Middle