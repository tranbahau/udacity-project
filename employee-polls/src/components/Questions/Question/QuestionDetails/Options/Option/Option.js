import { Fragment } from 'react';
import classes from '../Option/Option.module.css';
import OptionDetails from './OptionDetails/OptionDetails';

export default function Option({ option }) {
  const {
    optionType,
    totalVotes,
    userAnswer,
    optionVotes,
    optionPercentage,
    text,
  } = option;

  return (
    <Fragment>
      <div
        className={classes.container}
        style={
          userAnswer === optionType ? { border: 'solid 1px #352dd8' } : null
        }>
        {userAnswer === optionType ? <span> &#10003; Your answered</span> : ''}
        <p>{text}</p>
        <OptionDetails percentage={optionPercentage} />
        <p>
          {optionVotes} of {totalVotes} votes
        </p>
      </div>
    </Fragment>
  );
}
