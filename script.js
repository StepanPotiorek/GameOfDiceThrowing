const btn = document.querySelector(".btn");
const cubeImage = document.querySelector(".cube-image");
let counter = 0;
let clicks = 0;
const result = document.querySelector(".result");
// function 

// creating function
const createParagraph = (content) => {
    const p = document.createElement("p");
    p.textContent = content;
    result.append(p);
};

// calling function

btn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    cubeImage.src = `img/${randomNumber}.jpg`;
    counter += randomNumber;

    //Counting clicks
    clicks += 1;

    // cleaning the section
    result.textContent = "";

    // adding to the page
    createParagraph(counter);


    // we evaluate the state of the game
    if (clicks < 5 && counter < 20) {
        createParagraph("keep throwing");
    } else if (clicks <= 5 && counter >= 20) {
        // Adding winning text to the page
        createParagraph("you won");
        btn.style.visibility = "hidden";
    }
    // adding losing text to the page
    else if (clicks >= 5 && counter < 20) {
        createParagraph("you lost");
    }
    console.log(counter);


}
);



// console.lot(cubeImage.src); we can control the image by adding src

