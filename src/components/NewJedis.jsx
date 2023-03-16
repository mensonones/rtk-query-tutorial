import React from 'react';
import { useCreateJediMutation } from '../services/api';

export const NewJedisForm = () => {
    const [createJedi, { isLoading, isError, error }] = useCreateJediMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const jedi = e.target.elements.jedi.value;
        console.log('jedi: ', jedi)
        createJedi(jedi);
        e.target.reset();
    };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Jedi</h3>
      <div>
        <label htmlFor='jedi'>Jedi:</label>{' '}
        <input type='text' id='jedi' />
      </div>

      <br />

      <div>
        <input type='submit' value='Add New Jedi' />
        {isLoading && <span> Loading...</span>}
      </div>
    </form>
  );
}

export default NewJedisForm;