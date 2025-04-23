import PropTypes from 'prop-types';
import {Link} from 'react-router';

export const MediaRow = (props) => {
  const {item} = props;
  return (
    <tr key={item.media_id} className="*:border-2 *:border-stone-50 m-2">
      {/* <td>{item.media_id}</td> */}
      {/* <td>{item.user_id}</td> */}
      {/* <td>{item.username}</td> */}
      {/* <td>{item.user_email}</td> */}
      {/* <td>{item.user_role}</td> */}
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td className="group hover:bg-amber-200 group-hover:text-stone-900">
        <Link
          to="/single"
          state={{item}}
          className="block group-hover:bg-amber-200 group-hover:text-stone-900"
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
