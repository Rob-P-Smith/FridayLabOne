import lodash from 'lodash';
import chalk from 'chalk';
import colors from 'colors';
import { faker } from '@faker-js/faker';
import validator from 'validator';

const array = [1,2,3,4,5,6,6,2,1,2,3,4,89];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);
console.log(chalk.yellow.bgRed(uniqueNums));

console.log(chalk.blueBright.bgCyan("Hello, with chalk and colors!"));


