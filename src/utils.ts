interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

// https://www.rapidtables.com/convert/color/rgb-to-hsl.html
export const rgbToHSL = ({ r, g, b }: RGB): HSL => {
  const scaled = {
    r: r / 255,
    b: b / 255,
    g: g / 255,
  };

  const [max, min] = [
    Math.max(...Object.values(scaled)),
    Math.min(...Object.values(scaled)),
  ];

  const delta = max - min;

  const h =
    60 *
    (() => {
      if (delta === 0) return 0;
      if (max === scaled.r) return ((scaled.g - scaled.b) / delta) % 6;
      if (max === scaled.g) return (scaled.b - scaled.r) / delta + 2;
      if (max === scaled.b) return (scaled.r - scaled.g) / delta + 4;
      throw new Error("Did not find color max");
    })();

  const l = (max + min) / 2;

  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return { h, s, l };
};

// https://www.rapidtables.com/convert/color/hsl-to-rgb.html
export const hslToRGB = ({ h, s, l }: HSL): string => {
  const c = (1 - Math.abs(2 * l - 1)) * s;

  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));

  const m = l - c / 2;

  const rgb =
    "#" +
    (() => {
      while (h < 0) h += 360;
      while (h > 360) h -= 360;
      if (h >= 0 && h < 60) return [c, x, 0];
      if (h >= 60 && h < 120) return [x, c, 0];
      if (h >= 120 && h < 180) return [0, c, x];
      if (h >= 180 && h < 240) return [0, x, c];
      if (h >= 240 && h < 300) return [x, 0, c];
      if (h >= 300 && h <= 360) return [c, 0, x];
      throw new Error("Invalid hue value");
    })()
      .map((color) =>
        ("0" + Math.floor(255 * (color + m)).toString(16)).slice(-2)
      )
      .join("");
  return rgb.toUpperCase();
};

interface BackgroundStyle {
  background: string;
  color: string;
}

export const getBackgroundStyle = (background: string): BackgroundStyle => {
  const rgb = {
    r: parseInt(background.substr(1, 2), 16),
    g: parseInt(background.substr(3, 2), 16),
    b: parseInt(background.substr(5, 2), 16),
  };

  const { l } = rgbToHSL(rgb);

  const color = (() => {
    if (l > 0.7) return "black";
    return "white";
  })();

  return {
    background,
    color,
  };
};
