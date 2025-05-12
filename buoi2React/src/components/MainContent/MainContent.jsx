import React from 'react'

let css = {
    backgroundColor: 'red',
    color: 'white',
    
  }


  let ten =' dat dep trai';

const MainContent = () => {
  return (


    <div className='box' style={css}> 
      xin chao react {ten} {/* {ten} là biến được tạo ở trên và gọi trong phần return */}
      </div> 


  )
}

export default MainContent