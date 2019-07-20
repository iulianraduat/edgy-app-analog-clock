import { TextField } from '@material-ui/core';
import React from 'react';

const ClockDescription: React.FC<ClockDescriptionProps> = React.memo(({ onChange, value = '' }) => {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event.target.value);
    },
    [onChange]
  );

  return <TextField label="Description" value={value} fullWidth={true} onChange={handleChange} />;
});

interface ClockDescriptionProps {
  onChange: (name: string) => void;
  value?: string;
}

export default ClockDescription;
