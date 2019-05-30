import React, { Component } from 'react';
import './Submitproperty.css';
import { Link } from 'react-router-dom';
//import logo6 from '../images/default-property.jpg';
import axios from 'axios';

class Submitproperty extends Component {
    constructor(props){
        super(props);
        this.state={
            userimage:'',
            propertyname:'',
            propertyprice:'',
            phone:'',
            propertydescreption:'',
            propertystate:'',
            propertycity:'',
            propertystatus:'',
            minbed:'',
            propertyarea:'',
            swimmingPool:'',
            Stories:'',
            emergencyexit:'',
            fireplace:'',
            laundryroom:'',
            jogpath:'',
            ceilings:'',
            dualsinks:'',
            chooseimages:'',
            proprtyvideo1:'',
            proprtyvideo2:'',
            proprtyvideo3:'',
            accepttermesandconditions:'',
    }
    /* this.handlesubmit = this.handlesubmit.bind(this);
    this.handleimg = this.handleimg.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
     this.handleproprtyimages=this.handleproprtyimages.bind(this);*/
    }
                
        handleimg=(event)=> {
            let img = event.target.value;
           
            this.setState({useimg:img});
            const output1=document.getElementById('wizardPicturePreview');
            output1.src=URL.createObjectURL(event.target.files[0]);
        }


        handlepropertyname=(event)=>{
            let propertyname =event.target.value;
            this.setState({usepropertyname: propertyname});
        }

        /*handlepropertyprice=(event)=>{
            let propertyprice =event.target.value;
            this.setState({usepropertyprice: propertyprice});
        }*/
            handlepropertyprice=(event)=>{
            event.preventDefault();
                var regex="^([0-9]){4,10}$";
                let usepropertyprice =this.refs.propertyprice.value;;
                //this.setState({usepropertyprice: usepropertyprice});
            var text="min 4 number should be ";
            if(!(usepropertyprice.match(regex))){
              document.getElementById("propertypricevarify").innerHTML=text;
              return false;
          }
          else{
            document.getElementById("propertypricevarify").innerHTML="";
            this.setState({
              propertyprice:usepropertyprice
            })
            return false;
                
          }
        }


        /*handlephone=(event)=>{
            let propertyphone =event.target.value;
            this.setState({usepropertyphone:propertyphone});
        }*/
            handlephone=(event)=>{
            event.preventDefault();
                var regex="^([6-9]{1})([0-9]{9})$";
                let usephone =this.refs.phone.value;
                  //this.setState({usepropertyphone: usepropertyphone});
            var text="number should be start from 6-9 and 10 numbers";
            if(!(usephone.match(regex))){
              document.getElementById("phonevarify").innerHTML=text;
              return false;
          }
          else{
            document.getElementById("phonevarify").innerHTML="";
            
            this.setState({
              phone:usephone
            })
            return false;
          }
        }

/*handlealert=(event)=>{
    event.preventDefault();
    if(this.state.phone===""||this.state.propertyprice===""||this.state.usepropertyname===""){
        alert("please fill all fields");
        return false;
    }
     else
            {
            var self=this;
           
            window.location.href="#step2";
          }
}
*/



        /*handlediscrition=(event)=>{
            let propertydescreption=event.target.value;
            this.setState({usepropertydescreption:propertydescreption});
        }*/
        handlediscrition=(event)=>{
             event.preventDefault();
              var regex= /^[a-zA-Z ]{30,350}$/;
              let usepropertydescreption =this.refs.propertydescreption.value;
              //this.setState({usepropertydescreption: usepropertydescreption});    
              var text="please write description minimum 30 words";
              if(!(usepropertydescreption.match(regex))){
                document.getElementById("descreptionvarify").innerHTML=text;
                return false;
            }
            else{
              document.getElementById("descreptionvarify").innerHTML="";
              this.setState({
              propertydescreption:usepropertydescreption
            })
              return false;
            }
        }

        handleselectstate=(event)=>{
            let selectstate=event.target.value;
            this.setState({useselectstate:selectstate});
        }

        handleselectcity=(event)=>{
            let selectcity=event.target.value;
            this.setState({useselectcity:selectcity});
        }

