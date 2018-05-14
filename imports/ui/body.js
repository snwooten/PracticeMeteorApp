import { Template } from 'meteor/templating';

import { Plants } from '../api/plants.js';

import './body.html';

Template.body.helpers({
  plants() {
    return Plants.find({}, {sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-plant'(event) {
    event.preventDefault();

    const target = event.target;
    const name = target.name.value;
    const type = target.type.value;

    Plants.insert({
      name,
      type,
      createdAt: new Date(),
    });
    target.name.value = '';
    target.type.value = '';
  },
  'click .remove-plant'() {
    Plants.remove(this._id);
  },
});

// Template.body.helpers({
//   plants: [
//     {name: 'Phillis', type: 'Phylodendron'},
//     {name: 'Kurt', type: 'Aloe'},
//     {name: 'Marisol', type: 'Polka Dot Plant'},
//     {name: 'Nerwood', type: 'Norwood Pine'},
//     {name: 'Sylvia', type: 'African Violet'},
//   ],
// });
