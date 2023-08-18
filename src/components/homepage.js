import React from 'react'
import imag from '../images/b.jpeg'

function Homepage() {
  return (
    
    <div className="main-header">
          <div className='header'>
           <input type="checkbox" id="check"/>
              <h4>BookHub Bookstore</h4>
              <h3>For All Your Reading Needs And Freshen Up Your Book Shelf</h3>
              <p>Reading is a very good habit that one needs to develop in life.<br/>
              Good books can inform you, enlighten you and lead you in the right<br/> direction.......</p>

              <div className='content'>
              <p>There is no better companion than a good book. Reading is important<br/>
              because it is good for your overall well-being. Once you start reading,<br/>
              you experience a whole new world. When you start loving the habit of reading<br/>
              you eventually get addicted to it. Reading develops language skills and vocabulary.<br/>
              Reading books is also a way to relax and reduce stress. It is important to read<br/>
              a good book at least for a few minutes each day to stretch the brain muscles<br/>
              for healthy functioning.</p>
              </div>
              <label for="check" className='btn'>Read More</label>
              
              <div className='home'>
              <img src={imag} height={"700x"} width={"800px"}/>
              </div>

          </div>
    </div>

    

   
  )
}

export default Homepage