import React from "react";
export default function Login()
{
    const [LogOrReg , setLogOrReg] =React.useState(true)
    function clickHandler()
    {
        setLogOrReg(prevState=>(!prevState))
    }
    return (
    <div className="LoginPage">
        {
            LogOrReg?
            <div className="LoginBox">
            <form action="" className="LoginForm">
                <input type="mail" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button  className="sunbmitBut"  >login</button>
            </form>
            <div className="loginOrRegister">
                <div onClick={()=>setLogOrReg(true)}>login</div>
                <div className={LogOrReg?"slider login": "slider register"} onClick={clickHandler}>
                    <div className="dot">

                    </div>
                </div>
                <div onClick={()=>setLogOrReg(false)}>register</div>
            </div>
       </div>:
       <div className="RegisterBox">
            <form action="" className="LoginForm">
                <input type="type" placeholder="Name"/>
                <input type="type" placeholder="Surname"/>
                <input type="mail" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat pass"/>
                <button  className="sunbmitBut"  >register</button>
            </form>
            <div className="loginOrRegister">
                <div onClick={()=>setLogOrReg(true)}>login</div>
                <div className="slider" onClick={clickHandler}>
                    <div className={LogOrReg?"dot login": "dot register"}>

                    </div>
                </div>
                <div onClick={()=>setLogOrReg(false)}>register</div>
            </div>
       </div>

        }
       

       
       
    </div>
    ) ;
}