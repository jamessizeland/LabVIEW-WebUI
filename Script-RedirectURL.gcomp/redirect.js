

function link(URL)
// open a new webpage (specified by the variable 'URL', replacing the existing one as a standard hyperlink would.
{
	window.location.href = (URL);
	return false;
}

function openNew(URL)
// open a new webpage as a new tab, allowing the current page to stay open.
{
	window.open(URL);
	return false;
}

function noReturn(URL)
// open a new webpage but forget where you came from, so back function doesn't work. Used for submit pages that you don't want user to re-call.
{
	window.location.replace(URL);
	return false;
}