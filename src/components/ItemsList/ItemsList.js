import "./ItemsList.css";
const ItemsList = (props) => {
  const { data, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="listItem"
        key={id}
        //onClick={() => props.onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return <ul className="ItemsList">{items}</ul>;
};

export default ItemsList;
