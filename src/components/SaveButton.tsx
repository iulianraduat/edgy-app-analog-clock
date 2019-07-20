import { Button } from '@material-ui/core';
import React from 'react';

const SaveButton: React.FC<SaveButtonProps> = React.memo(({ disabled, onClick }) => (
  <Button disabled={disabled} variant="contained" color="primary" onClick={onClick}>
    Create clock
  </Button>
));

interface SaveButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

export default SaveButton;
