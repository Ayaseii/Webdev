document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});


showContent('home');

document.getElementById('menu-btn').addEventListener('mouseenter', function() {
    document.getElementById('sidebar').style.width = '140px';
});

document.getElementById('sidebar').addEventListener('mouseleave', function() {
    document.getElementById('sidebar').style.width = '0';
});

function showContent(contentType) {
    
    document.querySelectorAll('.additional-content').forEach(function(content) {
        content.style.display = 'none';
    });

    document.getElementById(contentType + '-content').style.display = 'block';
}

function logout(){
    window.location.href = 'login.html';
}

    const sentence = "Im John Kevin Delos Santos,    First-year student pursuing a Bachelor of Science in Information Technology (BSIT). Beyond classes, my passion extends to the world of music and games. I take delight in discovering various music genres and experimenting with different instruments. Additionally, I enjoy immersing myself in the immersive worlds and challenges presented by video games.";
    const letterContainer = document.getElementById('linecon');

    function displayLetters(index) {
      if (index < sentence.length) {
        letterContainer.innerHTML += sentence.charAt(index);
        index++;
        setTimeout(() => displayLetters(index), 10);
      }
    }

        window.onload = function () {
       
        letterContainer.innerHTML = '';
    
        setTimeout(() => {
          displayLetters(0);
        }, 2700);
      };