var dataArray = [ // this array contains the URLs of all the websites we get our data from
    {
        country: "#Japan",
        name: "Japan",
        populationUrl: "https://www.worldometers.info/world-population/japan-population/",
        GDPUrl: "https://www.worldometers.info/gdp/japan-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/japan",
    },
    {
        country: "#Russia",
        name: "Russian Federation",
        populationUrl: "https://www.worldometers.info/world-population/russia-population/",
        GDPUrl: "https://www.worldometers.info/gdp/russia-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/russia",
    },
    {
        country: "#China",
        name: "People's Republic of China",
        populationUrl: "https://www.worldometers.info/world-population/china-population/",
        GDPUrl: "https://www.worldometers.info/gdp/china-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/china",
    },
    {
        country: "#USA",
        name: "United States of America",
        populationUrl: "https://www.worldometers.info/world-population/us-population/",
        GDPUrl: "https://www.worldometers.info/gdp/us-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/united-states",
    },
    {
        country: "#Canada",
        name: "Canada",
        populationUrl: "https://www.worldometers.info/world-population/canada-population/",
        GDPUrl: "https://www.worldometers.info/gdp/canada-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/canada",
    },
    {
        country: "#India",
        name: "India",
        populationUrl: "https://www.worldometers.info/world-population/india-population/",
        GDPUrl: "https://www.worldometers.info/gdp/india-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/india",
    },
    {
        country: "#Germany",
        name: "Germany",
        populationUrl: "https://www.worldometers.info/world-population/germany-population/",
        GDPUrl: "https://www.worldometers.info/gdp/germany-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/germany",
    },
    {
        country: "#France",
        name: "France",
        populationUrl: "https://www.worldometers.info/world-population/france-population/",
        GDPUrl: "https://www.worldometers.info/gdp/france-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/france",
    },
    {
        country: "#UK",
        name: "The United Kingdom of Great Britain and Northern Ireland",
        populationUrl: "https://www.worldometers.info/world-population/uk-population/",
        GDPUrl: "https://www.worldometers.info/gdp/uk-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/united-kingdom",
    },
];

var foodDataPoint = ".CW span:first-child";
var pollutionDataPoint = ".FP span:first-child";
var populationDataPoint = "div.country-pop-description li:first-child strong:last-child";
var GDPSataPoint = ".col-md-7 li:first-child strong";