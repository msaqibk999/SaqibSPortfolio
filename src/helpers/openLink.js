
export default function openLink(url) {
    const newTab = window.open(url, '_blank');
    if (newTab) {
        newTab.focus();
    } else {
        alert('Unable to open a new tab. Please check your browser settings.');
    }
}
