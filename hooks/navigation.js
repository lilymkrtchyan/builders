import React from 'react';
import { useHistory } from 'react-router-dom';

export default function useNavigation() {
    const history = useHistory();
  
    const handleAssetsClick = () => {
      history.push('/assets');
    };
  
    return {
      handleAssetsClick,
    };
  }



