# HTML/CSS Customizer
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JSON](https://img.shields.io/badge/json-5E5E5E?style=for-the-badge&logo=json&logoColor=white)
![Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

This browser extension allows you to inject custom HTML and CSS into any live webpage in real-time through a simple editor interface.

📂 Project Structure
Ensure all files are in the same folder:

manifest.json – Extension configuration.

popup.html – The UI for the HTML/CSS tabs.

popup.css – Styling for the editor interface.

popup.js – Logic for tab switching and code injection.

🚀 Installation Guide
Download/Clone this repository or save the 4 code files into a folder on your computer.

Open your browser (Chrome, Edge, or Brave).

Navigate to the Extensions page:

Chrome/Brave: chrome://extensions

Edge: edge://extensions

Toggle Developer Mode (usually a switch in the top-right corner).

Click the Load unpacked button.

Select the folder containing the extension files.

🛠 How to Use
Navigate to any website (e.g., google.com).

Click the Live Web Customizer icon in your browser toolbar.

To Inject HTML:

Select the HTML tab.

Type your code (e.g., <h1>Hacked by Me</h1>).

Click Confirm HTML. It will appear at the top of the page.

To Apply CSS:

Select the CSS tab.

Type your styles (e.g., body { filter: invert(1); }).

Click Confirm CSS. The page styles will update instantly.

⚠️ Important Notes
Temporary Changes: These changes are injected into the "DOM." If you refresh the page, the modifications will disappear.

Permissions: The extension requires activeTab and scripting permissions to modify the site you are currently viewing.

Security: Only paste code you trust. This tool executes scripts/styles exactly as written.
