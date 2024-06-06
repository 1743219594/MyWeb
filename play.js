function scrollToBottom() {
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}
const messageDisplay = document.getElementById('messageDisplay');
    const messageInput = document.getElementById('messageInput');

    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (messageInput.value.trim() !== '') {

                const message = document.createElement('div');
                message.classList.add('message');
                var messages = JSON.parse(localStorage.getItem("messages")) || [];
                
                messages.push(messageInput.value);
                localStorage.setItem("messages", JSON.stringify(messages));
                message.textContent = messageInput.value;
                messageDisplay.appendChild(message);
                messageInput.value = '';
                scrollToBottom();
            }
        }
    });
    // 显示留言
function displayMessages() {
  
  
  var messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.forEach(function(messaged) {
    
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = messaged;
    messageDisplay.appendChild(message);});
    scrollToBottom();
}
  // 页面加载时显示已保存的留言
window.onload = function() {
  displayMessages();
};
    let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop - 100, // 考虑导航栏高度
          behavior: 'smooth'
      });
  });
})
function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

// 自动播放间隔时间（毫秒）
const autoPlayInterval = 1500; // 1.5秒

// 启动自动播放
let autoPlayTimer = setInterval(nextSlide, autoPlayInterval);

// 当鼠标悬停在轮播图上时停止自动播放
document.querySelector('.slideshow-container').addEventListener('mouseenter', function() {
  clearInterval(autoPlayTimer);
});

// 当鼠标离开轮播图时重新启动自动播放
document.querySelector('.slideshow-container').addEventListener('mouseleave', function() {
  autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
});

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
// Generate random stars
function generateStars() {
  const starContainer = document.querySelector('.stars');
  const numStars = 200; // Adjust this number to change the density of stars

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 8}px`; // Adjust star size
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 3}s`; // Randomize animation delay
      starContainer.appendChild(star);
  }
}

// Generate stars when the page loads
window.addEventListener('load', generateStars);
