import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

class Contact1 extends Component {
  constructor(props){
    super(props);
    this.state={
                name:'',
                lstname:'',
                mail:'',
                subj:'',
                messg:''}
}
      /*handlefirstname=(event)=>{
        let firstvalue=event.target.value;
        this.setState({firstname: firstvalue});
      }*/
      handlefirstname=(event)=>{
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
/*
      handlelastname=(event)=>{
        let lastvalue=event.target.value;
        this.setState({lastname: lastvalue});
      }*/
       handlelastname=(event)=>{
         event.preventDefault();
  var regex= /^[a-zA-Z ]{2,30}$/;
  let uselstname =this.refs.lstname.value;
    
  var text="please enter a valid name and name should be start with an alphabet";
  if(!(uselstname.match(regex))){
    document.getElementById("lstnamevarify").innerHTML=text;
    return false;
}
else{
  document.getElementById("lstnamevarify").innerHTML="";
  this.setState({
              lstname:uselstname
            })
  return false;
}
      }

/*       handleEmail=(event)=>{
        let emailvalue=event.target.value;
        this.setState({Email: emailvalue});
      }*/
      handleEmail=(event)=>{
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

    /*  handlesubject=(event)=>{
        let subjectvalue=event.target.value;
        this.setState({subject: subjectvalue})
      }*/
       handlesubject=(event)=>{
         event.preventDefault();
  var regex= /^[a-zA-Z ]{2,30}$/;
  let usesubj =this.refs.subj.value;
    
  var text="please enter a valid name and name should be start with an alphabet";
  if(!(usesubj.match(regex))){
    document.getElementById("subjectvarify").innerHTML=text;
    return false;
}
else{
  document.getElementById("subjectvarify").innerHTML="";
  this.setState({
              subj:usesubj
            })
  return false;
}
        
      }

     /* handletextboxarea=(event)=>{
        let textboxvalue=event.target.value;
        this.setState({textboxarea :textboxvalue});
      }*/

       handletextarea=(event)=>{
       event.preventDefault();
              var regex= /^[a-zA-Z ]{30,350}$/;
              let usemessg =this.refs.messg.value;
              //this.setState({usepropertydescreption: usepropertydescreption});    
              var text="please write description minimum 30 words";
              if(!(usemessg.match(regex))){
                document.getElementById("messagevarify").innerHTML=text;
                return false;
            }
            else{
              document.getElementById("messagevarify").innerHTML="";
              this.setState({
              messg:usemessg
            })
              return false;
            }
      }




      handlesubmit=(event)=>{
        event.preventDefault();
           if(this.state.name===""||this.state.lstname===""||this.state.mail===""||this.state.messg===""||this.state.subj==="")
            {
              alert("Please fill the required fields");
              return false;
            }
          else{
           
           
             var self=this;


             axios.post('http://localhost:4000/api/contactfrm',{
                
                username:this.state.name,
                lastname:this.state.lstname,
                usermail:this.state.mail,
                subject:this.state.subj,
                message:this.state.messg,
          

          } )
          .then(function(response){
            console.log(response);
            alert('you Ragistred successfully');
            //window.location="/Contact";
            self.props.history.push('/');
          })
          .catch(function(err){
            console.log(err);
          })
        
  }
      }
  
  

  render(){
      return (
          <div className="content-area recent-property padding-top-40" >
            <div className="container">  
              <div className="row">
                <div className="col-md-8 col-md-offset-2"> 
                  <div className="contact-us" id="contact1">                        
                    <div className="row">
                      <div className="col-sm-4">
                        <h3><i className="fa fa-map-marker"></i> Address</h3>
                        <p>13/25 shibuia
                          <br/>Tokyo 
                          <br/>45Y 73J 
                          <br/>
                          <strong>Japan</strong>
                        </p>
                      </div>
                      <div className="col-sm-4">
                        <h3><i className="fa fa-phone"></i> Call center</h3>
                        <p className="text-muted">This number is toll free if calling from
                                        Great Britain otherwise we advise you to use the electronic
                                        form of communication.</p>
                        <p><strong>+33 555 444 333</strong></p>
                      </div>
                      <div className="col-sm-4">
                        <h3><i className="fa fa-envelope"></i> Electronic support</h3>
                        <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                        <ul>
                          <li><strong><a href="/">info@company.com</a></strong>   </li>
                          <li><strong><a href="/">Ticketio</a></strong> - our ticketing support platform</li>
                        </ul>
                      </div>
                    </div>
                      <hr />
                            <h2>Contact form</h2>
                            <form onSubmit={this.handlesubmit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Firstname</label>
                                            <input type="text" className="form-control" ref="name" name="name"  id="firstname" onChange={this.handlefirstname} />
                                             <p id="namevarify"></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label >Lastname</label>
                                            <input type="text" className="form-control" id="lastname" ref="lstname" name="lstname"  onChange={this.handlelastname}/>
                                            <p id="lstnamevarify"></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label >Email</label>
                                            <input type="text" className="form-control" ref="mail" name="mail" id="email" onChange={this.handleEmail}/>
                                            <p id="emailvarify"></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control" ref="subj" name="subj" id="subject" onChange={this.handlesubject}/>
                                            <p id="subjectvarify"></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <input type="text" className="form-control" ref="messg" name="messg" id="messg" onChange={this.handletextarea}/>
                                             <p id="messagevarify"></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 text-center">
                                        <button type="submit" value="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> submit</button>
                                    </div>
                                </div>
                               
                            </form>
                    
                 
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          );
        }
      }
      export default Contact1;