import Collapsible from "react-collapsible";
import { useState } from "react";
import "./Purchaselist.css";
export default function Purchaselist({ Lotteryname, Drawdate,purchaselist, updatestatus }) {
  console.log("purchase in purchaselist",purchaselist )
  // const [array, setArray] = useState([
  //   { id: 1, lottno: 123 },
  //   { id: 2, lottno: 143 },
  //   { id: 3, lottno: 125 },
  // ]);
 
  const changetext = (index) => {
    if (document.getElementById(index).innerHTML == "Not Purchased") {
      document.getElementById(index).innerHTML = "Purchased";
    } else {
      document.getElementById(index).innerHTML = "Not Purchased";
    }
  };
  return (
    <div className="Purlist">
       
      
        <Collapsible
         trigger={
           <div className="Purlist_head">
            
             <label className="Purlist_head_label1">
               {"txtLotteryname"}Kerala Bumper{" "}
             </label>
             <label>DrawDate:{"dtLotterydrawdate"}</label>
           </div>
         }
       >
         <div className="Purlist_table">
           <table>
             <thead>
               <tr>
                 <th>Lottery Number</th>
                 <th>Purchase status</th>
               </tr>
             </thead>
             <tbody>
             {purchaselist.map((itm,indx)=>{
        return<>
                <tr>
                       <td>{itm.txtLotteryNumber}</td>
                       <td>
                         <button
                           id={itm.id}
                           onClick={(e) => {
                             changetext(itm.id);
                             updatestatus(e,itm.id)
                           }}
                         >
                           Not Purchased
                         </button>
                       </td>
                     </tr>
              
                     </>
      })}
                  
             </tbody>
           </table>
           
         </div>
       </Collapsible>
      
     
    </div>
  );
}
