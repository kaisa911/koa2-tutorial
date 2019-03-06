// const arrow = function(param) {};

// const arrow = param => {};

// const arrow = param => console.log(param);

// const arrow = param => ({ param: param });

// const arrow = (param1, param2) => {};

// const arrow = ({ id, movie }) => console.log(id, movie);

/**
 * 箭头函数的一大特点，就是简化代码，语法简洁
 * 同时箭头函数里的this，指向到箭头函数定义的时候，所属的作用域下，
 * 而不是运行的时候，this 可控安全
 */

const luke = {
  id: 2,
  say: function() {
    setTimeout(function() {
      console.log('id', this.id);
    }, 50);
  },
  sayWithThis: function() {
    let that = this;

    setTimeout(function() {
      console.log('this.id', that.id);
    }, 500);
  },

  sayWithArrow: function() {
    setTimeout(() => {
      console.log('arrow id', this.id);
    }, 1500);
  },

  sayWithGlobalArrow: () => {
    setTimeout(() => {
      console.log('global arrow id', this.id);
    }, 2000);
  }
};

luke.say();  // id undefined
luke.sayWithThis(); // this.id 2
luke.sayWithArrow(); // arrow id 2
luke.sayWithGlobalArrow(); // global arrow id undefined
