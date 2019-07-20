import { storiesOf } from '@storybook/react';
import Api from 'edgy-api';
import React from 'react';
import ThemedAnalogClock from 'themed-analog-clock';
import mockApiData from '../src/api/MockApiData';
import DefineAnalogClockProps from '../src/components/DefineAnalogClock';

const style: React.CSSProperties = {
  height: 400
};

const apiForAppCfgThemeLight = new Api({
  ...mockApiData,
  AppCfg: {
    useDarkTheme: false,
    timezoneName: 'America/New_York',
    description: 'The time now in New York'
  },
  AppType: 'APP-CFG'
});

const apiForAppCfgThemeDark = new Api({
  ...mockApiData,
  AppCfg: {
    useDarkTheme: true,
    timezoneName: 'Asia/Shanghai',
    description: 'The time now in Shanghai'
  },
  AppType: 'APP-CFG'
});

storiesOf('App', module)
  .add('the clock creator', () => (
    <div style={style}>
      <DefineAnalogClockProps />
    </div>
  ))
  .add('the clock using the light theme', () => (
    <div style={style}>
      <ThemedAnalogClock {...apiForAppCfgThemeLight.getAppCfg()} />
    </div>
  ))
  .add('the clock using the dark theme', () => (
    <div style={style}>
      <ThemedAnalogClock {...apiForAppCfgThemeDark.getAppCfg()} />
    </div>
  ));
