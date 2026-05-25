function openModal() {
    document.getElementById("devModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("devModal").style.display = "none";
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId !== "#home") {
            e.preventDefault(); 
            openModal();
        }
    });
});

window.onclick = function(event) {
    const modal = document.getElementById("devModal");
    if (event.target == modal) {
        closeModal();
    }
}