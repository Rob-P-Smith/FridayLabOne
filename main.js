import lodash from 'lodash';
import chalk from 'chalk';

const array = [1,2,3,4,5,6,6,2,1,2,3,4,89];
const uniqueNums = lodash.uniq(array);
console.log(chalk.yellow(uniqueNums));

console.log(chalk.blueBright("Hello, with chalk!"));


