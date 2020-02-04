var dataArray = [ // this array contains the URLs of all the websites we get our data from
    {
        country:"#Japan",
        name:"Japan",
        url:"http://www.oceanhealthindex.org/region-scores/scores/japan",
    },
    {
        country:"#Russia",
        name:"Russian Federation",
        populationUrl:"https://www.worldometers.info/world-population/russia-population/",
        GDPUrl:"https://www.worldometers.info/gdp/russia-gdp/",
        FPUrl:"http://www.oceanhealthindex.org/region-scores/scores/russia",
    },
    {
        country:"#China",
        name:"People's Republic Of China",
        GDPUrl:"https://www.worldometers.info/gdp/china-gdp/",
        url:"http://www.oceanhealthindex.org/region-scores/scores/china",
        FPUrl:"http://www.oceanhealthindex.org/region-scores/scores/china",
        populationUrl:"https://www.worldometers.info/world-population/china-population/",
    },
    {
        country:"#USA",
        name:"United States Of AMerica",
        url:"http://www.oceanhealthindex.org/region-scores/scores/united-states",
    },
    {
        country:"#Canada",
        name:"Canada",
        url:"http://www.oceanhealthindex.org/region-scores/scores/canada",
    },
    {
        country:"#India",
        name:"India",
        url:"http://www.oceanhealthindex.org/region-scores/scores/india",
    },
    {
        country:"#Germany",
        name:"Germany",
        url:"http://www.oceanhealthindex.org/region-scores/scores/germany",
        population:"https://www.worldometers.info/world-population/germany-population/",
    },
    {
        country:"#France",
        name:"France",
        url:"http://www.oceanhealthindex.org/region-scores/scores/france",
    },
    {
        country:"#UK",
        name:"United Kingdom",
        url:"http://www.oceanhealthindex.org/region-scores/scores/united-kingdom",
    },
];

var foodDataPoint=".CW span:first-child";
var pollutionDataPoint=".FP span:first-child";
var populationDataPoint="div.country-pop-description li:first-child strong:last-child";
var GDPSataPoint=".col-md-7 li:first-child strong";