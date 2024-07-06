function Register(){
    return(
        <div style={{backgroundImage:'url(https://wallpapers.com/images/hd/sunset-reflections-on-water-67chk9m20bq6r4u2.jpg)',backgroundAttachment:'fixed',backgroundPosition:'centre',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
        <div style={{paddingLeft:'500px',paddingTop:'50px'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems: 'center',paddingTop:'90px',paddingRight:'500px'}}>
                <h1 style={{display:'flex',justifyContent:'center',color:'white',fontFamily:'sans-serif'}}>
                    REGISTER
                </h1>
                <div style={{display:'flex',flexDirection: 'column',alignItems:'center',border: '4px solid rosybrown',height:'200px',padding: '20px',gap:'10px',backdropFilter:'blur(5px)'}}>
               
                <input type="text" placeholder="Enter Your Username" style={{width:'300px',height:'20px', background:'transparent',outline:'none',border:'2px solid rgba(white)',borderRadius:'20px'}}></input>
                <input type="email" placeholder="Enter your email/Phone Number" style={{width:'300px',height:'25px', background:'transparent',border:'none',outline:'none',border:'2px solid rgba(white)',borderRadius:'20px'}}></input>
                <input type="password" placeholder="Enter Your Password" style={{width:'300px',height:'20px', background:'transparent',border:'none',outline:'none',border:'2px solid rgba(white)',borderRadius:'20px'}}></input>
                <input type="password" placeholder="Re enter Your Password" style={{width:'300px',height:'20px', background:'transparent',border:'none',outline:'none',border:'2px solid rgba(white)',borderRadius:'20px'}}></input>
                <button style={{width:'250px',height:'30px', background:'transparent',backdropFilter:'blur(36px)',borderColor:'whitesmoke',borderRadius:'20px'}}>
                    Register
                </button>
                <h5 >
                    Already have an account? Login
                </h5>
                </div>
                </div>
            
        </div>
        </div>
        )
        }
        export default Register;

