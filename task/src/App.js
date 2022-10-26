import React from 'react'
import './App.css';
// import bootstrap from 'bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Midcontent from './component/Midcontent';
import Header from './component/Header';


function App() {
  return (
    <div className="container">
    <Header/>
      <div className='mid_head '>
  <Midcontent poster='../assets/voda.png'
  heading='How to benefit by choosing Vodafone Idea family'
    para='Just in case you have missed your loan payment, we have just the right payment...'
    head1='Postpaid'
    head2='Postpaid'
    Date ='16 Aug 2022'
    button='Read More'></Midcontent>
    <div className='sidebar'>
      <h1 style={{fontSize:"24px"}}>Never Miss A Post!</h1>
      <p style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <input className='input' type= 'text' placeholder='E-mail'></input></div></div>
      <div className='sidebar_mid'><Midcontent poster='../assets/tv.png'
  heading='Are my mobile recharge transaction 100% secure and...'
    para='Just in case you have missed your loan payment, we have just the right payment...'
    head1='Cable TV Recharge'
    head2='Cable TV Recharge'
    Date ='16 Aug 2022'
    button='Read More'></Midcontent>
    <div className='side_mid'>
      <h1 style={{textDecoration: "underline"}}>Popular Blogs</h1>
      <div className='d-flex '>
      <img className='blog_logo' src='../assets/voda.png'></img>
      <h5 className='px-3 pt-2' style={{fontSize: "16px"}}>How to benefit by choosing Vodafone Idea family</h5>
   
    
      </div>
      <p className='para px-3 pt-3'>16 Aug 2022</p>
      
      <div className='d-flex '>
      <img  className='blog_logo' src='../assets/recharge.png'></img>
      <h5 className='px-3 pt-2' style={{fontSize: "16px"}}>Are my mobile recharge transaction 100% secure and...</h5>
      </div>
      <p className='para px-3 pt-3'>16 Aug 2022</p>

      <div className='d-flex '>
      <img className='blog_logo' src='../assets/crypto.jpg'></img>
      <h5 className='px-3 pt-2' style={{fontSize: "16px"}}>Find ways to invest safely in Cryptocurrency in India</h5>
      </div>
      <p className='para px-3 pt-2'>16 Aug 2022</p></div></div>
      <div className='middle'><Midcontent poster='../assets/crypto.jpg'
  heading='Find ways to invest safely in Cryptocurrency in India'
    para='Just in case you have missed your loan payment, we have just the right payment...'
    head1='Banking'
    head2='Banking'
    Date ='16 Aug 2022'
    button='Read More'></Midcontent></div>
      <div className='mid_foot'><Midcontent poster='../assets/recharge.png'
  heading='Are my mobile recharge transaction 100% secure and...'
    para='Just in case you have missed your loan payment, we have just the right payment...'
    head1='Cable TV Recharge'
    head2='Cable TV Recharge'
    Date ='16 Aug 2022'
    button='Read More'></Midcontent>
    <div className='sidebar_foot'>
      <h1 style={{textDecoration: "underline"}}>Follow Us</h1>
      <div>
      <img className='logo img-fluid' src='../assets/twitter.png'></img>
      <a href='https://twitter.com/payrupofficial'>https://twitter.com/payrupofficial</a></div>
      <div><img className='logo img-fluid' src='../assets/facebook.png'></img>
      <a href='https://www.facebook.com/payrupOfficial/'>https://www.facebook.com/payrupOfficial/</a></div>
      <div><img className='logo img-fluid' src='../assets/insta.jpg'></img>
      <a href='https://www.instagram.com/payrupofficial/'>https://www.instagram.com/payrupofficial/</a></div>
    </div>
    </div>
    
    </div>
  );
}

export default App;
