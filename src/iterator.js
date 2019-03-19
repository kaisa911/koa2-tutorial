// function makeIterator(arr) {
//   let nextIndex = 0;

//   // 返回一个迭代器对象
//   return {
//     next: () => {
//       if (nextIndex < arr.length) {
//         return {
//           value: arr[nextIndex++],
//           done: false
//         };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// }

// const it = makeIterator(['吃饭', '睡觉', '打豆豆']);

// console.log('首先', it.next().value);
// console.log('其次', it.next().value);
// console.log('然后', it.next().value);
// console.log('最后', it.next().done);

/**
 * 迭代器
 * 迭代器总会有个next()方法，它总能拿到一个对象
 * 这个对象的value，就是某一次迭代的结果
 * 这个done标识，是表示这个迭代器当前的迭代是否完成
 */

/**
 * 生成器
 * 生成器函数呢，就是一个可以放回一个迭代器的函数
 * 本质上还是在操作迭代器
 * 只不过借助生成器来完成这件事情
 */

function* makeIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const gen = makeIterator(['吃饭', '睡觉', '打豆豆']);

console.log('首先', gen.next().value);
console.log('其次', gen.next().value);
console.log('然后', gen.next().value);
console.log('最后', gen.next().done);

/**
 * 生成器的出现，就是为了简化自己写迭代器一大段的return的方法
 * 其实就是为了简化迭代器的生成过程
 * yield 关键字，可以实现断点执行
 */
