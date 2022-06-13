import React, { useState } from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import { showErrorMessage } from '../translations/firebaseErrors';
import { addDoc, serverTimestamp } from '@firebase/firestore';
import { collectionTrainingsRef } from '../firebase';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import { load, loadTime } from '../features/loading/loadingSlice';
import { Link, useNavigate } from 'react-router-dom';

function AddTreningScreen() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user: any = useAppSelector(selectUser);
  const [date, setDate]: [string, (date: string) => void] = useState<string>('');
  const [time, setTime]: [string, (time: string) => void] = useState<string>('');
  const [distance, setDistance]: [string, (distance: string) => void] = useState<string>('');
  const [comments, setComments]: [string, (comments: string) => void] = useState<string>('');
  const [validateInfo, setValidateInfo]: [string, (validateInfo: string) => void] = useState<string>('');

  const addTraningDataToFirebase = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    if (!date || !time || !distance) {
      setValidateInfo(showErrorMessage('empty-required'));
      return;
    }

    setValidateInfo('');

    addDoc(collectionTrainingsRef, {
      user: user.uid,
      timestamp: serverTimestamp(),
      date,
      time,
      distance,
      comments: comments || '',
    });

    dispatch(load(true));

    setTimeout(() => {
      dispatch(load(false));
      navigate('/training-list');
    }, loadTime);
  };

  return (
    <div>
      <Link to="/">
        <div className="absolute -top-2 left-5 inline-flex items-center mb-2 text-white bg-green-500 hover:bg-green-600 transition-bg rounded-md px-2 py-[0.1rem]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 fill-current text-white" viewBox="0 0 448 512">
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
          </svg>
          <span className="ml-2 text-xs">Back to dashboard</span>
        </div>
      </Link>
      <h1 className="text-2xl mb-4">Add training 🔥</h1>

      <span className="block text-sm text-gray-400">Enter your training data.</span>
      <div className="flex flex-col md:flex-row">
        <div className="mt-4 w-full md:w-6/12">
          <form>
            <Input
              masked={false}
              type="date"
              label="Date *"
              name="date"
              requiredField
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              masked={true}
              mask="00:00"
              type="text"
              label="Time *"
              name="time"
              placeholder="00:00"
              requiredField
              autoFillOff
              onAccept={(_e, mask) => setTime(mask.value)}
            />
            <Input
              masked={true}
              mask="00.00"
              type="text"
              label="Distance *"
              name="distance"
              placeholder="00.00"
              requiredField
              autoFillOff
              onAccept={(_e, mask) => setDistance(mask.value)}
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
              <Button id="add-training" theme="primary" optionalClass="mr-3" onClick={addTraningDataToFirebase}>
                Add trening
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-6/12 py-10">
          <p className="text-center text-7xl font-black italic leading-none tracking-tight opacity-5 select-none">
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
