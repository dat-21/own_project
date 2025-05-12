import React from 'react'
import { BsApple } from "react-icons/bs";
import { BsAirplaneFill } from "react-icons/bs";
// const Content = (props) => {
// //vào nguồn trang để xem các thuộc tính được truyền vào component
//   console.log(props) // props là đối tượng chứa tất cả các thuộc tính được truyền vào component

//   console.log(props.chucai) // props là đối tượng chứa tất cả các thuộc tính được truyền vào component

//   let chucai = props.chucai; // lấy giá trị của thuộc tính chucai trong props
//   let so = props.so; // lấy giá trị của thuộc tính so trong props

//   return (
//     <div className='box'>{props.chucai} va {props.so}</div>
//   )

// }

// export default Content





//nên dùng cách thứ 2 vì nó dễ đọc hơn và dễ bảo trì hơn
//Cách thứ 2 có thể dùng cách khác để dành cho việc làm đối với nhiều biến 
const Content = ({ chucai, so, isActive }) => {

  //vào nguồn trang để xem các thuộc tính được truyền vào component
  //console.log(chucai) // props là đối tượng chứa tất cả các thuộc tính được truyền vào component
  //console.log(so) // props là đối tượng chứa tất cả các thuộc tính được truyền vào component

  //isActive là một biến boolean, nếu isActive = true thì sẽ có class box--active, nếu isActive = false thì sẽ không có class box--active
  //console.log(isActive) // props là đối tượng chứa tất cả các thuộc tính được truyền vào component


  let mau = "";
  if (isActive) {
    //nếu isActive = true thì sẽ có class box--active
    mau = "box--active";
  }
  else {
    mau = ""; //nếu isActive = false thì sẽ không có class box--active
  }


  //trong return không được dùng if, for, while, do while, switch case, try catch, break, continue, return
  //nên dùng toán tử 3 ngôi để thay thế cho if else
  return (
    <>
      {/* <div className='box box--active'>{chucai} va {so}</div> */}
      {/* <div className={"box "+ (isActive ? "box--active" : "")}>{chucai} va {so}</div> {/* cách viết thứ 2 vẫn ra kết quả như cũ */}
      <div className={"box " + mau}>
        {chucai} va {so} <BsApple style={{ color: "red", fontSize: "20px" }} /><BsAirplaneFill style={{ color: "blue", fontSize: "20px" }} />
        {/* cách viết thứ 3 nhưng dùng if else ở ngoài return vẫn ra kết quả như cũ. thêm icon cho đẹp */}

      </div>


    </>
  )

}

export default Content




// //Destructing (phá vỡ cấu trúc)

// import React from 'react'

// const Content = (props) => {
// //vào nguồn trang để xem các thuộc tính được truyền vào component
//   console.log(props) // props là đối tượng chứa tất cả các thuộc tính được truyền vào component
//   const {chucai, so} = props; // lấy giá trị của thuộc tính chucai trong props
//   return (
//     <div className='box'>{props.chucai} va {props.so}</div>
//   )

// }

// export default Content
