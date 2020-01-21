// the function takes two parameters. First: the DOM path of the desired element in the targeted website. Second: The selctor for the place where the data will be placed. Third: The targeted website's URL.
function getInfo(searchElement,placeElement,url)
{
    var content; // this variable will store all of the targeted website's html code
    var cross = "http://www.whateverorigin.org/get?url="; // This variable stores the URL of the proxy server, used to bypass the CORS policy
    $.getJSON(cross + encodeURIComponent(url) + '&callback=?', function(data)// this is getJSON request. We search for the targeted website's adress trough the proxy server
    {
        content=data.contents;// Fill the content variable with all of the targeted website's html code
        var parsedHtml = $.parseHTML(content); // Parse all of the targeted website's code in a variable called parsedHtml
        var dvPopulation = $(parsedHtml).find(searchElement).text();// Give the dvPopulation variable the value of the desired element.
        $(placeElement).html(dvPopulation);// Replace the element known as placeElement's html with the value of dvPopulation

        // This snippet of code makes sure to get the desired (live) data over a 3 second period of time
        setTimeout(function(){
            getInfo(searchElement,placeElement,url);
        }, 3000);
    });
}