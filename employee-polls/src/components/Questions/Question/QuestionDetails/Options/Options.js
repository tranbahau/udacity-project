import { Fragment } from 'react';
import Option from './Option/Option';

export default function Options({ options }) {
  return (
    <Fragment>
      {options.map((option) => (
        <div key={option.optionType}>
          <Option option={option} />
        </div>
      ))}
    </Fragment>
  );
}
