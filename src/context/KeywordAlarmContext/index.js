import { createContext } from 'react';

export const AlarmContext = createContext({
  isNormalAlarm: false,
  isImportantAlarm: false,
  isSlientAlarm: false,
  isVibrationAlarm: false,
  alarmTerm: null,
  setIsNormalAlarm: () => {},
  setIsImportantAlarm: () => {},
  setIsSlientAlarm: () => {},
  setIsVibrationAlarm: () => {},
  setAlarmTerm: () => {},
});
