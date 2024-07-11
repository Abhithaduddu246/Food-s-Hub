import logo from './logo.svg';
import './App.css';
import Cards from './cardinsert/cards';
import Table from './table/tables';
import { imgData } from './imagecustom/imagelist';

// function App() {
//   return (
//     <div>
//     <Cards/>
//     <Table/>
//     </div>
   
//   );
// }

const App=()=>{
 
 return(
  <div>
   <div id="table">
     <Table></Table>
     </div>
    <div style={{display:"flex"}}>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    </div>
  </div>
 );
};

export default App;


