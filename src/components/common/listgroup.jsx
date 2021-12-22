import React from 'react';

const Listgroup = (props) => {
    const {items,textProperty,valueProperty ,onitemSelect,selecteditem}=props;
    //Mow map each item in array
    //Give key
    //Render Text
    return <ul className="list-group">
        {items.map(item =><li 
        onClick={() => onitemSelect(item)}
        key={item[valueProperty]} 
        className={item === selecteditem?"list-group-item list-group-item-danger active":"list-group-item list-group-item-success"}>
        {item[textProperty]}</li>)}
        
    </ul>;
};

Listgroup.defaultProps={
    textProperty:"name",
    valueProperty:"_id"
}
 
export default Listgroup;