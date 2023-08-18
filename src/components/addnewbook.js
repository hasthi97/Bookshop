import React, { useState } from 'react'
import axios from "axios";



function Addnewbook() {


  const [name,setName] = useState("");
  const [author,setAuthor] = useState("");
  const [pages,setPages] = useState("");
  const [genres,setGenres] = useState("");

  

  
function myfunction(e){

  e.preventDefault();
  
  const newBook = {

        name,
        author,
        pages,
        genres

        

  }

  
  axios.post("http://localhost:3000/book/add",newBook).then(()=>{
            alert("Book Added");            
  }).catch((err)=>{
            alert(err);
  })

 

}
  return (

        <div className="Modify">
        <form className="register-form" onSubmit={myfunction}>
            
                        <label for = "name">Book Name :</label>
                        <input type="text"  placeholder='Enter the book name'
                        onChange={(e) =>{
                            setName(e.target.value);
                        }}/>
                    
                    
                        <label for = "name">author Name :</label>
                        <input type="text" placeholder='Enter the Author name'
                        onChange={(e) =>{
                          setAuthor(e.target.value);
                      }}/>
                    
                    
                        <label for = "name">Pages :</label>
                        <input type="text" placeholder='Enter the number of pages :'
                        onChange={(e) =>{
                          setPages(e.target.value);
                      }}/>
                    
                        <label for = "name">Genres:</label>
                        <input type="text" placeholder='Enter the Genres :'
                        onChange={(e) =>{
                          setGenres(e.target.value);
                      }}/>


                        <label></label>

                        <button >Add Book</button>
                   
        </form>
        </div>
  ) 
  
}

export default Addnewbook;