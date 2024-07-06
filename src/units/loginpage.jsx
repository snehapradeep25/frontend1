function LoginPage(){
    return(
        <div style={{backgroundImage:'URL(https://wallpapers.com/images/hd/sunset-reflections-on-water-67chk9m20bq6r4u2.jpg)',backgroundAttachment:'fixed',backgroundPosition:'centre',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
        <div style={{paddingLeft:'500px',paddingTop:'50px'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems: 'center',paddingTop:'90px',paddingRight:'500px'}}>
                <h1 style={{display:'flex',justifyContent:'center',color:'white',fontFamily:'sans-serif'}}>
                    LOGIN
                </h1>
                <div style={{display:'flex',flexDirection: 'column',alignItems:'center',border: '4px solid rosybrown',height:'200px',padding: '20px',gap:'30px',paddingTop:'40px'}}>
                <input type="email" placeholder="Enter your email/Phone Number" style={{width:'250px',height:'20px', background:'transparent',border:'none',outline:'none',borderBottom:'2px solid black',borderRadius:'20px',borderTop:'0',boxShadow:'5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,0.16'}}></input>
                <input type="password" placeholder="Enter Your Password" style={{width:'250px',height:'20px', background:'transparent',border:'none',outline:'none',borderBottom:'2px solid black',borderRadius:'20px',borderTop:'0',boxShadow:'5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,0.16'}}></input>
                <button style={{width:'250px',height:'30px', backgroundColor:'light pink',borderColor:'whitesmoke',borderRadius:'20px'}}>
                    sign in
                </button>
                <h5 >
                    Don't have an account? Register
                </h5>
                </div>
                </div>
            
        </div>
        </div>
        )
        }
        export default LoginPage;