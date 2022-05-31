import { get, set, trim } from 'lodash';

export const openInNewTab = (url) => window.open(url, '_blank').focus();

export function setBy(obj, path, func, defaultValue) {
	const newValue = func(get(obj, path, defaultValue));
	set(obj, path, newValue);
	return obj;
}

export function joinLines(text) {
	return text
		?.split('\n')
		.map((l) => trim(l))
		.filter((x) => x)
		.join(' | ');
}

export function getAcronym(string) {
	var matches = string.match(/\b(\w)/g); // ['J','S','O','N']
	return matches.join('').toUpperCase(); // JSON
}


export function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatTime(s) {
	const dtFormat = new Intl.DateTimeFormat('en-GB', {
		timeStyle: 'medium',
		timeZone: 'UTC'
	});
	return dtFormat.format(new Date(s * 1e3));
}

export function popupwindow(url, title, w = 800, h = 800) {
	var y = window.outerHeight / 2 + window.screenY - h / 2;
	var x = window.outerWidth / 2 + window.screenX - w / 2;
	return window.open(
		url,
		title,
		'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
			w +
			', height=' +
			h +
			', top=' +
			y +
			', left=' +
			x
	);
}

export function mergeByKey(arr1, key1, arr2, key2) {
	const m = {};
	const results = [];
	for (const item of arr2) {
		const { [key2]: k, ...rest } = item;
		m[k] = rest;
	}
	for (const item of arr1) {
		if (m[item[key1]]) {
			results.push({ ...item, ...m[item[key1]] });
		}
	}
	return results;
}

export function toCamelCase(obj) {
	const newObj = {};
	for (const k in obj) {
		newObj[camelize(k)] = obj[k];
	}
	return newObj;
}
export function camelize(str) {
	return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export function renameKeys(obj, m) {
	const newObj = { ...obj };
	for (const k in m) {
		newObj[m[k]] = obj[k];
		delete newObj[k];
	}
	return newObj;
}

export function lineBreakCount(str) {
	/* counts \n */
	try {
		return str.match(/[^\n]*\n[^\n]*/gi).length;
	} catch (e) {
		return 0;
	}
}

export function getFirstWord(str) {
	let spaceIndex = str.indexOf(' ');
	return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
}

export function getNumLines(str, width) {
	let lineBreakCharCount = Math.ceil(width * 0.1606425702811245);
	var charCount = 0;
	var numbOfLines = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] != '\n') {
			charCount++;
		}
		if (charCount == lineBreakCharCount || str[i] == `\n`) {
			numbOfLines++;
			charCount = 0;
		}
	}

	return numbOfLines + 1;
}
export function getQuoteTweetNumLines(str, width) {
	let lineBreakCharCount = Math.ceil(width * 0.1487964989059081);
	var charCount = 0;

	var numbOfLines = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] != '\n') {
			charCount++;
		}
		if (charCount == lineBreakCharCount || str[i] == `\n`) {
			numbOfLines++;
			charCount = 0;
		}
	}

	return numbOfLines + 1;
}
