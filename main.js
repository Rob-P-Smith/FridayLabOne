import lodash from 'lodash';
import chalk from 'chalk';
import colors from 'colors';
import { faker } from '@faker-js/faker';
import validator from 'validator';

const array = [1,2,3,4,5,6,6,2,1,2,3,4,89];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);
console.log(chalk.yellow.bgRed(uniqueNums));

console.log(chalk.red.bgBlack("Welcome to our application!"));
console.log(chalk.redBright.bgGreen("Hello, user!"));
console.log(chalk.redBright.bgRed("This will be printed on a red background."));
console.log(chalk.redBright.bgGreen("And this will be printed with a green background."));

function displayNumbers() {
    let i = 1;
    function delay(num) {
        return new Promise(resolve => setTimeout(() => resolve(), num * 1000));
    }

    async function main() {
        while (i <= 10) {
            await delay(1);
            console.log(i);
            i++;
        }
    }
    main();
}

displayNumbers();


