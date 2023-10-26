// ApiInteraction.js
import axios from 'axios';

const ApiInteraction = () => {

  const apiUrl = 'https://dev-mrp.insby.tech/api';
  const username = 'hQtwpolwKTjUkNAkZGeSiOkhp2OP8UA6TAPyA7bOWLFXTPPJOMzQUOOhLg43uXoFIuA5T4yKySJnHZhhVNWBqfNLcaKBfrAx';
  const password = 'lolci3wdjsHDhFsQOnubYma5Zl33BPwE4NA5wftU9qxJnmIkP3ju8qw0F6ECjF4kvmp3SwNuLZrEMQezkFHqOMYjCBVJJzxv';

  // Encode credentials for Basic Authentication
  const credentials = btoa(`${username}:${password}`);
  const headers = { Authorization: `Basic ${credentials}` };

  const initApp = async () => {
    try {
      // Make a POST request to initialize the app
      const response = await axios.post(
        `${apiUrl}/v2/init/app`,
        {
          uuid: 'uuidv4',  
          uuidOS: 'Windows',
        },
        { headers }
      );

      // Check if the authentication token is present in the response
      const authToken = response.data.data.token;
      if (authToken) {
        // Save the authentication token in local storage
        localStorage.setItem('authToken', authToken);
      } else {
        // Log an error if the authentication token is not found
        console.error('Token not found in the response:', response.data);
      }
    } catch (error) {
      console.error('Init App Error:', error);
    }
  };

  // Call the initApp function when the component is rendered
  initApp();

  return (
    <div> </div>
  );
};

export default ApiInteraction;