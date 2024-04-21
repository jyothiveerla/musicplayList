import {MdDelete} from 'react-icons/md'
import './index.css'

const Tracks = props => {
  const {tracksDetails, deleteTrack} = props
  const {imageUrl, name, genre, duration, id} = tracksDetails

  const onDelete = () => {
    deleteTrack(id)
  }
  return (
    <li className="list_container">
      <div className="bg_container">
        <div>
          <img src={imageUrl} alt="track" />
          <div className="name_container">
            <p className="paragraph">{name}</p>
            <p className="para">{genre}</p>
          </div>
        </div>
        <div className="duration_container">
          <p className="paragraph">{duration}</p>
          <div data-testid="delete">
            <MdDelete onClick={onDelete} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default Tracks
