import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import { getDocs } from 'firebase/firestore';
import { collectionTrainingsRef } from '../firebase';
import { transformDate } from '../features/date/transformDate';
interface TrainingList {
  comments?: string;
  date: string;
  distance: string;
  id: string;
  time: string;
  user: string;
}

function TrainingListScreen() {
  const [trainingList, setTrainingList] = useState<[]>([]);
  const user: any = useAppSelector(selectUser);
  const { uid } = user;

  useEffect(() => {
    getDocs(collectionTrainingsRef)
      .then((snapshot) => {
        const trainings: any = [];

        snapshot.docs.forEach((doc) => {
          const docUid = doc.data().user;

          if (docUid === uid) {
            trainings.push({ ...doc.data(), id: doc.id });
          }
        });

        setTrainingList(trainings);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log('hello', trainingList);

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
      <h1 className="text-2xl mb-4">Trening List</h1>
      <span className="block text-sm text-gray-400">
        Check your progress or{' '}
        <Link to="/add-training">
          <strong className="text-green-500 underline">add a training.</strong>
        </Link>
      </span>

      <div className="block rounded-lg shadow-lg bg-white mt-5">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full mb-0">
                  <thead className="border-b rounded-t-lg text-left bg-gray-900">
                    <tr>
                      <th scope="col" className="text-white rounded-tl-lg text-sm font-medium px-6 py-4">
                        📅 DATE
                      </th>
                      <th scope="col" className="text-white text-sm font-medium px-6 py-4">
                        🏃 DISTANCE
                      </th>
                      <th scope="col" className="text-white text-sm font-medium px-6 py-4">
                        ⏱️ TIME
                      </th>
                      <th scope="col" className="text-white rounded-tr-lg text-sm font-medium px-6 py-4">
                        📝 COMMENTS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingList.length ? (
                      trainingList.map((training: TrainingList, index) => (
                        <tr className="border-b" key={`${index}_${training.id}`}>
                          <th className="text-sm font-medium px-6 py-4 whitespace-nowrap text-left" scope="row">
                            {transformDate(training.date)}
                          </th>
                          <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                            {training.distance} km
                          </td>
                          <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                            {training.time} min
                          </td>
                          <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                            {training.comments || '-'}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="border-b">
                        <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                          No trainings found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingListScreen;
