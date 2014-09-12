Router.configure({
  waitOn: function() {
    console.log('global waitOn');
  },
  onBeforeAction: function() {
    console.log('global onBeforeAction');
  }
});

Router.route('/', {
  waitOn: function() {
    console.log('root waitOn');
  },
  onBeforeAction: function() {
    console.log('root onBeforeAction');
  },
  action: function() {
    console.log('root action')
  }
})

Router.route('/a', {
  waitOn: function() {
    console.log('a waitOn');
  },
  onBeforeAction: function() {
    console.log('a onBeforeAction');
  },
  action: function() {
    console.log('a action')
  }
});
