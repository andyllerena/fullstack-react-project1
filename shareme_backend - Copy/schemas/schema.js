// schema.js
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import schemas
import user from '../schemaTypes/user'; // make sure this path is correct

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    user,
    // ... other schemas
  ]),
});
