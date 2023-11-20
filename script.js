/* Alteração: Função para alternar entre as frases */
function changeText() {
    var button = document.querySelector('button');
    var result = document.getElementById('result');
  
    function getText() {
      return button.textContent;
    }
  
    function setText(text) {
      button.textContent = text;
      result.textContent = `Entao..."${text}"`;
    }
  
    var text = getText();
  
    if (text === 'Você prefere Max') {
      setText('Você prefere a Chloe');
    } else if (text === 'Você prefere a Chloe') {
      setText('Você prefere a Max');
    } else {
      setText('Você prefere a Max');
    }
  }