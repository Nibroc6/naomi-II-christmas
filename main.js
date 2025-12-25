let typedInstance = null;

function initTypedMessage(messageContent) {
  function startTyping() {
    document.getElementById('interact').style.display = 'none';
    
    typedInstance = new Typed('#typed-output', {
      strings: [messageContent],
      typeSpeed: 20,
      startDelay: 700,
      backSpeed: 0,
      contentType: 'html',
      loop: false,
      showCursor: true,
      cursorChar: '█'
    });
  }

  // Try to autoplay audio
  document.getElementById('audio_player').play().then(() => {
    console.log('Audio started playing automatically');
    startTyping();
  }).catch(function(error) {
    // If autoplay fails, wait for user interaction (keyboard or touch/click)
    let hasInteracted = false;
    
    const handleInteraction = function() {
      if (hasInteracted) return;
      hasInteracted = true;
      
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      
      document.getElementById('audio_player').play();
      startTyping();
    };
    
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
  });
}