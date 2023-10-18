import classes from './OptionsDetails.module.css';

export default function OptionDetails({ percentage }) {
  return (
    <div className={classes.progressBar}>
      <span
        className={classes.progressBarFill}
        style={{ width: `${percentage}%` }}>
        {percentage}%
      </span>
    </div>
  );
}
