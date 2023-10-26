
                  const textElement = document.getElementById('text');
                  let isRed = false;
                
                  function blinkText() {
                    if (isRed) {
                      textElement.style.color = 'black';
                    } else {
                      textElement.style.color = 'red';
                    }
                    isRed = !isRed;
                  }
                
                  // เริ่มการกระพริบทันที
                  setInterval(blinkText, 500); // 1000 มีตราความเร็ว 1 วินาที
