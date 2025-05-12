import React from 'react'

const Menu = () => {
    const arrayMenu = [
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Liên hệ",
        "Giới thiệu",
    ]

    //key để phân biệt các phần tử trong mảng, key không được lặp lại trong 1 component
    //key không được truyền xuống component con, key chỉ dùng cho component cha
    //item và index là 2 tham số của hàm map, item là giá trị của phần tử trong mảng, index là vị trí của phần tử trong mảng
    //map là hàm dùng để lặp qua các phần tử trong mảng, hàm map sẽ trả về 1 mảng mới
    //key là thuộc tính duy nhất của mỗi phần tử trong mảng, key không được lặp lại trong 1 component
    return (
        <>
            {/* Nếu dùng dấu ngoặc nhọn thì phải dùng return */}
            <ul>
                {arrayMenu.map((item, index) => {
                    return (

                        //index là vị trí của phần tử trong mảng, item là giá trị của phần tử trong mảng
                        //key = {index} là key của phần tử trong mảng, để biết được số thứ tự của phần tử trong mảng và theo từng index đó có thể lấy được giá trị của phần tử trong mảng
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>


            <ul>
                {arrayMenu.map((item, index) => (
                    //không cần phải viết return, vì arrow function có 1 dòng thì không cần phải viết return
                    <li key={index}>
                        {item}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default Menu
