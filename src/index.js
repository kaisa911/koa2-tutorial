// import { promisify } from 'util';
// import { resolve } from 'path';
// import { readFile, writeFileSync } from 'fs';
// import * as qs from 'querystring';

// promisify(readFile)(resolve(__dirname, '../package.json')).then(data => {
//   data = JSON.parse(data);

//   console.log(data.name);

//   writeFileSync(resolve(__dirname, './name'), String(data.name), 'utf8');
// });

import {name, getName} from './ex';
import age from './ex';

console.log(name);
console.log(getName())
console.log(age)
