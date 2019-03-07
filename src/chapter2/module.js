// const fs = require('fs');

// 解构方式的模块加载，实际上也是先加载整个fs对象
// 然后再从fs上拿到其他的变量
// 并且必须要等到代码运行的时候才能获取
// 这种加载方式，叫做运行时加载
// const { writeFile } = require('fs');

//静态加载：
// 代码在编译的时候，就能获取到这个方法

import { writeFile } from 'fs';
