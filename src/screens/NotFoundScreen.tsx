import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function NotFoundScreen() {
  return (
    <div className="text-center">
      <h1 className="text-7xl text-green-400 font-medium">404</h1>
      <span className="block text-sm text-gray-400">Sorry, nothing here</span>
      <div className="mt-8">
        <Link to="/">
          <Button theme="primary">Back to dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
