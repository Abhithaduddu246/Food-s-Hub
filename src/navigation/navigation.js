import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../sites/home-screen"
import SeeMore from "../sites/seemore"
import ReceipePage from "../sites/receipes-screen"
import ReceipeDetails from "../sites/receipe-details"
import NavBar from "../navbar/navbar"
import RegistrationForm from "../sites/registration"






const NavigationSite=()=>{
    return(
        <>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/receipes" element={<ReceipePage/>}></Route>
            <Route path="/receipe-details" element={<ReceipeDetails/>}></Route>
            <Route path="/:RecipiId" element={<SeeMore/>}></Route>
            <Route path="/contact" element={<RegistrationForm/>}></Route>
           
        </Routes>
        
        </BrowserRouter>
        
        
        </>
    );
};


export default NavigationSite;