import numeral from 'numeral';
import './index.css';

const courseValue = numeral(100).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} of ML dough for this course`); // eslint-disable-line no-console
