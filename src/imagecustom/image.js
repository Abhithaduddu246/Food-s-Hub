 import "./img.css"
 const CustomImage=(prop)=>{
    const{properties}=prop;
    return(
        <>
         <h2> <center>IPL TEAMS</center></h2>
         <div className="Main">
        {
        properties.map(eachTeam=>{
            const{id,name,source,description,players,button}=eachTeam;
            return(
                <>
               
                <div className="imgcard" style={{display:"flex"}}>
                <div className="child"><h1>{name}</h1></div>
                <div className="child"><center><img src={source} width={250} height={200}/></center></div>
               <div className="child"> <p>{description}</p></div>
                <div className="child"><h3>{players}</h3></div>
                <div className="child"><button>{button}</button></div>
                </div>
                </>
            )
        })
        
}
</div></>);
};
export default CustomImage;