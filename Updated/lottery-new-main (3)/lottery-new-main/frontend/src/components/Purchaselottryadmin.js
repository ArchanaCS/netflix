import { useState } from "react";
import "./Purchaselotteryadmin.css"
export default function Purchaselotteryadmin(){
    const [purchase, setPurchase]=useState([]);
return<>
 <div>
              <div className="purchaseadminlottery_main">
                {" "}
                <label>Purchase Admin Lottery</label>
                <button onClick={e=>{
                  let k=[...purchase]
                  k.push({provider:"",lotteryname:"",ticketno:"",drawdate:""})
                  setPurchase(k)
                }}>Add New</button>
              </div>
              <table>
                <tr>
                  {" "}
                  <th>Provider</th>
                  <th>LotteryName</th>
                  <th>Ticket Number</th>
                  <th>DrawDate</th>
                      <th>Delete</th>
                </tr>
                {purchase.map((itm, indx) => {
                  return (
                    <tr>
                    <td><input value={itm.provider} onChange={e=>{ 
                      let k=[...purchase]
                      k[indx].provider=e.target.value
                      setPurchase(k)
                     }} type={"text"} placeholder="Provider"/></td>
                    <td><input value={itm.lotteryname} onChange={e=>{ 
                      let k=[...purchase]
                      k[indx].lotteryname=e.target.value
                      setPurchase(k)
                     }} type={"text"} placeholder="LotteryName"/></td>
                    <td><input type={"text"} placeholder="Ticket Number"/></td>
                    <td><input type={"text"} placeholder="DrawType"/></td>
                   
                      <th><button onClick={e=>{
                         let k=[...purchase]
                         k.splice(indx,1)
                         setPurchase(k)
                      }}>Delete</button></th>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <button className="savebutton" onClick={e=>{
                      console.log(purchase)
                    }}>SAVE</button>
                  </td>
                </tr>
              </table>
            </div>
</>
}
