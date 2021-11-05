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
        a: item.a, 
        b: item.b,
        c: item.c,
        d: item.d
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
};
nn.train(trainingOptions, finishedTraining);

// Step 7: use the trained model
function finishedTraining(){
    console.log("network trained");
}

// Step 8: make a classification
function classify(input){
    nn.classify(input, handleResults);
}

// Step 9: define a function to handle the results of your classification
function handleResults(error, result) {
    if(error){
        console.error(error);
        return;
    };
    
    if (result[0].label == "up" && result[0].confidence > 0.9) {
        handIsUp();
    };
}
  