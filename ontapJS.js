var dat = 19
function ontapJS() {
    var x = "ngu";
    return x;
}
const a = 1;
// a = 2; // Error: Assignment to constant variable. sẽ bị lỗi nếu a có 2 giá trị khác nhau


console.log('ontapJS', ontapJS());


// mảng đối tượng trong đối tượng có Objects và trong đó có những label khác nhau và có những giá trị cụ thể khác nhau
const doituong = [
    // đối tượng đầu tiên(Object)
    {
        name: 'nguyen van a',
        age: 18,
        address: 'ha noi',
        phone: '0123456789',
        email: 'datdeptrai@gmail.com',
        do_ngu: 'rất ngu'
    }
    // đối tượng thứ hai(Object)
    , {
        name: 'nguyen van b',
        age: 19,
        address: 'ha tay',
        phone: '0123456789',
        email: 'datngu@gmail.com',
        do_ngu: 'ngu bình thường',
    }
]


console.log('doituong', doituong); // in ra đối tượng đầu tiên và thứ hai
console.log('ten', doituong[0].name); // in ra đối tượng đầu tiên

//vòng lặp for in
for (var i in doituong) {
    console.log('i', i); // 0 1 in ra chỉ số của đối tượng đầu tiên và thứ hai
    console.log('doituong[i]', doituong[i]); // in ra đối tượng đầu tiên và thứ hai
    console.log('doituong[i].name', doituong[i].name); // in ra tên của đối tượng đầu tiên và thứ hai
}

//vòng lặp for of (in ra giá trị của đối tượng đầu tiên và thứ hai)
for (var i of doituong) {
    console.log('i', i); // in ra đối tượng đầu tiên và thứ hai
    console.log('i.name', i.name); // in ra tên của đối tượng đầu tiên và thứ hai
}

// vòng lặp for of với destructuring
//destructuring là một tính năng của ES6 cho phép bạn lấy giá trị của các thuộc tính trong một đối tượng và gán chúng vào các biến riêng biệt
// trong trường hợp này, destructuring được sử dụng để lấy giá trị của các thuộc tính name, age, address, phone, email trong đối tượng doituong
for (var { name, age, address, phone, email } of doituong) {
    console.log('name', name); // in ra tên của đối tượng đầu tiên và thứ hai
    console.log('age', age); // in ra tuổi của đối tượng đầu tiên và thứ hai
    console.log('address', address); // in ra địa chỉ của đối tượng đầu tiên và thứ hai
    console.log('phone', phone); // in ra số điện thoại của đối tượng đầu tiên và thứ hai
    console.log('email', email); // in ra email của đối tượng đầu tiên và thứ hai
}


// vòng lặp for of với destructuring và rest parameter
for (var { name, age, address, phone, email, ...rest } of doituong) {
    console.log('name', name); // in ra tên của đối tượng đầu tiên và thứ hai
    console.log('age', age); // in ra tuổi của đối tượng đầu tiên và thứ hai
    console.log('address', address); // in ra địa chỉ của đối tượng đầu tiên và thứ hai
    console.log('phone', phone); // in ra số điện thoại của đối tượng đầu tiên và thứ hai
    console.log('email', email); // in ra email của đối tượng đầu tiên và thứ hai
    console.log('rest', rest); // in ra những giá trị còn lại của đối tượng đầu tiên và thứ hai
}


//expression function
const expressionFunction = function (a, b) {
    return a + b;
}

console.log('expressionFunction', expressionFunction(1, 2)); // in ra kết quả của hàm expressionFunction

//declaration function 
const declarationFunction = function declarationFunction(a, b) {
    return a + b;
}
console.log('declarationFunction', declarationFunction(1, 2)); // in ra kết quả của hàm declarationFunction




//arrow function (sử dụng rất nhiều trong reactjs)
//arrow function không có this, không có arguments, không có super, không có new.target
const arrowFunction = (a, b) => {
    return a + b;
}
console.log('arrowFunction', arrowFunction(1, 2)); // in ra kết quả của hàm arrowFunction


