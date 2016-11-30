import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      firstName: 'Patrick',
      lastName: 'Pegus',
      contact: {
        phone: '4133421180',
        email: 'ppegusii@gmail.com'
      },
      aliases: [
        { name: 'John Doe' },
        { name: 'Grits N Gravy' }
      ]
    };
  }
});
