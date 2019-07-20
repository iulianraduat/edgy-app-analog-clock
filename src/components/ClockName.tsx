import { TextField } from '@material-ui/core';
import React from 'react';

const ClockName: React.FC<ClockNameProps> = React.memo(({ onChange, value = '' }) => {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event.target.value);
    },
    [onChange]
  );

  return <TextField label="Name" value={value} fullWidth={true} onChange={handleChange} />;
});

interface ClockNameProps {
  onChange: (name: string) => void;
  value?: string;
}

export default ClockName;