//arrow function với destructuring
const arrowFunctionDestructuring = ({ name, age, address, phone, email }) => {
    console.log('name', name); // in ra tên của đối tượng đầu tiên và thứ hai
    console.log('age', age); // in ra tuổi của đối tượng đầu tiên và thứ hai
    console.log('address', address); // in ra địa chỉ của đối tượng đầu tiên và thứ hai
    console.log('phone', phone); // in ra số điện thoại của đối tượng đầu tiên và thứ hai
    console.log('email', email); // in ra email của đối tượng đầu tiên và thứ hai
}
// in ra đối tượng đầu tiên và thứ hai
arrowFunctionDestructuring(doituong[0]); // in ra đối tượng đầu tiên
arrowFunctionDestructuring(doituong[1]); // in ra đối tượng thứ hai


//trycatch là một cấu trúc điều khiển trong javascript, được sử dụng để xử lý lỗi trong đoạn mã
//trycatch giúp bạn kiểm soát lỗi và xử lý chúng một cách hợp lý, thay vì để chương trình bị dừng lại khi gặp lỗi
try {
    //đoạn code có thể xảy ra lỗi
    let x= 10;
    let y = 20;
    let result = x / y;
    console.log('result', result); // in ra kết quả của phép chia
}catch (error) {
    console.log('error', error); // in ra lỗi của hàm trycatch
}   
finally {
    console.log('hoàn tất xử lí'); // in ra thông báo của hàm finally, luôn luôn được thực thi (dù có lỗi hay không)
}


//làm việc với Objects
//Objects là một kiểu dữ liệu trong javascript, là một tập hợp các thuộc tính (properties) và phương thức (methods) của đối tượng đó
//Objects có thể được tạo ra bằng cách sử dụng từ khóa new hoặc bằng cách sử dụng dấu ngoặc nhọn {}
//Objects có thể chứa các thuộc tính và phương thức khác nhau, và có thể được truy cập bằng cách sử dụng dấu chấm (.) hoặc dấu ngoặc vuông ([])
var in4 ={
    ten: 'nguyen van TEN',
    tuoi: 18,   
    dia_chi: 'ha noi',
    so_dien_thoai: '0123456789',
    email: 'hihi@gamil.com'
}
console.log('in4', in4); // in ra đối tượng in4
console.log('in4.ten', in4.ten); // in ra tên của đối tượng in4

var keyFind = 'ten'; 
// keyFind là một biến chứa giá trị của thuộc tính ten trong đối tượng in4 (là một key trong đối tượng in4 nên không thể dùng dấu chấm để truy cập vào thuộc tính này)
console.log('in4[keyFind]', in4[keyFind]); // in ra tên của đối tượng in4
//Xoá một key trong đối tượng
delete in4.ten; // xóa key ten trong đối tượng in4
console.log('in4', in4); // in ra đối tượng in4 sau khi xóa key ten
//thêm key vào đối tượng
in4.ten = 'nguyen van dat dep trai'; // thêm key ten vào đối tượng in4

 

//Parameter 
//Parameter là một biến được định nghĩa trong hàm, được sử dụng để nhận giá trị từ bên ngoài khi gọi hàm
//Parameter có thể có nhiều kiểu dữ liệu khác nhau, bao gồm số, chuỗi, đối tượng, mảng, hàm, v.v.
//Parameter có thể được định nghĩa với giá trị mặc định, nếu không có giá trị nào được truyền vào khi gọi hàm
const tinhtong = (a,b) => {
    return a + b; // trả về tổng của hai số a và b
}
console.log('tinhtong', tinhtong()); // không truyền giá trị nào vào hàm, sẽ trả về NaN (Not a Number)
console.log('tinhtong', tinhtong(1,2)); // truyền giá trị vào hàm, sẽ trả về 3 (1 + 2)
// nên truyền giá trị mặc định vào hàm để hàm có thể thực hiện phép tính và trả về kết quả
const tinhtong1 = (a=0,b=0) => {
    return a + b; // trả về tổng của hai số a và b
}
console.log('tinhtong1', tinhtong1()); // không truyền giá trị nào vào hàm, sẽ trả về 0 (0 + 0)




