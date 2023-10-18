import { Fragment } from 'react';
import classes from './UserInformation.module.css';

const UserInformation = ({ user }) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={user.avatarURL} alt="" className={classes.img} />
        </div>
        <div className={classes.info}>
          <h4 className={classes.userName}>{user.name}</h4>
          <p className={classes.scoreItem}>
            <span>Answered </span>
            <span>{user.answered}</span>
          </p>
          <p className={classes.scoreItem}>
            <span>Created </span>
            <span>{user.asked}</span>
          </p>
        </div>
        <div className={classes.scoreContainer}>
          <div>Score</div>
          <div className={classes.score}>{user.total}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserInformation;
