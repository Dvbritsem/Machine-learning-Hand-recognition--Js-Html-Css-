// Step 2: set your neural network options
const options = {
    task: 'classification',
    debug: true
}

// Step 3: initialize your neural network
const nn = ml5.neuralNetwork(options);

// Step 4: add data to the neural network
data.forEach(item => {
    const inputs = {
        indexFingerTopY: item.indexFingerTopY, 
        indexFingerBottomY: item.indexFingerBottomY
    };
    const output = {
        action: item.action
    };

    nn.addData(inputs, output);
});

// Step 5: normalize your data;
nn.normalizeData();

// Step 6: train your neural network
const trainingOptions = {
    epochs: 32,
    batchSize: 12
}
nn.train(trainingOptions, finishedTraining);

// Step 7: use the trained model
function finishedTraining(){
    classify();
}

// Step 8: make a classification
function classify(){
    const input = {
        indexFingerTopY: 204.95638432798063, 
        indexFingerBottomY: 120.74858654781455
}
nn.classify(input, handleResults);
}

// Step 9: define a function to handle the results of your classification
function handleResults(error, result) {
    if(error){
        console.error(error);
        return;
    }
    console.log(result);;
}
  