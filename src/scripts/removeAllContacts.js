import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch {
    console.log('Error deleting contacts');
  }
};

removeAllContacts();
