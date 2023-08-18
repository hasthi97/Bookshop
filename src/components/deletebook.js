import React from 'react'

function Deletebook() {
  return (
    <div className='overlay'>
        <div className='popup'>
            <h2>Please Insert The Book Details</h2>
            <a href='#' className='close'>&times;</a>

            <div className='cont'>
                <div className='contain'>
                        <form>
                                <label>Book Name :</label>
                                <input type='text' />
                                <label>Author Name :</label>
                                <input type='text' />





                        </form>


                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Deletebook