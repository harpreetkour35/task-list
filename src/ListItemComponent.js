import React from "react";
import { ListItem, ListItemIcon, Checkbox, ListItemText, } from "@material-ui/core/";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ListItemComponent(props) {

    function handleCheckboxChange(event) {
        console.log(event.target)
         
      }
    return(
        <div>
            <ListItem button style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
            <ListItemIcon>
              <Checkbox style={{ color: "blue" }} onChange={handleCheckboxChange} />
            </ListItemIcon>
            <ListItemText primary={props.dataFromParent}/>
            <ListItemIcon>
              <DeleteIcon style={{ color: "red" }} onClick={() => {console.log("Hi")} }/>
            </ListItemIcon>
            <EditIcon />
          </ListItem>
        </div>
    )
}

export default ListItemComponent