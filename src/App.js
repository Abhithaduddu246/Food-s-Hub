import logo from './logo.svg';
import './App.css';
import Cards from './cardinsert/cards';
import Table from './table/tables';
import { imgData } from './imagecustom/imagelist';
import CustomImage from './imagecustom/image';
import Header from './imagecustom/header';
import Footer from './imagecustom/footer';



const App=()=>{
  return(
    <>
    <Header></Header>
    <CustomImage properties={imgData}></CustomImage>
    <Footer></Footer>
    </>
  )
 
 
}

export default App;


