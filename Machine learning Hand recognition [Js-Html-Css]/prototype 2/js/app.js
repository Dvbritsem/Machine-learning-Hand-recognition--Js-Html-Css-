//
// Classify position of hand
//
function position(data) {
    let input;

    if (data[0]) {
        input = {
            a: data[0].bbox[0],
            b: data[0].bbox[1],
            c: data[0].bbox[2],
            d: data[0].bbox[3]
        };
    }
    else {
        // No hands (Input data from certain none classification)
        input = {
            a: 49.48367357254028, 
            b: 217.9104709625244, 
            c: 143.77699613571167, 
            d: 138.4188938140869
        };
    };

    classify(input);
}

//
// Function for when hand is classified as up
//
function handIsUp() {
    console.log("Hand is up");
}