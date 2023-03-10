
import "./Userreport.css";
import HeaderUser from "../components/HeaderUser";
import { useEffect, useState } from "react";
import config from "../config.json";
import axios from "axios";
import { default as ReactSelect } from "react-select";
import Filterbox from "../components/Filterbox"
import { components } from "react-select";
export const colourOptions = [
  { value: "lottname", label: "Lottery Name" },
  { value: "Providername", label:"Provider Name" },
];
export default function Userreport() {
  const [userreportlist,setUserreportlist]=useState([])
  const [totalprize,setTotalprize]=useState("")
  const [usershow,setUsershow]=useState(false)
  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  useEffect(()=>{

    let url=config.url+"userreport";
    let request={id:12};
    let header={};
    axios.post(url,request,header).then((res)=>{
      console.log(res.data)
      setUserreportlist(res.data)
      
      const temp=[...res.data]
      var sum=userreportlist.reduce(function(tot,userreportlist)
      {
        
        return tot+ userreportlist.txtPrizemoney
      },0)
      console.log("sum",sum)
      setTotalprize(sum)
    }).catch()

  },[])
  return (
    
    <>
    <div className="userreport_headerUser">
        {" "}
        <HeaderUser
          label1={"test"}
          label2={0}
          label3={"My Cart"}
          label4={"Home"}
          label5={"Dashboard"}
          label6={"Profile"}
          label7={"About Us"}
          label8={"Buy Now"}
          // label4click={label4click}
          // label5click={label5click}
          // label7click={label7click}
          // label6click={label6click}
          // label8click={label8click}
        />
      </div>
     
    
    <div className="Userrreport_container">
      <div className="Userreport_header">
        <div className="Userreport_reactselect">
        <ReactSelect
          options={colourOptions}
          // isMulti
          // closeMenuOnSelect={false}
          // hideSelectedOptions={false}
          components={{
            Option
          }}
          
          // onChange={this.handleChange}
          // allowSelectAll={true}
          // value={this.state.optionSelected}
        />
        </div>
        {/* <div className="Userreport_header_left">
          <label>Filters with multiselect</label>
        </div>
        <div className="Userreport_header_right">
          <label>Lottery name & DrawDate</label>
        </div> */}
        
      </div>
      
      <div className="Userreport_box">
            <div className="Userreport_row1">
                <div><label>Lottername: Lottery1</label></div>
                <div><label>DrawDate :2001-10-10</label>
                <label className="Userreport_row1_text">ProviderName : Liya</label></div>
            </div>
            <div className="Userreport_row2">
                <label>Matching nos</label>
                <div><label >No of matches </label><label className="Userreport_row2_text">prizemoney</label></div>
            </div>
            {userreportlist.map((itm,indx)=>{
              return<>
               <div className="Userreport_row3">
                <div><label>{itm.txtMatchnum}</label></div>
                <div> <label>{itm.txtMatchingcount}</label>
                <label className="Userreport_row3_text">{itm.txtPrizemoney}</label></div>
            </div>
              </>
            })}
           
             
            <div className="Userreport_row6">
            <div><label>{totalprize}</label></div>
            </div>
        </div>
       
        </div>
    </>
  );
}