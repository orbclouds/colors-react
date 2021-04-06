import {
  rgbToHSL,
  hslToRGB,
} from '@app/utils';

import type { ComboDefinition } from './Combination';

export const COMBINATIONS: ComboDefinition[] = [
  {
    name: 'complementary',
    algorithm(color: string) {
      const rgb = {
        r: parseInt(
          color.substr(1, 2),
          16
        ),
        g: parseInt(
          color.substr(3, 2),
          16
        ),
        b: parseInt(
          color.substr(5, 2),
          16
        ),
      };

      const { h, s, l } = rgbToHSL(rgb);

      const complement = hslToRGB({
        h: h < 180 ? h + 180 : h - 180,
        s,
        l,
      });

      return [color, complement];
    },
  },
  {
    name: 'monochromatic',
    algorithm(color: string) {
      const rgb = {
        r: parseInt(
          color.substr(1, 2),
          16
        ),
        g: parseInt(
          color.substr(3, 2),
          16
        ),
        b: parseInt(
          color.substr(5, 2),
          16
        ),
      };

      const { h, s, l } = rgbToHSL(rgb);

      const complement = hslToRGB({
        h,
        s,
        l:
          l < 0.5
            ? l + 1 / 3
            : l - 1 / 3,
      });

      return [color, complement];
    },
  },
  {
    name: 'analogous',
    algorithm(color: string) {
      const rgb = {
        r: parseInt(
          color.substr(1, 2),
          16
        ),
        g: parseInt(
          color.substr(3, 2),
          16
        ),
        b: parseInt(
          color.substr(5, 2),
          16
        ),
      };

      const { h, s, l } = rgbToHSL(rgb);

      const left = hslToRGB({
        h: h - 30,
        s,
        l,
      });

      const right = hslToRGB({
        h: h + 30,
        s,
        l,
      });

      return [color, left, right];
    },
  },
  {
    name: 'triadic',
    algorithm(color: string) {
      const rgb = {
        r: parseInt(
          color.substr(1, 2),
          16
        ),
        g: parseInt(
          color.substr(3, 2),
          16
        ),
        b: parseInt(
          color.substr(5, 2),
          16
        ),
      };

      const { h, s, l } = rgbToHSL(rgb);

      const left = hslToRGB({
        h: h - 120,
        s,
        l,
      });

      const right = hslToRGB({
        h: h + 120,
        s,
        l,
      });

      return [color, left, right];
    },
  },
];
