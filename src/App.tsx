import EdgyApi from 'edgy-api';
import React from 'react';
import 'sanitize.css';
import ThemedAnalogClock, { ThemedAnalogClockProps } from 'themed-analog-clock';
import DefineAnalogClock from './components/DefineAnalogClock';

const style: React.CSSProperties = {
  height: '100vh',
  width: '100vw'
};

const App = () => {
  const Api = new EdgyApi();
  return Api.isAppCfg() ? (
    <div style={style}>
      <ThemedAnalogClock {...Api.getAppCfg() as ThemedAnalogClockProps} />
    </div>
  ) : (
    <DefineAnalogClock />
  );
};

export default App;
