import React from 'react';

function TrainingListScreen() {
  return (
    <div>
      <h1 className="text-2xl mb-4">Trening List</h1>

      <div className="block rounded-lg shadow-lg bg-white">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full mb-0">
                  <thead className="border-b rounded-t-lg text-left bg-gray-900">
                    <tr>
                      <th scope="col" className="text-white rounded-tl-lg text-sm font-medium px-6 py-4">
                        DATE
                      </th>
                      <th scope="col" className="text-white text-sm font-medium px-6 py-4">
                        DISTANCE
                      </th>
                      <th scope="col" className="text-white text-sm font-medium px-6 py-4">
                        TIME
                      </th>
                      <th scope="col" className="text-white text-sm font-medium px-6 py-4">
                        ROLE
                      </th>
                      <th scope="col" className="text-white rounded-tr-lg text-sm font-medium px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <th className="text-sm font-medium px-6 py-4 whitespace-nowrap text-left" scope="row">
                        Jane Cooper
                      </th>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                        Regional Paradigm Technican
                      </td>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                        jane.cooper@example.com
                      </td>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">Admin</td>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-right">
                        <a
                          href="#!"
                          className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-sm font-medium px-6 py-4 whitespace-nowrap text-left" scope="row">
                        Danny Williamson
                      </th>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                        Internal Applications Engineer
                      </td>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                        danny.williamson@example.com
                      </td>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                        Member
                      </td>
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-right">
                        <a
                          href="#!"
                          className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Date
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Distance
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Time
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> */}
    </div>
  );
}

export default TrainingListScreen;
