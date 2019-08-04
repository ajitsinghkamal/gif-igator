import palette from './palette';
export const FONT_BASE = 16;
export const DEFAULT_THEME = 'dark';
export const SECONDARY_THEME = 'light';
const BASE = {
	fontBase: FONT_BASE,
};
const COLORS = Object.keys(palette).reduce((theme, colorKey) => {
	const meta = colorKey.split('_');
	const themeType = meta[1] || SECONDARY_THEME;
	if (themeType in theme) {
		theme[themeType][meta[0]] = palette[colorKey];
	} else {
		theme[themeType] = { [meta[0]]: palette[colorKey] };
	}
	return theme;
}, {});

export default Object.assign({ base: BASE }, COLORS);
