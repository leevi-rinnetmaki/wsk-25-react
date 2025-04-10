import PropTypes from "prop-types";

export const MediaRow = (props) => {
    const {item, setSelectedItem} = props;
    return (
      // TODO: move <tr> element in foreach from Home.jsx here
        <tr key={item.media_id}>
            <td>
                <img src={item.thumbnail} alt={item.title} />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
            <td>{item.filesize}</td>
            <td>{item.media_type}</td>
            <td>
                <button onClick={(()=>setSelectedItem(item))}>VIÊW</button>
            </td>
        </tr>
    );
  };

MediaRow.propType = {
    item: PropTypes.object.isRequired,
    setMediaItem: PropTypes.func.isRequired,
};

export default MediaRow;