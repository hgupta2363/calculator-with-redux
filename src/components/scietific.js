import React from 'react';
import { Button } from 'reactstrap';
import Operation from './operation'
const Scientific =(props)=>{
    console.log(props)
if(props. scientificModeOn)
{
    console.log("tpr")
    return(
        <div>
             <div className="row no-gutters">
          <div className="col-3">
          <Operation operation="square"/>
          </div>
          <div className="col-3">
          <Operation operation="+/-"/>
          </div>
          <div className="col-3">
          <Operation operation="root"/>
          </div>
          <div className="col-3" className="op">
          <Operation operation=""/>
          </div>
          </div>
        </div>
    )
}
else
{
return(

    <div>

    </div>
)
}

}
export default Scientific