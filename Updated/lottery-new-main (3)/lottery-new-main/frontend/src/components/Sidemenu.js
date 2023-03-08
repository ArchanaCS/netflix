import "./Sidemenu.css";
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs"
import { TfiBriefcase } from "react-icons/tfi"
import { FiFilter, FiArrowUp, FiArrowDown } from "react-icons/fi"
import { GiPodiumWinner } from "react-icons/gi"
export default function Sidemenu({label1,label2,label3,label4,label5,label6,label7,label8,label9,shwFilter, shwAddresult, shwAddlottery, shwAddprovider, shwPurchasesummary, shwResult, shwPurchaselist, shwResultupdate}){
    const [show, setDownarrow] = useState(false)
    return (
                <div className="sidemenu_menu">
                    <div className=" sidemenu_list" onClick={e=>{shwFilter()}}>
                        <span><FiFilter color="white"/></span><label>{label1}</label>
                    </div>
                    <div className="sidemenu_list">
                    <span><TfiBriefcase color="white"/></span><label onClick={() => setDownarrow(!show)}> {label2}</label>
                        <button >{show ? <FiArrowUp color="white" size="20px" /> : <FiArrowDown color="white" size="20px" />}</button>
                    </div>
                    {show &&
                        <div className="sidemenu_submenu">
                            <div className="sidemenu_sublist" onClick={e=>{shwAddresult()}}>
                                <label>{label3}</label>
                            </div>
                            <div className="sidemenu_sublist" onClick={e=>{shwAddlottery()}}>
                                <label>{label4}</label>
                            </div>
                            <div className="sidemenu_sublist" onClick={e=>{shwAddprovider()}}>
                                <label>{label5}</label>
                            </div>
                            <div className="sidemenu_sublist" onClick={e=>{shwResultupdate()}}>
                                <label>{label6}</label>
                            </div>
                        </div>
                    }
                    <div className="sidemenu_list" onClick={e=>{shwPurchasesummary()}}>
                    <span><BsGraphUp color="white"/></span><label> {label7}</label>
                    </div>
                    <div className="sidemenu_list" onClick={e=>{shwPurchaselist()}}>
                    <span><GiPodiumWinner color="white"/></span><label> {label8}</label>
                    </div>
                    <div className="sidemenu_list" onClick={e=>{shwResult()}}>
                    <span><GiPodiumWinner color="white"/></span><label>{label9}</label>
                    </div>
                    
                </div>
    )
}