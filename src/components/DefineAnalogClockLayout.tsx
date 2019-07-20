import { Grid } from '@material-ui/core';
import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  clock: {
    height: 400
  },
  container: {
    alignItems: 'flex-end',
    padding: 20
  },
  saveButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  selectTheme: {
    textAlign: 'center'
  }
};

const DefineAnalogClockLayout: React.FC<DefineAnalogClockLayoutProps> = ({
  clockDescription,
  clockName,
  previewClock,
  saveButton,
  saveMsg,
  selectTheme,
  timezone
}) => (
  <Grid container={true} spacing={2} style={styles.container}>
    <Grid item={true} xs={12} md={6}>
      {clockName}
    </Grid>
    <Grid item={true} xs={12} md={6}>
      {timezone}
    </Grid>
    <Grid item={true} xs={12} md={6} lg={6}>
      {clockDescription}
    </Grid>
    <Grid item={true} xs={6} md={6} lg={3} style={styles.selectTheme}>
      {selectTheme}
    </Grid>
    <Grid item={true} xs={6} md={12} lg={3} style={styles.saveButton}>
      {saveMsg}
      {saveButton}
    </Grid>
    <Grid item={true} xs={12} style={styles.clock}>
      {previewClock}
    </Grid>
  </Grid>
);

interface DefineAnalogClockLayoutProps {
  clockDescription: JSX.Element;
  clockName: JSX.Element;
  previewClock?: JSX.Element;
  saveButton: JSX.Element;
  saveMsg?: JSX.Element;
  selectTheme: JSX.Element;
  timezone: JSX.Element;
}

export default DefineAnalogClockLayout;
