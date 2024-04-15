import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function ChangePassword(props) {
    let history = useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem("authtoken")){
            history("/login")
        }
    })

    const [cred, setCred] = useState({
        currentpassword: "",
        newpassword: "",
        confirmpassword: "",
      })
      
      const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
      }
      const changepassHandle = async (e) => {
        e.preventDefault();
          try {
            const res = await fetch(`http://localhost:5000/api/auth/changepassword`, {
              method: 'POST',
              headers: {
                "Content-Type": 'application/json',
                "auth-token":sessionStorage.getItem("authtoken")
              },
              body: JSON.stringify({currentpassword:cred.currentpassword, newpassword:cred.newpassword,confirmpassword:cred.confirmpassword})
            });
            const result = await res.json()
            console.log(result)
            if (result.success) {
                props.showAlert("Please login Again!");
              setCred({
                currentpassword: "",
                newpassword: "" ,
                confirmpassword:""
              })
              history("/login");
            }
            else {
              props.showAlert(result);
            }
    
          } catch (error) {
            console.log(error)
          }
      }
    
    
    return (
        <>
            <div className="container col-sm-5  my-4 " style={{ padding: "20px" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Current Password</label>
                        <input autoComplete="off" type="password" className="form-control" name='currentpassword' id="currentpassword" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                        <input autoComplete="off" type="password" className="form-control" name='newpassword' id="new_password" onChange={onChange} />
                        <div id="help" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm New Password</label>
                        <input autoComplete="off" type="password" className="form-control" name='confirmpassword' id="confirm_new_password" onChange={onChange} />
                        <div id="help" className="form-text"></div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={changepassHandle}>Login</button>
                </form>
            </div>

        </>
    )
}

export default ChangePassword
