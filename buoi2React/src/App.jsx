import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavicationMenu from './components/NavicationMenu/NavicationMenu';
import MainContent from './components/MainContent/MainContent'; // import component MainContent
import Content from './components/Content/Content';

function App() {

  //tất cả mọi cú pháp và UI đều được viết trong hàm App
  //hàm App là hàm chính của ứng dụng React
  //hàm App được gọi khi ứng dụng được khởi động
  //hàm App được gọi khi ứng dụng được render
  //hàm App được gọi khi ứng dụng được cập nhật
  //hàm App được gọi khi ứng dụng được thay đổi
  //hàm App được gọi khi ứng dụng được khởi động lại




  //return chỉ trả về 1 giá trị duy nhất
  //nếu muốn trả về nhiều giá trị thì phải bọc nó trong 1 thẻ cha
  //thẻ cha có thể là thẻ div, thẻ span, thẻ ul, thẻ li, thẻ p, thẻ h1, thẻ h2, thẻ h3, thẻ h4, thẻ h5, thẻ h6 Hoặc <> </> (thẻ rỗng)
  //thẻ cha có thể là thẻ bất kỳ
  //thẻ cha có thể là thẻ tự đóng hoặc không tự đóng
  // mọi khai báo hay logic đều phải nằm trước return
  return (
    <>
      {/* cách viết component */}
      <Header />
      <NavicationMenu />
      <div className='main'>
        <Content chucai="hi" so="2" isActive={true} /> {/* ứng dụng Props vào content*/}
        <MainContent />
        <Content chucai="he" so="27" isActive={false} />{/* có thể cho thêm những biến khác vào */}
      </div>
      <Footer />

    </>
  )
}

export default App
