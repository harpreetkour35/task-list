import React from "react";
import { ListItem, ListItemIcon, Checkbox, ListItemText, } from "@material-ui/core/";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


function ListItemComponent(props) {

    const [checked, setChecked] = React.useState(false)
    const [textData, setTextData] = React.useState(props.dataFromParent)

    const styles = {
        textDecorationLine: 'line-through',
        color: "#c0c0c0"
    }

    function handleEdit() {
        let newText = prompt("Rename Task")
        setTextData(newText)
    }

    return(
        <div>
            <ListItem button style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
            <ListItemIcon>
              <Checkbox checked={checked} onChange={() => setChecked(!checked)}/>
            </ListItemIcon>
            <ListItemText primary={textData} style={ checked ? styles : null } />
            <ListItemIcon>
              <DeleteIcon style={{ color: "red" }} onClick={props.delete}/>
            </ListItemIcon>
            <EditIcon onClick={handleEdit} />
          </ListItem>
        </div>
    )
}

export default ListItemComponent