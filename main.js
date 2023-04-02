
const density = '       .:-i|=+%0#@$';

let video;
let asciidiv;

function setup(){
    noCanvas();
    video = createCapture(VIDEO);
    // 64, 48
    video.size(64, 48);
    asciidiv = createDiv();
}

function draw(){
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++){
        for(let i = 0; i < video.width; i++){
            const pixelIndex = ((i + j * video.width) * 4);
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = ((r + b + g) / 3);
            const len = density.length;
            const charIndex = floor(map(avg, 0 ,255, 1, len));
            const c = density.charAt(charIndex);
            if (c == ' ') asciiImage += '&nbsp';
            else asciiImage += c;
        }
    asciiImage += '<br>';
    }
    asciidiv.html(asciiImage);
}