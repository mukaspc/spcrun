import React, { useState } from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import { showErrorMessage } from '../translations/firebaseErrors';

function AddTreningScreen() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [comments, setComments] = useState('');
  const [validateInfo, setValidateInfo] = useState<string>('');

  const addTraningDataToFirebase = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    if (!date || !time || !distance) {
      setValidateInfo(showErrorMessage('empty-required'));
      return;
    }
  };
  return (
    <div>
      <h1 className="text-2xl mb-4">Add trening 🔥</h1>

      <span className="block text-sm text-gray-400">Type your trening details.</span>
      <div className="flex flex-col md:flex-row">
        <div className="mt-4 w-full md:w-6/12">
          <form>
            <Input type="date" label="Date *" name="date" requiredField onChange={(e) => setDate(e.target.value)} />
            <Input
              type="number"
              min={0}
              label="Time *"
              name="time"
              placeholder="Running time in minutes"
              requiredField
              autoFillOff
              onChange={(e) => setTime(e.target.value)}
            />
            <Input
              type="number"
              min={0}
              label="Distance *"
              name="distance"
              placeholder="Running distance in kilometers"
              requiredField
              autoFillOff
              onChange={(e) => setDistance(e.target.value)}
            />
            <Textarea
              name="comments"
              label="Comments"
              placeholder="Running notes"
              onChange={(e) => setComments(e.target.value)}
            />

            {validateInfo && (
              <div className="mt-2">
                <span className="text-red-400 text-sm leading-none">{validateInfo}</span>
              </div>
            )}

            <div className="mt-10">
              <Button type="primary" optionalClass="mr-3" onClick={addTraningDataToFirebase}>
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-6/12 py-10">
          <p className="text-center text-7xl font-black italic leading-none tracking-tight opacity-5">
            <span>JUST</span>
            <br />
            <span>DO IT</span>
            <br />
            <span>NOW.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddTreningScreen;
