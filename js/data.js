var dataArray = [ // this array contains the URLs of all the websites we get our data from
    {
        country:"#Japan",
        name:"Japan",
        url:"http://www.oceanhealthindex.org/region-scores/scores/japan",
        dataPoint:"span.score.score-lrg"
    },
    {
        country:"#Russia",
        name:"Russian Federation",
        url:"https://www.worldometers.info/world-population/russia-population/",
        GDPurl:"https://www.worldometers.info/gdp/russia-gdp/",
        FPUrl:"http://www.oceanhealthindex.org/region-scores/scores/russia",
        foodDataPoint:"",
        // pollution
        GDPdataPoint:".col-md-7 li:first-child strong",
        dataPoint:"div.country-pop-description li:first-child strong:last-child"
    },
    {
        country:"#China",
        name:"People's Republic Of China",
        url:"http://www.oceanhealthindex.org/region-scores/scores/china",
        dataPoint:"span.score.score-lrg"
    },
    {
        country:"#USA",
        name:"United States Of AMerica",
        url:"http://www.oceanhealthindex.org/region-scores/scores/united-states",
        dataPoint:"span.score.score-lrg"
    },
    {
        country:"#Canada",
        name:"Canada",
        url:"http://www.oceanhealthindex.org/region-scores/scores/canada",
        dataPoint:"span.score.score-lrg"
    },
    {
        country:"#India",
        name:"India",
        url:"http://www.oceanhealthindex.org/region-scores/scores/india",
        dataPoint:"span.score.score-lrg"
    },
    {
        country:"#Germany",
        name:"Germany",
        url:"http://www.oceanhealthindex.org/region-scores/scores/germany",
        population:"https://www.worldometers.info/world-population/germany-population/",
        dataPoint:"div.country-pop-description li:first-child strong:last-child"
    },
    {
        country:"#France",
        name:"France",
        url:"http://www.oceanhealthindex.org/region-scores/scores/france",
        dataPoint:"span.score.score-lrg"
    },
    {
        country:"#UK",
        name:"United Kingdom",
        url:"http://www.oceanhealthindex.org/region-scores/scores/united-kingdom",
        dataPoint:"span.score.score-lrg"
    },
];