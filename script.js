document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value;
    const wordCount = countWords(text);
    document.getElementById('wordCount').innerText = `${wordCount} words`;
});

function countWords(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    return text.trim().split(/\s+/).length;
}
