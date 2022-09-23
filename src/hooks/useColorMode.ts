import { ColorScheme } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';

const useColorMode = () => {
  const preferredColorScheme = useColorScheme('light', { getInitialValueInEffect:true});
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme | 'preferredColorScheme'>({
    key: 'tfiltr-color-scheme',
    defaultValue: 'preferredColorScheme',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme|'preferredColorScheme') => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  useHotkeys([['mod+shift+J', () => toggleColorScheme('preferredColorScheme')]]);

  return { colorMode: colorScheme !== 'preferredColorScheme'? colorScheme: preferredColorScheme, toggleColorMode: toggleColorScheme };
};

export default useColorMode;