        handleselectstatus=(event)=>{
            let selectstatus=event.target.value;
            this.setState({useselectstatus:selectstatus});
        }

        handleselectperioud=(event)=>{
            let selectperioud=event.target.value;
            this.setState({useselectperioud:selectperioud});
        }

        handleminbed=(event)=>{
            let minbed=event.target.value;
            this.setState({useminbed:minbed});
        }

        /*handlepropertyarea=(event)=>{
            let propertyarea=event.target.value;
            this.setState({usepropertarea:propertyarea});
        }*/
        handlepropertyarea=(event)=>{
            event.preventDefault();
                var regex="^([0-9]){2,9}$";
                let usepropertyarea =this.refs.propertyarea.value;
                  //this.setState({usepropertarea: usepropertarea});
            var text="Propertarea should bi minimun 2";
            if(!(usepropertyarea.match(regex))){
              document.getElementById("propertyareavarify").innerHTML=text;
              return false;
          }
          else{
            document.getElementById("propertyareavarify").innerHTML="";
            this.setState({
              propertyarea:usepropertyarea
            })

            return false;
          }
        }

        handleswimming=(event)=>{
            let swimming=event.target.value;
            this.setState({useswimming:swimming});
        }

        handlestories=(event)=>{
            let stories=event.target.value;
            this.setState({usestories:stories});
        }

        handleemergencyexit=(event)=>{
            let emergencyexit=event.target.value;
            this.setState({useemergencyexit:emergencyexit});
        }

        handlefireplace=(event)=>{
            let fireplace=event.target.value;
            this.setState({usefireplace:fireplace});
        }

        handlelaundryroom=(event)=>{
            let laundryroom=event.target.value;
            this.setState({uselaundryroom:laundryroom});
        }

        handlejogpath=(event)=>{
            let jogpath=event.target.value;
            this.setState({usejogpath:jogpath});
        }

        handleceilings=(event)=>{
            let ceilings=event.target.value;
            this.setState({useceiling:ceilings});
        }

        handledualsinks=(event)=>{
            let dualsinks=event.target.value;
            this.setState({usedualsinks:dualsinks});
        }

        handleproprtyimages=(event)=>{
            let proprtyimages=event.target.value;
            this.setState({useproprtyimages:proprtyimages});
        }

        handleproprtyvideo1=(event)=>{
            let proprtyvideo1=event.target.value;
            this.setState({useproprtyvideo1:proprtyvideo1});
        }

        handleproprtyvideo2=(event)=>{
            let proprtyvideo2=event.target.value;
            this.setState({useproprtyvideo2:proprtyvideo2});
        }

        handleproprtyvideo3=(event)=>{
            let proprtyvideo3=event.target.value;
            this.setState({useproprtyvideo3:proprtyvideo3});
        }

        handlecheckbox=(event)=>{
             let checkbox=event.target.value;
            this.setState({usecheckbox:checkbox});
        }

        handlesubmit=(event)=>{
            event.preventDefault();
            if(this.state.phone===""||this.state.propertyprice===""||this.state.propertydescreption==="")
            {
              alert("Please fill the required fields");
              return false;
            }
          else{
           
           
             var self=this;


             axios.post('http://localhost:4000/api/propertydetail',{
            subpropertyimg:this.state.useimg,
            subpropertyname:this.state.usepropertyname,
            subpropertyprice:this.state.propertyprice,
            subpropertyphone:this.state.phone,
            subpropertydescreption:this.state.propertydescreption,
            subselectstate:this.state.useselectstate,
            subselectcity:this.state.useselectcity,
            subselectstatus:this.state.useselectstatus,
            subselectperioud:this.state.useselectperioud,
            subminbed:this.state.useminbed,
            subpropertarea:this.state.propertyarea,
            subswimming:this.state.useswimming,
            substories:this.state.usestories,
            subemergencyexit:this.state.useemergencyexit,
            subfireplace:this.state.usefireplace,
            sublaundryroom:this.state.uselaundryroom,
            subjogpath:this.state.usejogpath,
            subceiling:this.state.useceiling,
            subdualsinks:this.state.usedualsinks,
            subproprtyimages:this.state.useproprtyimages,
            subproprtyvideo1:this.state.useproprtyvideo1,
            subproprtyvideo2:this.state.useproprtyvideo2,
            subproprtyvideo3:this.state.useproprtyvideo3,
            subcheckbox:this.state.usecheckbox,



          } )
          .then(function(response){
            console.log(response);
            alert('you Ragistred successfully');
            //window.location="/Contact";
            self.props.history.push('/Home');
          })
          .catch(function(err){
            console.log(err);
          })
        
  }
}  



