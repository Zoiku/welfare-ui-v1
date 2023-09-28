import { format } from "../functions/Misc";

const Number = ({ value, currency, percentage }) => {
  if (currency) {
    return format(value);
  }

  if (percentage) {
    return `${value}%`;
  }
};

export default Number;
