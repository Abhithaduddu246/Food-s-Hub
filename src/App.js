import logo from './logo.svg';
import './App.css';
import Cards from './cardinsert/cards';
import Table from './table/tables';
import { imgData } from './imagecustom/imagelist';
import CustomImage from './imagecustom/image';
import Header from './imagecustom/header';
import Footer from './imagecustom/footer';
// import { ProgressBar } from 'react-bootstrap';

import CustomList from './list/customlist';






const App=()=>{
  return(
    <>
    <Header></Header><br/>

    <CustomImage properties={imgData}>

    </CustomImage>
    
    <Footer></Footer>
    {/* <CustomList  list={["apple","banaana","grapes","mango","watermelon"]}/>
    <CustomList  list={["brinjal","carrot","tomato","potato","radish"]}/> */}
    </>
  )
 
 
}

export default App;


