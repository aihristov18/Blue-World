// the function takes two parameters. First: the DOM path of the desired element in the targeted website. Second: The selctor for the place where the data will be placed. Third: The targeted website's URL.
function getInfo(searchElement, placeElement, url) {
    var content; // this variable will store all of the targeted website's html code
    var cross = "http://www.whateverorigin.org/get?url="; // This variable stores the URL of the proxy server, used to bypass the CORS policy
    $.getJSON(cross + encodeURIComponent(url) + '&callback=?', function (data)// this is getJSON request. We search for the targeted website's adress trough the proxy server
    {
        content = data.contents;// Fill the content variable with all of the targeted website's html code
        var parsedHtml = $.parseHTML(content); // Parse all of the targeted website's code in a variable called parsedHtml
        var dvPopulation = $(parsedHtml).find(searchElement).text();// Give the dvPopulation variable the value of the desired element.
        $(placeElement).html(dvPopulation);// Replace the element known as placeElement's html with the value of dvPopulation

        // This snippet of code makes sure to get the desired (live) data over a 3 second period of time
        setTimeout(function () {
            getInfo(searchElement, placeElement, url);
        }, 3000);
    });
}

// Takes 3 arguments. Width: how many triangles will be generated along the X axis. Height: how many triangles alod the Y axis. placeelement: where to place the generated backgroud
function InitialiseMap(width, height, placeElement) {
    var XIDcounter=0;
    var codeString = '<div class="container" style="width:100%; height:100%;"><svg id="triangle" viewBox="0 0 3700 3700">'; // this string stores all of the code for the bakground
    for (var y = 0; y < height; y++) // Iterate trough every
    {
        for (var x = 0; x < width; x++) {
            if (y % 2 == 0) {
                codeString += "<polygon id='x" + XIDcounter*2+1 + "y" + y + "' points='" + (x * 100) + " " + (y * 85) + ", " + ((x * 100) + 50) + " " + ((y * 85) + 85) + ", " + ((x * 100) - 50) + " " + ((y * 85) + 85) + "' />";
                codeString += "<polygon id='x" + XIDcounter*2+2 + "y" + y + "' points='" + ((x * 100) + 50) + " " + ((y * 85) + 85) + ", " + ((x * 100) + 100) + " " + ((y * 85)) + ", " + (x * 100) + " " + (y * 85) + "' />"
            }
            else {
                codeString += "<polygon id='x" + XIDcounter*2+1 + "y" + y + "' points='" + (x * 100) + " " + ((y / 2 + 0.5) * 170) + ", " + ((x * 100) + 50) + " " + ((y * 85)) + ", " + ((x * 100) - 50) + " " + ((y * 85)) + "' />";
                codeString += "<polygon id='x" + XIDcounter*2+2 + "y" + y + "' points='" + ((x * 100) + 50) + " " + ((y * 85)) + ", " + ((x * 100) + 100) + " " + ((y / 2 + 0.5) * 170) + ", " + (x * 100) + " " + ((y / 2 + 0.5) * 170) + "' />";
            }
            XIDcounter++;
        }
        XIDcounter=0;
    }
    codeString += "</svg></div>";
    console.log(codeString);
    document.getElementById(placeElement).innerHTML = codeString;
}

function ded(width, height) {
    setInterval(function () {
        var Rh = Math.floor(Math.random() * height);
        var Rw = Math.floor(Math.random() * width);
        var RRh = Math.floor(Math.random() * height);
        var RRw = Math.floor(Math.random() * width);
        var string = "#x" + Rw + "y" + Rh;
        var string2 = "#x" + RRw + "y" + RRh;
        $(string).toggleClass("water");
        $(string2).toggleClass("water");
    }, 3000);
}
//0
//1 2
//1     1*1+1
//3 4
//2     2*2+1
//5 6
//3     3*2+1
//7 8
//4
//9 10