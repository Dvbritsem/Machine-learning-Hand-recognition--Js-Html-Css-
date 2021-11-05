// Step 2: set your neural network options
const options = {
    task: 'classification',
};

// Step 3: initialize your neural network
const nn = ml5.neuralNetwork(options);

// Step 4: Load the trained model
const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
};

nn.load(modelDetails, modelLoaded);

function modelLoaded() {
    console.log('Network is loaded');
}

// Step 5: make a classification
function classify(input){
    nn.classify(input, handleResults);
}

// Step 6: define a function to handle the results of your classification
function handleResults(error, result) {
    if(error){
        console.error(error);
        return;
    };
    
    if (result[0].label == "up" && result[0].confidence > 0.9) {
        handIsUp();
    }
    if (result[0].label == "none" && result[0].confidence > 0.9) {
        handIsDown();
    };
}
  