const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const welcomeMessage = document.getElementById('welcome-message');
const userPrompt = 'foreignuser@mizu.com:~$';


const asciiArt = `
Chris Toney Jr | Software Development Student.

              *         *      *         *
          ***          **********          ***
       *****           **********           *****
     *******           **********           *******
   **********         ************         **********
  ****************************************************
 ******************************************************
********************************************************
********************************************************
********************************************************
 ******************************************************
  ********      ************************      ********
   *******       *     *********      *       *******
     ******             *******              ******
       *****             *****              *****
          ***             ***              ***
            **             *              **

Welcome to my terminal website!
Type 'help' for a list of all commands.        
`;

function printWelcomeMessage() {
  let index = 0;
  const interval = setInterval(() => {
    welcomeMessage.textContent += asciiArt.charAt(index);
    index++;
    if (index === asciiArt.length) {
      clearInterval(interval);
    }
  }, .00005);
}

// Define a function that displays the anime animation
function printAnimeMessage() {
  let index = 0;
  const interval = setInterval(() => {
    terminalOutput.innerHTML += animeArt.charAt(index);
    index++;
    if (index === animeArt.length) {
      clearInterval(interval);
      // Add a line break after the animation
      terminalOutput.innerHTML += '<br>';
    }
  }, .00005);
}

const commands = {
  whoami: 'I am...',
  about: 'Learn about this page',
  anime: 'See my favourite anime on MAL',
  contact: 'Send me an email :)',
  clear: 'Clears the terminal screen',
  reset: 'Clear the terminal and display the welcome message again',
  help: 'Displays all the commands',
};

const aboutMessage = 'I created this website to learn more about JavaScript specifically, the HTML and CSS was surprisingly pretty simple to put together. The terminal is a really interesting place to work, and I really believe those experts who can fly around terminals to be true wizards. Someday  I aspire to have the wizard esq skills, and go directory to directory...';
const whoamiMessage = 'I am Chris, a Software Development Student and I am fascinated by the unlimited possibilities technology presents us. Unsure where my career will lead at the moment I am just sure I need a place where I can pair my passion and creativity to produce something meaningful. Also, train Jiu-Jitsu and am infatued with how the human learns Ecologically in a array of different enviorments.';

function processCommand(command) {
  let response = '';
  switch (command) {
    case 'help':
      for (const [cmd, desc] of Object.entries(commands)) {
        // Remove the userPrompt from the response for each command
        response += `<div class="response">${cmd} - ${desc}</div>`;
      }
      break;
    case 'about':
      response = `<div class="response">${aboutMessage}</div>`;
      break;
    case 'whoami':
      response = `<div class="response">${whoamiMessage}</div>`;
      break;
    case 'reset':
      // Reload the webpage
      location.reload();
      return;
    case 'contact':
      // Use the mailto feature to open the default email client
      // with the recipient's email address pre-filled
      const recipientEmail = 'mizucodes@gmail.com';
      window.open(`mailto:${recipientEmail}`);
      return;
    case 'clear':
      terminalOutput.innerHTML = ''; // Exit the function early to avoid appending response
      return;
    case 'anime':
      // Simulate loading by displaying "Opening MAL ..." one character at a time
      const loadingText = 'Opening MAL ...';
      let index = 0;
      const interval = setInterval(() => {
        terminalOutput.innerHTML += loadingText.charAt(index);
        index++;
        if (index === loadingText.length) {
          clearInterval(interval);
          // After displaying the loading text, wait for 1.5 seconds before opening the website
          setTimeout(() => {
            window.open('https://myanimelist.net/anime/23283/Zankyou_no_Terror', '_blank');
          }, 1500);
        }
      }, 100); // Adjust the timing for each character based on desired loading speed
      return;
    default:
      response = `<div class="response">Command not found, type 'help' for a list of commands.</div>`;
      break;
  }
  terminalOutput.innerHTML += response;
  // Scroll to the bottom of the terminal window after adding the new output
  terminalOutput.lastElementChild.scrollIntoView();

} 




printWelcomeMessage();

terminalInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = terminalInput.value.trim();
    terminalOutput.innerHTML += `${userPrompt} > ${command}<br>`;
    processCommand(command);
    terminalInput.value = '';
  }
});
