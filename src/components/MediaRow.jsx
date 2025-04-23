import PropTypes from 'prop-types';
import {Link} from 'react-router';

export const MediaRow = (props) => {
  const {item} = props;
  return (
    <tr key={item.media_id} className="*:border-1 *:border-stone-50">
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td className="group">
        <Link
          to="/single"
          state={{item}}
          className="block w-full h-full group-hover:bg-amber-200 group-hover:text-stone-900 border-2"
        >
          Show
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propType = {
  item: PropTypes.object.isRequired,
  setMediaItem: PropTypes.func.isRequired,
};

export default MediaRow;
