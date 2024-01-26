import React from "react";

function SchoolUpdates() {
  return (
    <div>
    <div className="flex justify-between">
        <h1 className='font-medium'>School Updates</h1>
        <h3 className="text-gray-400">view all</h3>
    </div>
      <div className="flex justify-between mt-2">
        <div className="bg-gray-200 px-4 py-3 rounded-md">
          <i className="fa-solid fa-newspaper bg-green-100 p-2 rounded-md" style={{ color: 'green' }}></i>
          <div className="flex  mt-2 gap-2">
            <p>News</p>
            <p>6</p>
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-3 rounded-md">
            <i className="fa-solid fa-calendar-days bg-pink-100 p-2 rounded-md" style={{ color: 'pink' }}></i>
          <div className="flex  mt-2 gap-2">
            <p>Events</p>
            <p>6</p>
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-3 rounded-md">
            <i className="fa-solid fa-bullhorn bg-purple-100 p-2 rounded-md" style={{ color: 'purple' }}></i>
          <div className="flex  mt-2 gap-2">
            <p>Bulletin</p>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolUpdates;
