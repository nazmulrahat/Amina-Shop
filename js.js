document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const dialog = document.getElementById('welcomeDialog');
        dialog.classList.remove('hidden');
        dialog.classList.add('fade-in');
    }, 2000);
});

function closeDialog() {
    const dialog = document.getElementById('welcomeDialog');
    dialog.classList.add('fade-out');
    setTimeout(() => { dialog.style.display = 'none'; }, 500);
}


document.getElementById('ok').addEventListener('click', function() {   

const a = document.getElementById('rt')

a.classList.remove('opacity-0');
a.classList.add('opacity-100')
   
 });

