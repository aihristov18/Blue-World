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

//Takes 3 arguments: CSSclass determines the class which will be removed. 'element' determies the element that will be affected. 'time' determies how many seconds should the script wait before it removes the class
function RemoveClass(CSSclass,element,time) 
{
    setTimeout(function(){
        $(element).toggleClass(CSSclass);
    }, time);
}

// Takes 3 arguments. Width: how many triangles will be generated along the X axis. Height: how many triangles alod the Y axis. placeelement: where to place the generated backgroud
function InitialiseMap(width, height, placeElement) 
{
    setTimeout(1000); //Wait for 1 second
    var XIDcounter=0; // This variable help define each element's ID along the X axis
    var codeString = '<div class="container" style="width:100%; height:100%;"><svg id="triangle" viewBox="0 0 3700 3700" style="display:inline; position:absolute;">'; // this string stores all of the code for the bakground
    for (var y = 0; y < height; y++) // Iterate trough every y element. It is equivelent to the height parameter
    {
        for (var x = 0; x < width; x++) { // Iterate trough every x element. It is equivelent to the width parameter
            if (y % 2 == 0) { //If the height is an odd number
                //Append a polygon with 3 points. Each polygon's points depend on the current iteration of x and y
                codeString += "<polygon class='RegularPoly' id='x" + ((XIDcounter*2)+1) /*The XIDcounter variable determines the polygon's ID x value based on its current iteration*/ + "y" + y + "' points='" + (x * 100) + " " + (y * 85) + ", " + ((x * 100) + 50) + " " + ((y * 85) + 85) + ", " + ((x * 100) - 50) + " " + ((y * 85) + 85) + "' />";
                codeString += "<polygon class='RegularPoly' id='x" + ((XIDcounter*2)+2) + "y" + y + "' points='" + ((x * 100) + 50) + " " + ((y * 85) + 85) + ", " + ((x * 100) + 100) + " " + ((y * 85)) + ", " + (x * 100) + " " + (y * 85) + "' />"
            }
            else {
                codeString += "<polygon class='RegularPoly' id='x" + ((XIDcounter*2)+1) + "y" + y + "' points='" + (x * 100) + " " + ((y / 2 + 0.5) * 170) + ", " + ((x * 100) + 50) + " " + ((y * 85)) + ", " + ((x * 100) - 50) + " " + ((y * 85)) + "' />";
                codeString += "<polygon class='RegularPoly' id='x" + ((XIDcounter*2)+2) + "y" + y + "' points='" + ((x * 100) + 50) + " " + ((y * 85)) + ", " + ((x * 100) + 100) + " " + ((y / 2 + 0.5) * 170) + ", " + (x * 100) + " " + ((y / 2 + 0.5) * 170) + "' />";
            }
            XIDcounter++;
        }
        XIDcounter=0; //Reset the counter, because there is a new row of elements that starts from x = 0
    }
    codeString += "</svg></div>"; // close off the string that hold all of the grid's code
    console.log(codeString);
    document.getElementById(placeElement).innerHTML = codeString; // replace the wanted element's html code with the grid's code
}

// This function animates the water. It takes 3 arguments. The width and height of the grid and the name of the class, which will be toggled as active
function AnimateWater(width,height,className){ 
    //var RandomTime = Math.floor(Math.random() * 15);
    setInterval(function(){ //Every 3 seconds
        var Rh = Math.floor(Math.random() * height); // Generate a random x integer
        var Rw = Math.floor(Math.random() * width*2); // Generate a random y integer
        var string = "#x"+Rw+"y"+Rh; // Unite both random integers to form a grid element's id
        $(string).toggleClass(className); // Toggle the specified abose CSS class, that holds the animation's name and duration
        RemoveClass(className,string,4000);// Toggle back the element's class with a 4 second delay
    }, 3000);
}