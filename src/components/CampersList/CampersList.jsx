import React from 'react';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors';

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <div>
      <ul>
        {Array.isArray(campers) &&
          campers.map(camper => <li key={camper._id}>{camper.name}</li>)}
      </ul>
    </div>
  );
};

export default CampersList;
