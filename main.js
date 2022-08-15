/* The First question */
window.onload = function() {
    const look = word => {
      if (word.length > 6) {
        return "<span class='hightlight' style = 'background: yellow'>" + word + "</span>"
      } else {
        return word
      }
    }
    const paragraph = document.querySelector("#paragraph")
    paragraph.innerHTML = paragraph
      .innerText
      .split(' ')
      .map(look)
      .join(' ')
  }

/* The second question */

  const link = document.createElement('a');
  link.href = 'https://forcemipsum.com/';
  link.innerText = 'the source of the text';
  document.body.appendChild(link);

  /* The Third question */
  paragraph.innerHTML = paragraph.innerHTML
  .split('.')
  .join(' ') ;

/* The Fourth question */





/* The Fifth question */
Array.from(document.querySelectorAll('p'))
.forEach(p => {
    p.innerHTML = p.innerHTML
    .replace('?', '🤔')
    .replace('?', '😲');


})
  
document.getElementById('username')
       .insertAdjacentHTML('beforebegin', '<label for="username">Username: <label/>');
document.getElementById('password')
       .insertAdjacentHTML('beforebegin', '<label for="password">Password: <label/>');
document.getElementById('confirm-password')
       .insertAdjacentHTML('beforebegin', '<label for="confirm-password">Confirm Password: <label/>');       
  

       




