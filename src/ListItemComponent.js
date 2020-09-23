import React, { useState } from "react";
import { ListItem, ListItemIcon, Checkbox, ListItemText } from "@material-ui/core/";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Input from '@material-ui/core/Input';


function ListItemComponent(props) {

    const [checked, setChecked] = useState(false)
    const [textData, setTextData] = useState(props.dataFromParent)
    const [isEditButtonClicked, setButtonBehavior] = useState(false)
    const [input, setInput] = useState('');
    

    const styles = {
        textDecorationLine: 'line-through',
        color: "#c0c0c0"
    }

    function handleEdit() {
        setButtonBehavior(!isEditButtonClicked)
        setTextData(input)
    }

    function handleBlur(event) {
      setButtonBehavior(!isEditButtonClicked)
      setTextData(input)
    }


    return(
      
        <div>
            <ListItem button style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
            <ListItemIcon>
              <Checkbox checked={checked} onChange={() => setChecked(!checked)}/>
            </ListItemIcon> 
            {
              isEditButtonClicked ? 
              <Input style={{ width: '472px' }}value={input} onBlur={handleBlur} onChange={(event) => setInput(event.target.value)}/> 
              : <ListItemText primary={textData} style={ checked ? styles : null } />
            }
            <ListItemIcon>
              <DeleteIcon style={{ color: "red" }}  onClick={ () => props.action(props.dataIndex)}/>
            </ListItemIcon>
            <EditIcon onClick={handleEdit} />
          </ListItem>
        </div>
    )
}

export default ListItemComponent
