var computer = {
    brand: "Microsoft", 
    laptop: "Surface Laptop 4", 
    screens: "13.5\""
}

var sentence = "I have the: ";

for (var item in computer) {
    if(item == "brand") {
        sentence += computer.brand;
    }
    else if(item == "laptop") {
        sentence += computer.laptop + ".";
        break;
    }

    if(item == "brand") {
        sentence += " ";
    }
}

console.log(sentence);