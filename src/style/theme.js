import palette from './palette';
export const FONT_BASE = 16;
const COLORS = Object.keys(palette).reduce((theme, colorKey) => {
	const meta = colorKey.split('_');
	const themeType = meta[1] || 'main';
	if (themeType in theme) {
		theme[themeType][meta[0]] = palette[colorKey];
	} else {
		theme[themeType] = { [meta[0]]: palette[colorKey] };
	}
	return theme;
}, {});

export default Object.assign({ fontBase: FONT_BASE }, COLORS);
