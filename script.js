function facebook() {
    var copyText = document.getElementById("facebook");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
    )
}