const video = document.getElementById('video'); 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let model;

//
// Load the model
//
async function loadModel() {
    model = await handTrack.load();

    const modelParams = {
        flipHorizontal: true,   // flip e.g for video 
        imageScaleFactor: 1,  // reduce input image size for (maybe) gains in speed.
        maxNumBoxes: 1,        // maximum number of boxes to detect
        iouThreshold: 0.5,      // ioU threshold for non-max suppression
        scoreThreshold: 0.8,    // confidence threshold for predictions.
    };
    
    // Set the settings for the model
    model.setModelParameters(modelParams);

    console.log('Model loaded');
    startCam();
}

//
// Starts the video
//
async function startCam() {
    handTrack.startVideo(video).then(function (status) {
        if (status) {
            console.log("Video started");

            predictHand();
        }
        else {
            console.log("Please enable video");
        };
    });
}

//
// Predict hands location
//
async function predictHand() {
    // Get predictions
    const predictions = await model.detect(video);
    
    // Show results in console for data collecting 
    // if (predictions[0]) {
    //     console.log(
    //             {
    //                 "1": predictions[0].bbox[0],
    //                 "2": predictions[0].bbox[1],
    //                 "3": predictions[0].bbox[2],
    //                 "4": predictions[0].bbox[3],
    //                 "action": "none"
    //             }
    //         );
    // }

    showHand(predictions);
}

//
// Show hands
//
async function showHand(predictions) {
    // Show box around hands
    model.renderPredictions(predictions, canvas, ctx, video);

    position(predictions);
    requestAnimationFrame(predictHand);
}


loadModel();