import LabeledSwitchMaterialUi from 'labeled-switch-material-ui';
import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  darkTheme: {
    color: '#222222'
  },
  lightTheme: {
    color: '#444444'
  }
};

const SelectTheme: React.FC<SelectThemeProps> = React.memo(({ onChange }) => (
  <LabeledSwitchMaterialUi
    labelLeft="Dark theme"
    labelRight="Light theme"
    styleLabelLeft={styles.darkTheme}
    styleLabelRight={styles.lightTheme}
    onChange={onChange}
  />
));

interface SelectThemeProps {
  onChange: (useThemeDark: boolean) => void;
}

export default SelectTheme;
