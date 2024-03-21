import { Meteor } from 'meteor/meteor';
import { ROLE } from '../../api/role/Role';
import { AdminProfiles } from '../../api/user/AdminProfileCollection';
import { UserProfiles } from '../../api/user/UserProfileCollection';
import { VolunteerProfiles } from '../../api/user/VolunteerProfileCollection';
import { OrganizationProfiles } from '../../api/user/OrganizationProfileCollection';

// eslint-disable-next-line no-undef
const dummyVolunteers = Assets.getText('volunteers/dummy-volunteers.json');

/* eslint-disable no-console */

function createUser(email, role, firstName, lastName, name, password) {
  console.log(`  Creating user ${email} with role ${role}.`);
  if (role === ROLE.ADMIN) {
    AdminProfiles.define({ email, firstName, lastName, password });
  } else if (role === ROLE.VOLUNTEER) {
    VolunteerProfiles.define({ email, firstName, lastName, password });
  } else if (role === ROLE.ORGANIZATION) {
    OrganizationProfiles.define({ email, name, password });
  } else { // everyone else is just a user.
    UserProfiles.define({ email, firstName, lastName, password });
  }
}

function createTestUser(email, role, firstName, lastName, name, password) {
  console.log(`  Creating  test user ${email} with role ${role}.`);
  if (role === ROLE.VOLUNTEER) {
    VolunteerProfiles.define({ email, firstName, lastName, password });
  } else if (role === ROLE.ORGANIZATION) {
    OrganizationProfiles.define({ email, name, password });
  } else { // everyone else is just a user.
    UserProfiles.define({ email, firstName, lastName, password });
  }
}

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role, firstName, lastName, name }) => createUser(email, role, firstName, lastName, name, password));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

// For creating test user
if (dummyVolunteers) {
  console.log('Creating the test volunteer user(s)');
  const volunteersData = JSON.parse(dummyVolunteers);
  volunteersData.forEach(({ email, password, role, firstName, lastName, name }) => createTestUser(email, role, firstName, lastName, name, password));
}