        /*handlesubmit=(event)=>{
            event.preventDefault();
            if(this.state.phone===""||this.state.propertyprice===""||this.state.propertydescreption==="")
            {
              alert("Please fill the required fields");
              return false;
            }
            else{
               // var self=this;
                const self = this;
                this.fileUpload(
            this.state.useimg,
                        this.state.usepropertyname,
                        this.state.propertyprice,
                        this.state.phone,
                        this.state.propertydescreption,
                        this.state.useselectstate,
                        this.state.useselectcity,
                        this.state.useselectstatus,
                        this.state.useselectperioud,
                        this.state.useminbed,
                        this.state.propertyarea,
                        this.state.useswimming,
                        this.state.usestories,
                        this.state.useemergencyexit,
                        this.state.usefireplace,
                        this.state.uselaundryroom,
                        this.state.usejogpath,
                        this.state.useceiling,
                        this.state.usedualsinks,
                        this.state.useproprtyimages,
                        this.state.useproprtyvideo1,
                        this.state.useproprtyvideo2,
                        this.state.useproprtyvideo3,
                        this.state.usecheckbox,
                )
                .then((response) => {
                    console.log(response);

                    console.log("file upload response", response.data.upload);
                    self.setState({useproprtyimages: response.data.upload});
                     alert('you Ragistred successfully');
                    document.location.href = '/Home';
                 })
                .catch((err) => {
                   console.log("Error", err);
                 });
                
            }
        }

        fileUpload = (useimg,
                    usepropertyname,
                    propertyprice,
                    phone,
                    propertydescreption,
                    useselectstate,
                    useselectcity,
                    useselectstatus,
                    useselectperioud,
                    useminbed,
                    propertyarea,
                    useswimming,
                    usestories,
                    useemergencyexit,
                    usefireplace,
                    uselaundryroom,
                    usejogpath,
                    useceiling,
                    usedualsinks,
                    useproprtyimages,
                    useproprtyvideo1,
                    useproprtyvideo2,
                    useproprtyvideo3,
                    usecheckbox
        )=>{
                        const url = 'http://localhost:4000/api/propertydetail';
                        const formData = new FormData();
                        //formData.append('subpropertyimg',this.state.useimg);
                        formData.append('subpropertyname',this.state.usepropertyname);
                        formData.append('subpropertyprice',this.state.propertyprice);
                        formData.append('subpropertyphone',this.state.phone);
                        formData.append('subpropertydescreption',this.state.propertydescreption);
                        formData.append('subselectstate',this.state.useselectstate);
                        formData.append('subselectcity',this.state.useselectcity);
                        formData.append('subselectstatus',this.state.useselectstatus);
                        formData.append('subselectperioud',this.state.useselectperioud);
                        formData.append('subminbed',this.state.useminbed);
                        formData.append('subpropertarea',this.state.propertyarea);
                        formData.append(' subswimming',this.state.useswimming);
                        formData.append('substories',this.state.usestories);
                        formData.append('subemergencyexit',this.state.useemergencyexit);
                        formData.append(' subfireplace',this.state.usefireplace);
                        formData.append('sublaundryroom',this.state.uselaundryroom);
                        formData.append('subjogpath',this.state.usejogpath);
                        formData.append('subceiling',this.state.useceiling);
                        formData.append('subdualsinks',this.state.usedualsinks);
                        //formData.append('subproprtyimages',this.state.useproprtyimages[0]);
                        formData.append('subproprtyvideo1',this.state.useproprtyvideo1);
                        formData.append('subproprtyvideo2',this.state.useproprtyvideo2);
                        formData.append('subproprtyvideo3',this.state.useproprtyvideo3);
                        formData.append(' subcheckbox',this.state.usecheckbox);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                //return console.log('my form data',formData)

                 return  post(url, formData,config)
           } ; 
        */


