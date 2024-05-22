# AI Image Generating Extension

This project is a chrome(works on all browsers based on chromium) extension.It allows users to input text and generate an image based on the provided description using OpenAI's image generation API.

## Features
- Simple and intuitive user interface for inputting text.
- Utilizes OpenAI's image generation API to create images based on text descriptions.
- Displays generated images directly within the extension.
- 
## Usage

1. Click on the extension icon in the Chrome toolbar to open the extension popup.
2. Enter a text description in the input field.
3. Click the "Generate" button.
4. The generated image will be displayed above the input field.

# Running as an Extension
1. Clone the repository and install all the node modules. Then run the command :
### `npm run build`
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click the "Load unpacked" button and select the directory where you cloned the repository. There, find the static folder in the build directory and then upload it.
5. The extension should now appear in your list of extensions.

# Running as a Website 

In the project directory, you can run:

### `npm start`


