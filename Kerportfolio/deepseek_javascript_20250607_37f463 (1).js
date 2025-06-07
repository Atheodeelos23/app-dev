function toggleSkill(skillId) {
    // Hide all skill contents
    document.querySelectorAll('.skill-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show the selected skill content
    const skillContent = document.getElementById(skillId);
    skillContent.classList.add('active');
    
    // Scroll to the skill content
    skillContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function openContact() {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('contactPopup').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContact() {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('contactPopup').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close popup when clicking on overlay
document.getElementById('overlay').addEventListener('click', closeContact);

// Initialize with Python content visible
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('python').classList.add('active');
    
    // Add matrix effect to background
    const matrixBg = document.querySelector('.matrix-bg');
    matrixBg.innerHTML = '';
    matrixBg.style.background = '#000';
    
    // Create falling characters effect
    const chars = "01";
    const fontSize = 14;
    const columns = window.innerWidth / fontSize;
    
    const drops = [];
    for(let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function drawMatrix() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        matrixBg.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for(let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
});