  render() {
      return (

      	<div className="content-area submit-property" >
            <div className="container">
                <div className="clearfix" > 
                    <div className="wizard-container"> 

                        <div className="wizard-card ct-wizard-orange" id="wizardProperty">
                            <form onSubmit={this.handlesubmit} >                        
                                <div className="wizard-header">
                                    <h3>
                                        <b>Submit</b> YOUR PROPERTY <br/>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                                    </h3>
                                </div>

                                    

                            <div className="Submitproperty">
                                <ul>
                                   <li><Link to="#step1" className="step" data-toggle="tab">Step 1 </Link></li>
                                    <li><Link to="#step2" className="step" data-toggle="tab">Step 2 </Link></li>
                                    <li><Link to="#step3" className="step" data-toggle="tab">Step 3 </Link></li>
                                    <li><Link to="#step4" className="step" data-toggle="tab">Finished </Link></li>
                                </ul>
                            </div>
                                <div className="tab-content">

                                    <div className="tab-pane" id="step1">
                                        <div className="row p-b-15  ">
                                            <h4 className="info-text"> Let's start with the basic information (with validation)</h4>
                                            <div className="col-sm-4 col-sm-offset-1">
                                                <div className="picture-container">
                                                    <div className="picture">
                                                        <img  className="picture-src" id="wizardPicturePreview" alt="img" title="" />
                                                        <input type="file"  id="wizard-picture" onChange={this.handleimg}/>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Property name <small>(required)</small></label>
                                                    <input name="propertyname" type="text" className="form-control" placeholder="Super villa ..." onChange={this.handlepropertyname}  required />
                                                </div>

                                                <div className="form-group">
                                                    <label>Property price <small>(required)</small></label>
                                                    <input name="propertyprice" type="text" className="form-control" ref="propertyprice" id="propertyprice" placeholder="3330000" onChange={this.handlepropertyprice} required  />
                                                     <p id="propertypricevarify"></p>
                                                </div> 
                                                <div className="form-group">
                                                    <label>Telephone <small>(empty if you wanna use default phone number)</small></label>
                                                    <input name="phone" type="text" className="form-control" id="phone" min="10" maxLength="10" ref="phone"  placeholder="+632-221-2221"  onChange={this.handlephone} required />
                                                             <p id="phonevarify"></p>

                                                </div>
                                            </div>
                                            
                                           
                                        </div>
                                         <div className="wizard-footer">
                                        <div className="pull-right">
                                         <Link to="#step2" className='btn btn-next btn-primary' data-toggle="tab" onClick={this.handlealert}>next </Link>
                                        </div>
                                        <div className="clearfix"></div> 
                                        </div>
                                        
                                    </div>
                               

                                    <div className="tab-pane" id="step2">
                                        <h4 className="info-text"> How much your Property is Beautiful ? </h4>
                                        <div className="row">
                                            <div className="col-sm-12"> 
                                                <div className="col-sm-12"> 
                                                    <div className="form-group">
                                                        <label>Property Description :</label>
                                                        <textarea name="discrition" className="form-control" ref="propertydescreption" id="propertydescreption" onChange={this.handlediscrition} required ></textarea>
                                                        <p id="descreptionvarify"></p>
                                                    </div> 
                                                </div> 
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label>Property State :</label>
                                                        <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your state" onChange={this.handleselectstate} required >
                                                            <option>Utter Pradesh</option>
                                                            <option>Delhi</option>
                                                            
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label>Property City :</label>
                                                        <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city" onChange={this.handleselectcity}>
                                                            <option>Noida</option>
                                                            <option>Ghaziabad</option>
                                                            <option>Greater Noida</option>
                                                            <option>Delhi Local</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label>Property Statue  :</label>
                                                        <select id="basic" className="selectpicker show-tick form-control" onChange={this.handleselectstatus} required  >
                                                            <option> -Status- </option>
                                                            <option>Rent </option>
                                                            <option>Buy</option>
                                                             

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label>Lease Perioud :</label>
                                                        <select id="basic" className="selectpicker show-tick form-control"onChange={this.handleselectperioud}>
                                                            <option> -Status- </option>
                                                            <option>1 year </option>
                                                            <option>2 year </option>
                                                            <option>3 year</option>  

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 padding-top-15">                                                   
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label >Min bed :</label>
                                                        <input type="text" className="form-control"  onChange={this.handleminbed}  required  />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-sm-4">

                                                    <div className="form-group">
                                                        <label >Property Area  :</label>
                                                        <input type="text" className="form-control" ref="propertyarea"  onChange={this.handlepropertyarea} required  />
                                                        <p id="propertyareavarify"></p>
                                                    </div>
                                                </div>   
                                            </div>
                                            <div className="col-sm-12 padding-top-15">
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="Swimming Pool" onChange={this.handleswimming} /> Swimming Pool
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="2 Stories" onChange={this.handlestories}/> 2 Stories
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>                                                 
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="Emergency Exit" onChange={this.handleemergencyexit}/> Emergency Exit
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>                                                 
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="Fire Place" onChange={this.handlefireplace}/> Fire Place 
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 
                                            <div className="col-sm-12 padding-bottom-15">
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="Laundry Room" onChange={this.handlelaundryroom}/> Laundry Room
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="Jog Path" onChange={this.handlejogpath} /> Jog Path
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="Ceilings" onChange={this.handleceilings}/> Ceilings
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" value="Dual Sinks" onChange={this.handledualsinks} /> Dual Sinks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                          
                                        </div>
                                         <div className="wizard-footer">
                                            <div className="pull-right">
                                                <Link to="#step3" className='btn btn-next btn-primary' data-toggle="tab">next </Link>
                                            </div>

                                            <div className="pull-left">
                                                <Link to="#step1" className='btn btn-next btn-primary' data-toggle="tab">previous</Link>
                                            </div>
                                             <div className="clearfix"></div> 
                                         </div>
                                    </div>
                                  

                                    <div className="tab-pane" id="step3">                                        
                                        <h4 className="info-text">Give us somme images and videos ? </h4>
                                        <div className="row">  
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Chose Images :</label>
                                                    <input className="form-control" type="file" name="filetoupload" id="property-images" onChange={this.handleproprtyimages}/>
                                                    <p className="help-block">Select multipel images for your property .</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6"> 
                                                <div className="form-group">
                                                    <label>Property video :</label>
                                                    <input type="text" className="form-control" placeholder="http:www.youtube.com, http:vimeo.com" onChange={this.handleproprtyvideo1}/>
                                                    
                                                </div> 

                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="http:www.youtube.com, http:vimeo.com" onChange={this.handleproprtyvideo2}/>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="http:www.youtube.com, http:vimeo.com" onChange={this.handleproprtyvideo3}/>
                                                </div>
                                            </div>
                                        </div>
                                         <div className="wizard-footer">
                                         <div className="pull-right">
                                         <Link to="#step4" className='btn btn-next btn-primary' data-toggle="tab">next </Link>
                                        </div>

                                        <div className="pull-left">
                                        <Link to="#step2" className='btn btn-next btn-primary' data-toggle="tab">previous</Link>
                                        </div>
                                         <div className="clearfix"></div> 
                                        </div>
                                    </div>
                                  


                                    <div className="tab-pane" id="step4">                                        
                                        <h4 className="info-text"> Finished and submit </h4>
                                        <div className="row">  
                                            <div className="col-sm-12">
                                                <div className="">
                                                    <p>
                                                        <label><strong>Terms and Conditions</strong></label>
                                                        By accessing or using  GARO ESTATE services, such as 
                                                        posting your property advertisement with your personal 
                                                        information on our website you agree to the
                                                        collection, use and disclosure of your personal information 
                                                        in the legal proper manner
                                                    </p>

                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" onChange={this.handlecheckbox}  required  /> <strong>Accept termes and conditions.</strong>
                                                        </label>
                                                    </div> 
                                                    <div className="wizard-footer">
                                                        <div className="pull-right">
                                                            <input type='submit' className='btn btn-next btn-primary' name='finish' value='Finish' /> 
                                                        </div>
                                                        <div className="pull-left">
                                                            <Link to="#step3" className='btn btn-next btn-primary' data-toggle="tab">previous</Link>
                                                        </div>
                                                         <div className="clearfix"></div> 
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
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
export default Submitproperty ;