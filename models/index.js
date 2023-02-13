// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Students, Guardians } = initSchema(schema);

export {
  Students,
  Guardians
};