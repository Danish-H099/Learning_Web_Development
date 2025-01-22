
document.addEventListener('copy', function (event) {
    const selectedText = window.getSelection().toString();
    event.clipboardData.setData('text/plain', '🤘');
    event.preventDefault();
});

// explain the functionality of above code
// The above code is an event listener that listens for the copy event on the p element. When the copy event is triggered, the event handler function is called. The function first gets the selected text using window.getSelection().toString(). It then sets the clipboard data to a string containing the rock hand emoji 🤘 using event.clipboardData.setData('text/plain', '🤘'). Finally, it prevents the default copy behavior using event.preventDefault(). This code effectively replaces the copied text with the rock hand emoji.