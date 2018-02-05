
import './index.css';
import numeral from 'numeral';

/*eslint-disable no-console */

const randomPrice = numeral(1000).format('$0,0.00');
console.log(`This table costs ${randomPrice} and it looks great!`);