//spred syntax (cú pháp dấu ba chấm) là một tính năng của ES6 cho phép bạn sao chép các phần tử trong một mảng hoặc đối tượng và gán chúng vào một mảng hoặc đối tượng mới
//spred syntax được sử dụng để sao chép các phần tử trong một mảng hoặc đối tượng và gán chúng vào một mảng hoặc đối tượng mới
//dành cho các trường hợp bạn muốn sao chép các phần tử trong một mảng hoặc đối tượng và gán chúng vào một mảng hoặc đối tượng mới mà không làm thay đổi mảng hoặc đối tượng gốc
const obj1 = {name:'dat', tuoi: 20}; 
const obj2 = {do_ngu:'hehe', thanh_pho: 'dong hoi'};
const obj3 = {...obj1, ...obj2}; // sao chép các phần tử trong obj1 và obj2 và gán chúng vào obj3 (obj3 sẽ có các thuộc tính của cả obj1 và obj2 nhưng không có thuộc tính nào trùng nhau)
console.log('obj3', obj3); // in ra đối tượng obj3

let person ={name:'dat', age: 20};
let hobby = ['nghe nhac', 'di du lich'];
let personHobby = {...person, hobby}; // sao chép các phần tử trong person và gán chúng vào personHobby (personHobby sẽ có các thuộc tính của person và hobby)
let personHobby1 = {...person, ...hobby}; // sao chép các phần tử trong person và gán chúng vào personHobby1 (personHobby1 sẽ có các thuộc tính của person và hobby nhưng không có thuộc tính nào trùng nhau)

console.log('personHobby', personHobby); // in ra đối tượng personHobby
console.log('personHobby1', personHobby1); // in ra đối tượng personHobby1




//Destructuring phá vỡ cấu truc đối tượng thành các biến riêng biệt
//thay vì phải lấy hết thì có thể lấy một số thuộc tính trong đối tượng và gán chúng vào các biến riêng biệt
let arrs = [10,20,30,40,50]; // mảng có 5 phần tử
let [a1, a2, a3, a4, a5] = arrs; // phá vỡ cấu trúc mảng thành các biến riêng biệt
console.log('a1', a1); // in ra giá trị của biến a1 (10)



var tinhtong2 = (...arg) => {
    let tong;
    for(item of arg) { // arguments là một đối tượng giống như mảng chứa tất cả các tham số được truyền vào hàm
        tong += item; // cộng dồn các phần tử trong mảng arg vào biến tong
    }
    return tong; // trả về tổng của các phần tử trong mảng arg
}

let result = tinhtong2(1,2,3,4,5); // gọi hàm tinhtong2 và truyền vào 5 tham số
console.log('result', result); // in ra kết quả của hàm tinhtong2 (15)
// hàm tinhtong2 có thể nhận nhiều tham số khác nhau, không giới hạn số lượng tham số truyền vào hàm

//hoặc có thể cho thành một function khác để có thể sử dụng lại nhiều lần  
function tinhtong2() {
    let tong=0;
    for(item of arguments) { // arguments là một đối tượng giống như mảng chứa tất cả các tham số được truyền vào hàm
        tong += item; // cộng dồn các phần tử trong mảng arg vào biến tong
    }
    return tong; // trả về tổng của các phần tử trong mảng arg
}

let result1 = tinhtong2(1,2,3,4,5); // gọi hàm tinhtong2 và truyền vào 5 tham số
console.log('result', result); // in ra kết quả của hàm tinhtong2 (15)


function laysonguyenduong(value) {
    if (value < 0) { 
        console.log("khong phai so nguyen duong"); 
    } else {
        console.log("la so nguyen duong"); 
        return value;
    }
}

function hieudientichhaihinhvuong(r) {
    let Svt = 2 * r * 2 * r; // diện tích hình vuông
    let Svn = 2 * (1 / 2 * r * 2 * r); //diện tích hình vuông nhỏ
    return S = Svt - Svn; // trả về diện tích hình vuông lớn trừ đi diện tích hình vuông nhỏ
    console.log("dien tich hinh vuong can tim: ", S); // in ra diện tích hình vuông lớn
}


