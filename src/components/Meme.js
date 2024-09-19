import React from 'react'
import { useEffect,useState } from 'react'
import memesData from './memesData.js'
export default function Meme() {
    // useEffect({
        let [imgUrl,setimgUrl]=useState('');
        let [topText,settopText]=useState('')
        let [btmText,setbtmText]=useState('')
        

    const Click=()=>{
    let arrOfmemes=memesData.data.memes
    let randmeme=Math.floor(Math.random() * arrOfmemes.length)
    let url= arrOfmemes[randmeme].url
    imgUrl=setimgUrl(url)
    btmText=setbtmText('Hello')
}    
function topTxt(e){
    topText=settopText(e.target.value)
}
function btmTxt(e){
    btmText=setbtmText(e.target.value)
}

  return (
    <div className='container'>
      <div >
        <div className="row my-4">
            <div className="col-lg-6 my-2">
                <input class="form-control" type="text" placeholder="Enter Top text" aria-label="default input example" onKeyDown={topTxt} ></input>
            </div>
            <div className="col-lg-6 my-2">
                <input class="form-control" type="text" placeholder="Enter Bottom text" aria-label="default input example" onKeyDown={btmTxt}></input>
            </div>
            <button className='btn btn-purple text-light p-2 fw-bold my-2' onClick={Click}>Get a new meme image  &#128444; </button>
        </div>
 <div className='position-relative'>
    <img src={imgUrl} alt="" className='w-100'/>
    <div className='w-100 h-100 position-absolute top-0 text-center d-flex flex-column justify-content-between text-light'>
        <h1 className=' display-1 fw-bold' style={{textShadow:'3px 3px black'}}>{topText}</h1>
        <h1 className=' display-1 fw-bold' style={{textShadow:'3px 3px black'}}>{btmText}</h1>
    </div>
 </div>
      </div>
    </div>
  )
}
