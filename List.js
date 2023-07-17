import "./index.css";
function List (props) {
    const removeItem = (key) =>{
        const newList=props.li.filter(itemobj =>
           { return itemobj.key!==key;}
           );
           props.updateli(newList);
};
//   console.log("props",props);
return(
    <div>
{props.li.map(itemobj =>{
    return (<div className="items">
        <p>{itemobj.item}</p>
        <button onClick={()=>removeItem(itemobj.key)}>-</button>
        </div>
        );
})}
</div>
);
}

export default List;


