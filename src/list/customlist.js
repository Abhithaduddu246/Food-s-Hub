const CustomList=(prop)=>{
    const {list}=prop;

    return(
        <ol>
        {list.map((eachItem)=>(
            
            <li>{eachItem}</li>
            
        ))}
         </ol>
       
    )


};
export default CustomList;