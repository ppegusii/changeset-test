import Ember from 'ember';

const Phones = Ember.Object.extend();

export default Ember.Route.extend({
  model(){
    return {
      firstName: 'Patrick',
      lastName: 'Pegus',
      contact: {
        phones: Phones.create({
          home: '4133421180',
          work: '4134396354'
        }),
        email: 'ppegusii@gmail.com'
      },
      aliases: [
        { name: 'John Doe' },
        { name: 'Grits N Gravy' }
      ]
    };
  }
});
