import Api, { JsonEdgyObject } from 'edgy-api';
import { ErrorIconWithTooltip, SuccessIconWithTooltip } from 'icon-with-tooltip';
import React from 'react';
import SelectTimezoneMaterialUi from 'select-timezone-material-ui';
import ThemedAnalogClock from 'themed-analog-clock';
import ClockDescription from './ClockDescription';
import ClockName from './ClockName';
import DefineAnalogClockLayout from './DefineAnalogClockLayout';
import SaveButton from './SaveButton';
import SelectTheme from './SelectTheme';

interface DefineAnalogClockProps {}

interface FormFileds {
  description?: string;
  clockName?: string;
  timezoneName?: string;
  useDarkTheme?: boolean;
}

const api: Api = new Api();

const DefineAnalogClock: React.FC<DefineAnalogClockProps> = (): JSX.Element => {
  const [formFields, setFormFields] = React.useState<FormFileds>({});
  const [msgSuccess, setMsgSuccess] = React.useState<string>();
  const [msgError, setMsgError] = React.useState<string>();

  const handleClockNameChanged = React.useCallback((clockName: string) => {
    setFormFields((prevFormFields: FormFileds) => ({
      ...prevFormFields,
      clockName
    }));
    setMsgSuccess(undefined);
    setMsgError(undefined);
  }, []);

  const handleTimezoneChanged = React.useCallback((timezoneName: string, timezoneOffset: number) => {
    setFormFields((prevFormFields: FormFileds) => ({
      ...prevFormFields,
      timezoneName
    }));
    setMsgSuccess(undefined);
    setMsgError(undefined);
  }, []);

  const handleClockDescriptionChanged = React.useCallback((description: string) => {
    setFormFields((prevFormFields: FormFileds) => ({
      ...prevFormFields,
      description
    }));
    setMsgSuccess(undefined);
    setMsgError(undefined);
  }, []);

  const handleThemeChanged = React.useCallback((useDarkTheme: boolean) => {
    setFormFields((prevFormFields: FormFileds) => ({
      ...prevFormFields,
      useDarkTheme
    }));
    setMsgSuccess(undefined);
    setMsgError(undefined);
  }, []);

  const onSuccess = (resp: JsonEdgyObject) => {
    setFormFields({
      timezoneName: ''
    });
    setMsgSuccess('');
    setMsgError(undefined);
  };

  const onError = (error: Error) => {
    setMsgSuccess(undefined);
    setMsgError(error.message);
  };

  const handleSave = React.useCallback(() => {
    const { description, clockName, useDarkTheme, timezoneName } = formFields;

    const obj = {
      name: clockName!,
      data: {
        description,
        timezoneName,
        useDarkTheme
      }
    };
    api.saveAppCfg(obj, onSuccess, onError);
  }, [formFields]);

  const getMessage = React.useCallback(() => {
    if (msgSuccess !== undefined) {
      return <SuccessIconWithTooltip />;
    }
    if (msgError !== undefined) {
      return <ErrorIconWithTooltip text={msgError} />;
    }
  }, [msgError, msgSuccess]);

  const disabled: boolean = React.useMemo(() => {
    const { clockName, timezoneName } = formFields;
    return isEmpty(clockName) || isEmpty(timezoneName);
  }, [formFields]);

  return (
    <DefineAnalogClockLayout
      clockName={<ClockName value={formFields.clockName} onChange={handleClockNameChanged} />}
      timezone={<SelectTimezoneMaterialUi timezoneName={formFields.timezoneName} onChange={handleTimezoneChanged} />}
      clockDescription={<ClockDescription value={formFields.description} onChange={handleClockDescriptionChanged} />}
      selectTheme={<SelectTheme onChange={handleThemeChanged} />}
      saveMsg={getMessage()}
      saveButton={<SaveButton disabled={disabled} onClick={handleSave} />}
      previewClock={
        formFields.timezoneName ? (
          <ThemedAnalogClock
            key={formFields.timezoneName}
            description={formFields.description}
            timezoneName={formFields.timezoneName}
            useDarkTheme={formFields.useDarkTheme}
            style={{
              padding: 20
            }}
          />
        ) : (
          undefined
        )
      }
    />
  );
};

const isEmpty = (str?: string) => str === undefined || str.length === 0;

export default DefineAnalogClock;
