import 'styled-components';

type Mixins = {
  /**
   * @description Creates flex container
   * @param {string} justifyContent - CSS justifyContent
   * @param {string} alignItems - CSS alignItems
   * @returns {object} object, where flex styles are defined
   */
  flex: (
    justifyContent?: string,
    alignItems?: string,
  ) => {
    display: 'flex';
    justifyContent: string;
    alignItems: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme {
    /**
     * @description General colors
     */
    generalColors: {
      white: '#FFFFFF';
      black: '#000000';
      lightBlue: '#91D5FF';
      lightGrey: '#E6E6E6';
    };
    /**
     * @description Colors with shades
     */
    specifiedColors: {
      primary: {
        dark: '#0050b3';
        main: '#40a9ff';
        light: '#E5EFFF';
      };
      error: {
        main: '#f5222d';
        light: '#fff1f0';
      };
    };
    /**
     * @description Typography data
     */
    typography: {
      title: {
        fontSize: 36;
        fontWeight: 600;
      };
    };
    /**
     * @description Function used to create margins and paddings based on default spacing (4px).
     * @param {number[]} multipliers - numbers to multiply default spacing
     * @returns {number | string} CSS margin or padding value (string or number)
     */
    spacing: (...multipliers: number[]) => number | string;
    mixins: Mixins;
  }
}
