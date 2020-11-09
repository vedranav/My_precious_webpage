const showModalDialog = (content) => {
    $('body').append('<div class = "modal" />')
    $('.modal').append('<div class = "modal-box" />')
    $('.modal-box').append('<div class = "modal-title" />')
    $('.modal-title').append('<span class="modal-close" onclick="closeModal()">&times;</span>')
    $('.modal-box').append('<div class="modal-content" />')
    $('.modal-content').append(content)
}

const closeModal = () => $('.modal').remove()
