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
import { useNavigate } from 'react-router-dom';

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
              <Button theme="primary" optionalClass="mr-3" onClick={addTraningDataToFirebase}>
                Add trening
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
