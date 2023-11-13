import React , {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function ToDoItem(props) {
  const [line ,setLine] = useState(false);
  function change() {
     setLine(prev => !prev);
  }
  
  return (
    <div className="dd">
      <li style={line?{textDecoration: "line-through"}:null} onClick={change}>{props.text}</li>
      <DeleteIcon onClick={() => {
        props.onChecked(props.id);
      }}/>
    </div>
    
  );
}

export default ToDoItem;
