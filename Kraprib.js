
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
                
                  
                  setInterval(blinkText, 500); // 1000 = 1 วินาที

