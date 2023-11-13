import React from "react";
import AddIcon from '@mui/icons-material/Add';
function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.change} type="text" value={props.input} />
      <button onClick={props.add}>
        <AddIcon />
      </button>
    </div>
  );
}

export default InputArea;
