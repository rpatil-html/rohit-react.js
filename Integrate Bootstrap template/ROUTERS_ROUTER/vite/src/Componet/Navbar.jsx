
import { Link } from 'react-router-dom';

const Navbar = () => {
    let links=[
       {path:"/",title:"Home"},
        {path:"/About",title:"About"},
        {path:"/login",title:"Login"},
        {path:"/Product",title:"Product"},
        {path:"/Description",title:"Description"},
    ];  
  return (
    <div style={{display:"flex",justifyContent:"space-around", width:"100%",height:"50px", backgroundColor:"teal"}}>
        {links.map((el)=>(
            <Link style={{textDecoration:"none",marginTop:"15px",fontSize:"25px",color:"black"}
            } key={el.path} to={el.path} po={el.path}>{el.title}</Link>
        ))}
        
    </div>
  );
};

export default Navbar
