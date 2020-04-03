document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);

    // Show success message
    UI.showAlert('Book Removed', 'success');
});