const NavicationMenu = function () {
  const handleOnClick = (event) => {
    console.log(event.target) // event là đối tượng chứa tất cả các thuộc tính của sự kiện
    alert("Oh La La") // alert là hàm hiển thị thông báo
    console.log("Hello") // console.log là hàm hiển thị thông báo trên console
  }




  const handleOnChange = (event) => {
    console.log("OnChange") // event là đối tượng chứa tất cả các thuộc tính của sự kiện
    console.log(event.target.value) // event.target.value là giá trị của input
  }




  const handleOnForcus = (event) => {
    console.log("OnFocus") // event là đối tượng chứa tất cả các thuộc tính của sự kiện
    console.log(event.target.value) // event.target.value là giá trị của input
    console.log(event.target.classList.add("input--active")) // event.target.classList là danh sách các class của input
  }




  const handleOnBlur = (event) => {
    console.log("OnBlur") // event là đối tượng chứa tất cả các thuộc tính của sự kiện
    console.log(event.target.value) // event.target.value là giá trị của input
    console.log(event.target.classList.remove("input--active")) // event.target.classList là danh sách các class của input
  }

  const handleOnSubmit = (event) => {
    event.preventDefault() // ngăn chặn hành vi mặc định của form
    console.log("OnSubmit") // event là đối tượng chứa tất cả các thuộc tính của sự kiện
    console.log(event.target.value) // event.target.value là giá trị của input
  }


  return (
    <>
      <div className="box Nav">
        <div>Navication Menu</div>
        <div className="Input-group">
          <button onClick={handleOnClick}>Click me</button>
          <label htmlFor="">Quanity</label>
          <input type="text" onChange={handleOnChange}
            aria-label="Quantity input"
            defaultValue={1}
            onFocus={handleOnForcus}
            onBlur={handleOnBlur} />
        </div>
      </div>


      <div className="box Nav">
        <div>Navication Menu</div>
        <form action="" onSubmit={handleOnSubmit}>
          <input
            type="text"
            onChange={handleOnChange}
            onFocus={handleOnForcus}
            onBlur={handleOnBlur}
          />
          <button onClick={handleOnClick}>Submit </button>
        </form>
      </div>
    </>
  );
}

export default NavicationMenu;

//onClick là thuộc tính của thẻ button, khi click vào button thì sẽ gọi hàm handleOnClick
//onChange là thuộc tính của thẻ input, khi thay đổi giá trị của input thì sẽ gọi hàm handleOnChange
//onSubmit là thuộc tính của thẻ form, khi submit form thì sẽ gọi hàm handleOnSubmit
//onFocus là thuộc tính của thẻ input, khi focus vào input thì sẽ gọi hàm handleOnFocus
//onBlur là thuộc tính của thẻ input, khi blur khỏi input thì sẽ gọi hàm handleOnBlur
