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


class Foot extends Component{
	constructor(props){
		super(props)
		this.state={
			list:''
		}
	}
	componentWillMount(){
		    fetchJsonp('https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?os=android&start=0&count=8&loc_id=0&_=0')
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
		const m2=this.state.list
		return (<div>
			<div className='card'>
				<section>
						<header>
							<h2>豆瓣书店</h2> 
							<a>更多</a>
						</header>
					<ul className='row items'>
						{
							Object.keys(m2).map((item,index)=>{
										return (
											<li className='item'  key={index}>
												<NavLink to={"/two/"+m2[item].id}><img className='item-poster' src={getImages(m2[item].cover.url)} /></NavLink>
												<span className="item-title">{m2[item].title}</span>
												<div className='item-rating'>
													<div className='rank'>
														<span className="item-title">¥ {m2[item].price}</span>
													</div>
												</div>
												<div className='rank'></div>
											</li>
										) 
									})
						}
					</ul>
				</section>
			</div>
		</div>)
	}
}

export default Foot