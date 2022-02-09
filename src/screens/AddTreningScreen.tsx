import React from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';

function AddTreningScreen() {
  return (
    <div>
      <h1 className="text-2xl mb-4">Add trening 🔥</h1>

      <div>
        <Input type="date" label="Date" name="date" requiredField />
        <Input
          type="number"
          min={0}
          label="Time"
          name="time"
          placeholder="Running time in minutes"
          requiredField
          autoFillOff
        />
        <Input
          type="number"
          min={0}
          label="Distance"
          name="distance"
          placeholder="Running distance in kilometers"
          requiredField
          autoFillOff
        />
        <Textarea name="comments" label="Comments" placeholder="Running notes" />
      </div>
    </div>
  );
}

export default AddTreningScreen;
