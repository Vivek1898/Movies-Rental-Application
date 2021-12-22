import React from 'react';

const s={
    display: "flex",
    flexDirection: "row",
    paddingTop:"5px",
    paddingBottom:"5px",
    paddingLeft: 0,
    marginBottom: 0,
    borderRadius: "0.25 rem",
    justifyContent: "space-evenly",
    alignContent: "center",
    flexWrap: "wrap",
    cursor:"pointer"
}

const Listgroup = (props) => {
    const {items,textProperty,valueProperty ,onitemSelect,selecteditem}=props;
    //Mow map each item in array
    //Give key
    //Render Text
    return <ul style={s} className="list-group">
        {items.map(item =><li 
        onClick={() => onitemSelect(item)}
        key={item[valueProperty]} 
        className={item === selecteditem?"list-group-item list-group-item-danger active":"list-group-item list-group-item-secondary"}>
        {item[textProperty]}</li>)}
        
    </ul>;
};

Listgroup.defaultProps={
    textProperty:"name",
    valueProperty:"_id"
}
 
export default Listgroup;