import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import MainLayout from '../imports/startup/client/index.js';

Meteor.startup(() => {
  render(<MainLayout />, document.getElementById('react-target'));
});
