const videoElement = document.getElementById('video');
const button = document.getElementById('button');
console.log(videoElement)

// Propt the user to select a media stream, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){ 
        console.log('error here:' +  error);
    }
}


button.addEventListener('click', async () => {
    //Disable the button
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});


selectMediaStream();

