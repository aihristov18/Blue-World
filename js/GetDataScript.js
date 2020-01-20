
function getCode(searchCode,url)
{
    var codeString
    var content; // this variable will store all of the targeted website's html code
    var cross = "http://www.whateverorigin.org/get?url="; // This variable stores the URL of the proxy server, used to bypass the CORS policy
    $.getJSON(cross + encodeURIComponent(url) + '&callback=?', function(data)// this is getJSON request. We search for the targeted website's adress trough the proxy server
    {
        content=data.contents;// Fill the content variable with all of the targeted website's html code

        console.log(content); // Print all of the targeted webside's code
        console.log(typeof content); // Print the variable type of content

        var last_index = content.lastIndexOf(searchCode); //Search for the specific word "maincounter-number"'s last index and we store it in a variable     
        console.log(last_index); // Print the value that holds the last index of the keyword
        for(var i=0;i<100;i++)// Make a for loop that concatinates every next element into 1 usable string
        {
            codeString+=content[last_index+i]; //k concatinates every next i, to form the piece of code where the desired number would be
        }
        console.log(codeString);// Print the desired string
    });
}