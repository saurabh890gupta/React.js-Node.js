import React, { Component } from 'react';
import './Ragistration.css';
import axios from 'axios';



 class Signup extends Component {
              constructor(props){
              super(props);
              this.state={
                        name:'',
                        mail:'',
                        pass:'',
                        add:'',
                        Contact:'',
                        city:'',
                        stat:'',
              
              }
            }

    /*handlename=(event)=> {
        let name = event.target.value;
        this.setState({usename: name});
      }
  */

  

handlename=(event)=>{
  event.preventDefault();
  var regex= /^[a-zA-Z ]{2,30}$/;
  let usename =this.refs.name.value;
    
  var text="please enter a valid name and name should be start with an alphabet";
  if(!(usename.match(regex))){
    document.getElementById("namevarify").innerHTML=text;
    return false;
}
else{
  document.getElementById("namevarify").innerHTML="";
  this.setState({
              name:usename
            })
  return false;
}
}



      /*handlemail=(event)=> {
        let mail = event.target.value;
        this.setState({usemail: mail});
  }*/
      handlemail=(event)=>{
            event.preventDefault();
            var regex="[a-z0-9A-Z._%+-]+@+[a-zA-Z0-9.-]+\\.[A-za-z]{2,64}";
            let usemail = this.refs.mail.value;
             //this.setState({usemail: usemail});
            var text="please enter a valid email";
            if(!(usemail.match(regex)))
            {
              document.getElementById("emailvarify").innerHTML=text;
              return false;
          }
          else{
            document.getElementById("emailvarify").innerHTML="";
            this.setState({
              mail:usemail
            })
            return false;
          }

      }


       /* handlepass=(event)=> {
        let pass = event.target.value;
        this.setState({usepass: pass});
  }*/
        handlepass=(event)=> {
            event.preventDefault();
            let usepass = this.refs.pass.value;
            //this.setState({usepass: usepass});
            var regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])(?=.{8,})";
            var text="password must be eight characters or longer[1 lowercase alphabetical,1 uppercase alphabetical,1 numeric,one special character]";
            if(!(usepass.match(regex))){
              document.getElementById("passvarify").innerHTML=text;
              return false;
          }
          else{
            document.getElementById("passvarify").innerHTML="";
            this.setState({
              pass:usepass
            })
            return false;
          }
        
  }

  handlecnfrmpass=(event)=>{
      event.preventDefault();
      let cnfrmpass=this.refs.cnfrmpass.value;
      var pas=document.getElementById("pass").value;
      var text="please enter the same password"
      if(!(cnfrmpass.match(pas))){
              document.getElementById("confrm_passvarify").innerHTML=text;
              return false;
          }
          else{
            document.getElementById("confrm_passvarify").innerHTML="";
            this.setState({
              cnfrmpass:cnfrmpass
            })
            return false;
          }

  }



        handleadd=(event)=>{
          let useadd =event.target.value;
          this.setState({add: useadd});
        }

        

       /* handleContact=(event)=>{
          let Contact =event.target.value;
          this.setState({useContact: Contact});
        }*/
             handleContact=(event)=>{
                event.preventDefault();
                var regex="^([6-9]{1})([0-9]{9})$";
                let useContact =this.refs.Contact.value;
                  //this.setState({useContact: useContact});
            var text="number should be start from 6-9 and 10 numbers";
            if(!(useContact.match(regex))){
              document.getElementById("Contactvarify").innerHTML=text;
              return false;
          }
          else{
            document.getElementById("Contactvarify").innerHTML="";
            this.setState({
              Contact:useContact
            })
            return false;
          }
        }



       /* handlecity=(event)=>{
          let usecity =event.target.value;
          this.setState({city: usecity});
        }*/

        handlecity=(event)=>{
          event.preventDefault();
  var regex= /^[a-zA-Z ]{3,30}$/;
  let usecity =this.refs.city.value;
    
  var text="please enter a valid city";
  if(!(usecity.match(regex))){
    document.getElementById("cityvarify").innerHTML=text;
    return false;
}
else{
  document.getElementById("cityvarify").innerHTML="";
  this.setState({
              city:usecity
            })
  return false;
}
          
        }

       /* handlestat=(event)=>{
          let usestat =event.target.value;
          this.setState({stat: usestat});
        }*/

        handlestat=(event)=>{
          event.preventDefault();
  var regex= /^[a-zA-Z ]{2,30}$/;
  let usestat =this.refs.stat.value;
    
  var text="please enter a valid State";
  if(!(usestat.match(regex))){
    document.getElementById("statvarify").innerHTML=text;
    return false;
}
else{
  document.getElementById("statvarify").innerHTML="";
  this.setState({
              stat:usestat
            })
  return false;
}
        }






         handlesubmit=(event)=> {
          event.preventDefault();
            if(this.state.name===""||this.state.mail===""||this.state.pass===""||this.state.Contact===""||this.state.stat===""||this.state.city===""||this.state.add==="")
            {
              alert("Please fill the required fields");
              return false;
            }
          else{
         var self=this;
          axios.post('http://localhost:4000/api/signup',{
            username:this.state.name,
            usermail:this.state.mail,
            userpass:this.state.pass,
            useradd:this.state.add,
            userContact:this.state.Contact,
            usercity:this.state.city,
            userstat:this.state.stat,

          } )
          .then(function(response){
            console.log(response.data);
            if (response.data==="user exist")
            {
              alert("your are already exsit you use your email id");
              return false;
            }
            else
            {
            alert('you Ragistred successfully');
           
            self.props.history.push('/Home');
          }
          })
          .catch(function(err){
            console.log(err);
          })
        
  }
}







	render() {
    
      
    return (
        
              <div className="row">
                <div className="col-md-12">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 register-blocks">
                            <h2>New account : </h2> 
                            <form  onSubmit={this.handlesubmit}>
                              <div className="form-group">
                                <label>Name</label>
                               <input type="text" className="form-control" ref="name" name="name"  onChange={this.handlename} required / >
                               <p id="namevarify"></p>
                               </div>
                                
                              <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" ref="mail" name="mail" id="mail" onChange={this.handlemail} required />
                                <p id="emailvarify"></p>
                                </div>
                                
                              <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" ref="pass" name="pass" id="pass" onChange={this.handlepass} required />
                                <p id="passvarify"></p>
                              </div>

                               <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" ref="cnfrmpass" name="cnfrmpass" id="cnfrmpass" onChange={this.handlecnfrmpass} required />
                                <p id="confrm_passvarify"></p>
                              </div>
                             
                              <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" ref="add" name="add" onChange={this.handleadd} required / >
                              </div>
                                
                                <div className="form-group">
                                <label>Contact</label>
                                <input type="text" className="form-control" id="id1" min="10" maxLength="10" ref="Contact" title="If the number is less than 10 or greater than 13, an error message will be displayed" name="Contact" onChange={this.handleContact} required / >
                                      <p id="Contactvarify"></p>
                              </div>
                                
                                <div className="form-group">
                                <label>city</label>
                                <input type="text" className="form-control" ref="city" name="city" onChange={this.handlecity} required / >
                                 <p id="cityvarify"></p>
                              </div>

                              <div className="form-group">
                                <label>State</label>
                                <input type="text" className="form-control" ref="stat" name="stat" onChange={this.handlestat} required / >
                                 <p id="statvarify"></p>
                              </div>
                                
                              <div className="text-center">
                                <button type="submit" value="submit" className="btn btn-default">Register</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
        
           );
    
  }
}

export default Signup;