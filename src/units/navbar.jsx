function NavBar(){
    return(
      
        <div style={{display:'flex',allignItems:'center',paddingleft:'1 rem',paddingRight:'1 rem',background:'transparent'}}>
          
          <h1 style={{display:'flex',allignItems:'center',justifyContent:'center',color:'black',paddingLeft:'20px'}}>
            Mathlogic          </h1>
          <div style={{display:'flex',justifyContent:'space-between',marginLeft:'auto',marginTop:'41px',gap:'1rem',marginRight:'40px'}}>
            <a href="http://localhost:3000/Register" style={{transition:'0.5s easeout',color:'white',fontWeight:'500px',fontSize:'20px'}}>
            Login

            </a>

            <a a href="http://localhost:3000/LoginPage" style={{transition:'0.5s easeout #ffff'}}>
            Register

            </a>

            <a a href="http://localhost:3000/Calculator" style={{transition:'0.5s easeout'}}>
            Calculator

            </a>
          </div>
        </div>
        
  )
}
export default NavBar;