let mang = [1, 2, 3, 4, 5]; 
function tinhtongcacphantutrongmang() { 
    let tong = 0; 
    for (let i = 0; i < mang.length; i++) { 
        tong += mang[i];
    }
    return tong; 
}

//Kiểm tra có phải là số nguyên tố hay không
function kiemtrasonguyento(n) {
    if (n < 2) {        
        console.log("khong phai so nguyen to");
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) {
            console.log("khong phai so nguyen to");
            return false; 
        }
    }
    console.log("la so nguyen to");
    return true; 
}



//giai thua
function giaiThua(n) {
    if (n < 0) {
        return -1; // không có giai thừa của số âm
    } else if (n === 0 || n === 1) {
        return 1; // giai thừa của 0 và 1 là 1
    } else {
        return n * giaiThua(n - 1); // đệ quy tính giai thừa
    }
}


// Kiểm tra năm nhuận
function kiemTraNamNhuan(nam) {
    if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
        console.log(nam + " là năm nhuận.");
        return true; // năm nhuận           
    }
    else {
        console.log(nam + " không phải là năm nhuận.");
        return false; // không phải năm nhuận
    }
}


// Kiểm tra số hoàn hảo
function kiemTraSoHoanHao(n) {
    let tong = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            tong += i;
        }
    }
    if (tong === n) {
        console.log(n + " là số hoàn hảo.");
        return true; // số hoàn hảo
    } else {
        console.log(n + " không phải là số hoàn hảo.");
        return false; // không phải số hoàn hảo
    }
}


// Kiểm tra số Armstrong
function kiemTraSoArmstrong(n) {
    let so = n.toString();
    let doDai = so.length;
    let tong = 0;
    for (let i = 0; i < doDai; i++) {
        tong += Math.pow(parseInt(so[i]), doDai);
    }
    if (tong === n) {
        console.log(n + " là số Armstrong.");
        return true; // số Armstrong
    } else {
        console.log(n + " không phải là số Armstrong.");
        return false; // không phải số Armstrong
    }
}


// Kiểm tra số chính phương 
function kiemTraSoChinhPhuong(n) {
    let canBacHai = Math.sqrt(n);
    if (canBacHai * canBacHai === n) {
        console.log(n + " là số chính phương.");
        return true; // số chính phương
    } else {
        console.log(n + " không phải là số chính phương.");
        return false; // không phải số chính phương
    }
}

// Kiểm tra số đối xứng
function kiemTraSoDoiXung(n) {
    let so = n.toString();
    let daoNguoc = so.split("").reverse().join("");
    if (so === daoNguoc) {
        console.log(n + " là số đối xứng.");
        return true; // số đối xứng
    } else {
        console.log(n + " không phải là số đối xứng.");
        return false; // không phải số đối xứng
    }
}
// Kiểm tra số nguyên tố Mersenne
function kiemTraSoNguyenToMersenne(n) {
    let so = Math.pow(2, n) - 1;
    if (so < 2) {
        console.log(so + " không phải là số nguyên tố Mersenne.");
        return false; // không phải số nguyên tố Mersenne
    }
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) {
            console.log(so + " không phải là số nguyên tố Mersenne.");
            return false; // không phải số nguyên tố Mersenne
        }
    }
    console.log(so + " là số nguyên tố Mersenne.");
    return true; // số nguyên tố Mersenne
}


// Kiểm tra số Fibonacci
function kiemTraSoFibonacci(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    while (c < n) {
        c = a + b;
        a = b;
        b = c;
    }
    if (c === n) {
        console.log(n + " là số Fibonacci.");
        return true; // số Fibonacci
    } else {
        console.log(n + " không phải là số Fibonacci.");
        return false; // không phải số Fibonacci
    }
}


//login
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        alert("Đăng nhập thành công");
    } else {
        alert("Đăng nhập thất bại");
    }
}
