import { Link } from 'react-router-dom';
import classes from './Question.module.css';

export default function Quesiton({ questionDetails }) {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={questionDetails.avatarUrl} alt="" className={classes.img} />
      </div>
      <div className={classes.info}>
        <h3 className={classes.userName}>{questionDetails.author}</h3>
        <div className={classes.time}>
          {new Date(questionDetails.timestamp).toUTCString()}
        </div>
        <Link to={`/questions/${questionDetails.id}`}>
          <button>Show</button>
        </Link>
      </div>
    </div>
  );
}
