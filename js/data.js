var dataArray = [ // this array contains the URLs of all the websites we get our data from
    {
        country: "#Japan",                                                                 // 'country' hold the ID, by which this object is selected and used
        name: "Япония",                                                                     // This is the name of the country, that will be displayed on the databoard
        populationUrl: "https://www.worldometers.info/world-population/japan-population/", //'populationUrl' holds the url of the site where we get our population number; It is updated daily;
        GDPUrl: "https://www.worldometers.info/gdp/japan-gdp/",                            //'GDPUrl' holds the url of the site where we get our GDP number. For now it doesn't update
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/japan",               //'FPUrl' holds the url of the site where we get our pollution and food production score index. We are unsure of when they update
    },
    {
        country: "#Russia",
        name: "Руска Федерация",
        populationUrl: "https://www.worldometers.info/world-population/russia-population/",
        GDPUrl: "https://www.worldometers.info/gdp/russia-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/russia",
    },
    {
        country: "#China",
        name: "Китай",
        populationUrl: "https://www.worldometers.info/world-population/china-population/",
        GDPUrl: "https://www.worldometers.info/gdp/china-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/china",
    },
    {
        country: "#USA",
        name: "Съединените Американски Щати",
        populationUrl: "https://www.worldometers.info/world-population/us-population/",
        GDPUrl: "https://www.worldometers.info/gdp/us-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/united-states",
    },
    {
        country: "#Canada",
        name: "Канада",
        populationUrl: "https://www.worldometers.info/world-population/canada-population/",
        GDPUrl: "https://www.worldometers.info/gdp/canada-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/canada",
    },
    {
        country: "#India",
        name: "Индия",
        populationUrl: "https://www.worldometers.info/world-population/india-population/",
        GDPUrl: "https://www.worldometers.info/gdp/india-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/india",
    },
    {
        country: "#Germany",
        name: "Германия",
        populationUrl: "https://www.worldometers.info/world-population/germany-population/",
        GDPUrl: "https://www.worldometers.info/gdp/germany-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/germany",
    },
    {
        country: "#France",
        name: "Франция",
        populationUrl: "https://www.worldometers.info/world-population/france-population/",
        GDPUrl: "https://www.worldometers.info/gdp/france-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/france",
    },
    {
        country: "#UK",
        name: "Съединеното кралство",
        populationUrl: "https://www.worldometers.info/world-population/uk-population/",
        GDPUrl: "https://www.worldometers.info/gdp/uk-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/united-kingdom",
    },
    {
        country: "#Bulgaria",
        name: "България",
        populationUrl: "https://www.worldometers.info/world-population/bulgaria-population/",
        GDPUrl: "https://www.worldometers.info/gdp/bulgaria-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/bulgaria",
    },
    {
        country: "#Mexico",
        name: "Мексико",
        populationUrl: "https://www.worldometers.info/world-population/mexico-population/",
        GDPUrl: "https://www.worldometers.info/gdp/mexico-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/mexico",
    },
    {
        country: "#Australia",
        name: "Австралия",
        populationUrl: "https://www.worldometers.info/world-population/australia-population/",
        GDPUrl: "https://www.worldometers.info/gdp/australia-gdp/",
        FPUrl: "http://www.oceanhealthindex.org/region-scores/scores/australia",
    },
];

//This array WILL hold different cards, which will be randomly selected by a RNG. 
//This will make a small "minigame", in which you rule a country for a time period and try to better its' pollution and food production score, while balancing GDP
var Cards = [
    {
        id:0,
        title:"Beach Cleanup Event",
        img:"",
        text:"",
        influneceMinus:"",
        influencePlus:"",
    },
    {
        id:1,
        title:"Beach Cleanup Event",
        img:"",
        text:"",
        influneceMinus:"",
        influencePlus:"",
    },
    {
        id:2,
        title:"Beach Cleanup Event",
        img:"",
        text:"",
        influneceMinus:"",
        influencePlus:"",
    },
    {
        id:3,
        title:"Beach Cleanup Event",
        img:"",
        text:"",
        influneceMinus:"",
        influencePlus:"",
    },
    {
        id:4,
        title:"Beach Cleanup Event",
        img:"",
        text:"",
        influneceMinus:"",
        influencePlus:"",
    },
    {
        id:5,
        title:"Beach Cleanup Event",
        img:"",
        text:"",
        influneceMinus:"",
        influencePlus:"",
    },
]

var foodDataPoint = ".CW span:first-child";                                                 //This dataPoints holds the DOM path of the element, from which we get our food production score
var pollutionDataPoint = ".FP span:first-child";                                            //This dataPoints holds the DOM path of the element, from which we get our pollution score
var populationDataPoint = "div.country-pop-description li:first-child strong:last-child";   //This dataPoints holds the DOM path of the element, from which we get our population number
var GDPSataPoint = ".col-md-7 li:first-child strong";                                       //This dataPoints holds the DOM path of the element, from which we get our GDP number