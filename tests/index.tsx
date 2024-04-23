import { render } from '@testing-library/react';
import { SettingsContext } from '@/contexts/SettingsContext';
import { ReactElement } from 'react';
import { SettingsContextType } from '@/types';

export const defaultContextValues: SettingsContextType = {
  darkMode: false,
  displayMode: 'normal',
  toggleDarkMode: () => {},
  toggleDisplayMode: () => {}
};

type RenderOptions = {
  contextValues?: Partial<SettingsContextType>;
};

const renderWithContext = (component: ReactElement, { contextValues = {} }: RenderOptions = {}) => {
  const contextProps = { ...defaultContextValues, ...contextValues };

  return render(
    <SettingsContext.Provider value={contextProps}>
      {component}
    </SettingsContext.Provider>
  );
};

export { renderWithContext }