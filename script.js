var cities = ["Kabul","Tirana","Algiers","Andorra la Vella","Luanda","St. John's","Buenos Aires","Yerevan","Canberra","Vienna","Baku","Nassau","Al-Man mah","Dhaka","Bridgetown","Mensk (Minsk)","Brussels","Belmopan","Porto-Novo (official)","Thimphu (official)","Sucre","Sarajevo","Gaborone","Bras¡lia","Bandar Seri Begawan","Sofia","Ouagadougou","Bujumbura","Phnom Penh","Yaound‚","Ottawa","Praia","Bangui","N'Djamena","Santiago","Beijing","Santaf‚ de Bogot ","Moroni (on Grande Comoro)","Democratic Republic of the  ","Republic of  ","San Jos‚","Yamoussoukro (official)","Zagreb","Havana","Lefkosia (Nicosia) (in government-controlled area)","Prague","Copenhagen","Djibouti","Roseau","Santo Domingo","Dili","Quito 1","Cairo","San Salvador","Malabo","Asmara","Tallinn","Addis Ababa","Suva (on Viti Levu)","Helsinki","Paris","Libreville","Banjul","Tbilisi","Berlin (capital since Oct. 3","Accra","Athens","St. George's","Guatemala City","Conakry","Bissau","Georgetown","Port-au-Prince","Tegucigalpa","Budapest","Reykjavik","New Delhi","Jakarta","Tehran","Baghdad","Dublin","Jerusalem","Rome","Kingston","Tokyo","Amman","Astana","Nairobi","Tarawa","North  ","South  ","Pristina","Kuwait","Bishkek (formerly Frunze)","Vientiane","Riga","Beirut","Maseru 173","Monrovia","Tripoli","Vaduz","Vilnius","Luxembourg","Skopje","Antananarivo","Lilongwe","Kuala Lumpur","Mal‚","Bamako","Valletta","Majuro","Nouakchott","Port Louis","Mexico City","Palikir 11","Chisinau","Monaco","Ulaan Baatar","Podgorica (administrative capital)","Rabat","Maputo","Rangoon (Yangon)","Windhoek","Yaren","Kathmandu","Amsterdam (official)","Wellington","Managua","Niamey","Abuja","Oslo","Muscat","Islamabad","Melekeok","Undetermined","Panama City","Port Moresby","Asunci¢n","Lima","Manila","Warsaw","Lisbon","Doha","Bucharest","Moscow","Kigali","Basseterre (on St. Kitts)","Castries","Kingstown","Apia","San Marino","S?o Tom‚","Riyadh","Dakar","Belgrade","Victoria","Freetown","Singapore","Bratislava","Ljubljana","Honiara (on Guadalcanal)","Mogadishu","Pretoria","Republic of  ","Madrid","Colombo","Khartoum","Paramaribo","Mbabane","Stockholm","Bern","Damascus","Taipei","Dushanbe","Dar es Salaam","Bangkok","Lom‚","Nuku'alofa","Port-of-Spain","Tunis","Ankara","Ashgabat","Funafuti","Kampala","Kyiv (Kiev)","Abu Dhabi","London","Washington","Montevideo","Tashkent","Port Vila","Caracas","Hanoi","Laayoune","Sana ","Lusaka","Harare"]

var capitals = [
  {
    "Country": "Afghanistan",
    "City": "Kabul"
  },
  {
    "Country": "Albania",
    "City": "Tirana"
  },
  {
    "Country": "Algeria",
    "City": "Algiers"
  },
  {
    "Country": "Andorra",
    "City": "Andorra la Vella"
  },
  {
    "Country": "Angola",
    "City": "Luanda"
  },
  {
    "Country": "Antigua and Barbuda",
    "City": "St. John's"
  },
  {
    "Country": "Argentina",
    "City": "Buenos Aires"
  },
  {
    "Country": "Armenia",
    "City": "Yerevan"
  },
  {
    "Country": "Australia",
    "City": "Canberra"
  },
  {
    "Country": "Austria",
    "City": "Vienna"
  },
  {
    "Country": "Azerbaijan",
    "City": "Baku"
  },
  {
    "Country": "Bahamas",
    "City": "Nassau"
  },
  {
    "Country": "Bahrain",
    "City": "Al-Man mah"
  },
  {
    "Country": "Bangladesh",
    "City": "Dhaka"
  },
  {
    "Country": "Barbados",
    "City": "Bridgetown"
  },
  {
    "Country": "Belarus",
    "City": "Mensk (Minsk)"
  },
  {
    "Country": "Belgium",
    "City": "Brussels"
  },
  {
    "Country": "Belize",
    "City": "Belmopan"
  },
  {
    "Country": "Benin",
    "City": "Porto-Novo (official)"
  },
  {
    "Country": "Bhutan",
    "City": "Thimphu (official)"
  },
  {
    "Country": "Bolivia",
    "City": "Sucre"
  },
  {
    "Country": "Bosnia and Herzegovina",
    "City": "Sarajevo"
  },
  {
    "Country": "Botswana",
    "City": "Gaborone"
  },
  {
    "Country": "Brazil",
    "City": "Bras¡lia"
  },
  {
    "Country": "Brunei",
    "City": "Bandar Seri Begawan"
  },
  {
    "Country": "Bulgaria",
    "City": "Sofia"
  },
  {
    "Country": "Burkina Faso",
    "City": "Ouagadougou"
  },
  {
    "Country": "Burundi",
    "City": "Bujumbura"
  },
  {
    "Country": "Cambodia",
    "City": "Phnom Penh"
  },
  {
    "Country": "Cameroon",
    "City": "Yaound‚"
  },
  {
    "Country": "Canada",
    "City": "Ottawa"
  },
  {
    "Country": "Cape Verde",
    "City": "Praia"
  },
  {
    "Country": "Central African Republic",
    "City": "Bangui"
  },
  {
    "Country": "Chad",
    "City": "N'Djamena"
  },
  {
    "Country": "Chile",
    "City": "Santiago"
  },
  {
    "Country": "China",
    "City": "Beijing"
  },
  {
    "Country": "Colombia",
    "City": "Santaf‚ de Bogot"
  },
  {
    "Country": "Comoros",
    "City": "Moroni (on Grande Comoro)"
  },
  {
    "Country": "Congo",
    "City": "Democratic Republic of the"
  },
  {
    "Country": "Congo",
    "City": "Republic of"
  },
  {
    "Country": "Costa Rica",
    "City": "San Jos‚"
  },
  {
    "Country": "C“te d'Ivoire",
    "City": "Yamoussoukro (official)"
  },
  {
    "Country": "Croatia",
    "City": "Zagreb"
  },
  {
    "Country": "Cuba",
    "City": "Havana"
  },
  {
    "Country": "Cyprus",
    "City": "Lefkosia (Nicosia) (in government-controlled area)"
  },
  {
    "Country": "Czech Republic",
    "City": "Prague"
  },
  {
    "Country": "Denmark",
    "City": "Copenhagen"
  },
  {
    "Country": "Djibouti",
    "City": "Djibouti"
  },
  {
    "Country": "Dominica",
    "City": "Roseau"
  },
  {
    "Country": "Dominican Republic",
    "City": "Santo Domingo"
  },
  {
    "Country": "East Timor",
    "City": "Dili"
  },
  {
    "Country": "Ecuador",
    "City": "Quito 1"
  },
  {
    "Country": "Egypt",
    "City": "Cairo"
  },
  {
    "Country": "El Salvador",
    "City": "San Salvador"
  },
  {
    "Country": "Equatorial Guinea",
    "City": "Malabo"
  },
  {
    "Country": "Eritrea",
    "City": "Asmara"
  },
  {
    "Country": "Estonia",
    "City": "Tallinn"
  },
  {
    "Country": "Ethiopia",
    "City": "Addis Ababa"
  },
  {
    "Country": "Fiji",
    "City": "Suva (on Viti Levu)"
  },
  {
    "Country": "Finland",
    "City": "Helsinki"
  },
  {
    "Country": "France",
    "City": "Paris"
  },
  {
    "Country": "Gabon",
    "City": "Libreville"
  },
  {
    "Country": "Gambia",
    "City": "Banjul"
  },
  {
    "Country": "Georgia",
    "City": "Tbilisi"
  },
  {
    "Country": "Germany",
    "City": "Berlin (capital since Oct. 3"
  },
  {
    "Country": "Ghana",
    "City": "Accra"
  },
  {
    "Country": "Greece",
    "City": "Athens"
  },
  {
    "Country": "Grenada",
    "City": "St. George's"
  },
  {
    "Country": "Guatemala",
    "City": "Guatemala City"
  },
  {
    "Country": "Guinea",
    "City": "Conakry"
  },
  {
    "Country": "Guinea-Bissau",
    "City": "Bissau"
  },
  {
    "Country": "Guyana",
    "City": "Georgetown"
  },
  {
    "Country": "Haiti",
    "City": "Port-au-Prince"
  },
  {
    "Country": "Honduras",
    "City": "Tegucigalpa"
  },
  {
    "Country": "Hungary",
    "City": "Budapest"
  },
  {
    "Country": "Iceland",
    "City": "Reykjavik"
  },
  {
    "Country": "India",
    "City": "New Delhi"
  },
  {
    "Country": "Indonesia",
    "City": "Jakarta"
  },
  {
    "Country": "Iran",
    "City": "Tehran"
  },
  {
    "Country": "Iraq",
    "City": "Baghdad"
  },
  {
    "Country": "Ireland",
    "City": "Dublin"
  },
  {
    "Country": "Israel",
    "City": "Jerusalem"
  },
  {
    "Country": "Italy",
    "City": "Rome"
  },
  {
    "Country": "Jamaica",
    "City": "Kingston"
  },
  {
    "Country": "Japan",
    "City": "Tokyo"
  },
  {
    "Country": "Jordan",
    "City": "Amman"
  },
  {
    "Country": "Kazakhstan",
    "City": "Astana"
  },
  {
    "Country": "Kenya",
    "City": "Nairobi"
  },
  {
    "Country": "Kiribati",
    "City": "Tarawa"
  },
  {
    "Country": "Korea",
    "City": "North"
  },
  {
    "Country": "Korea",
    "City": "South"
  },
  {
    "Country": "Kosovo",
    "City": "Pristina"
  },
  {
    "Country": "Kuwait",
    "City": "Kuwait"
  },
  {
    "Country": "Kyrgyzstan",
    "City": "Bishkek (formerly Frunze)"
  },
  {
    "Country": "Laos",
    "City": "Vientiane"
  },
  {
    "Country": "Latvia",
    "City": "Riga"
  },
  {
    "Country": "Lebanon",
    "City": "Beirut"
  },
  {
    "Country": "Lesotho",
    "City": "Maseru 173"
  },
  {
    "Country": "Liberia",
    "City": "Monrovia"
  },
  {
    "Country": "Libya",
    "City": "Tripoli"
  },
  {
    "Country": "Liechtenstein",
    "City": "Vaduz"
  },
  {
    "Country": "Lithuania",
    "City": "Vilnius"
  },
  {
    "Country": "Luxembourg",
    "City": "Luxembourg"
  },
  {
    "Country": "Macedonia",
    "City": "Skopje"
  },
  {
    "Country": "Madagascar",
    "City": "Antananarivo"
  },
  {
    "Country": "Malawi",
    "City": "Lilongwe"
  },
  {
    "Country": "Malaysia",
    "City": "Kuala Lumpur"
  },
  {
    "Country": "Maldives",
    "City": "Mal‚"
  },
  {
    "Country": "Mali",
    "City": "Bamako"
  },
  {
    "Country": "Malta",
    "City": "Valletta"
  },
  {
    "Country": "Marshall Islands",
    "City": "Majuro"
  },
  {
    "Country": "Mauritania",
    "City": "Nouakchott"
  },
  {
    "Country": "Mauritius",
    "City": "Port Louis"
  },
  {
    "Country": "Mexico",
    "City": "Mexico City"
  },
  {
    "Country": "Micronesia",
    "City": "Palikir 11"
  },
  {
    "Country": "Moldova",
    "City": "Chisinau"
  },
  {
    "Country": "Monaco",
    "City": "Monaco"
  },
  {
    "Country": "Mongolia",
    "City": "Ulaan Baatar"
  },
  {
    "Country": "Montenegro",
    "City": "Podgorica (administrative capital)"
  },
  {
    "Country": "Morocco",
    "City": "Rabat"
  },
  {
    "Country": "Mozambique",
    "City": "Maputo"
  },
  {
    "Country": "Myanmar",
    "City": "Rangoon (Yangon)"
  },
  {
    "Country": "Namibia",
    "City": "Windhoek"
  },
  {
    "Country": "Nauru",
    "City": "Yaren"
  },
  {
    "Country": "Nepal",
    "City": "Kathmandu"
  },
  {
    "Country": "Netherlands",
    "City": "Amsterdam (official)"
  },
  {
    "Country": "New Zealand",
    "City": "Wellington"
  },
  {
    "Country": "Nicaragua",
    "City": "Managua"
  },
  {
    "Country": "Niger",
    "City": "Niamey"
  },
  {
    "Country": "Nigeria",
    "City": "Abuja"
  },
  {
    "Country": "Norway",
    "City": "Oslo"
  },
  {
    "Country": "Oman",
    "City": "Muscat"
  },
  {
    "Country": "Pakistan",
    "City": "Islamabad"
  },
  {
    "Country": "Palau",
    "City": "Melekeok"
  },
  {
    "Country": "Palestinian State (proposed)",
    "City": "Undetermined"
  },
  {
    "Country": "Panama",
    "City": "Panama City"
  },
  {
    "Country": "Papua New Guinea",
    "City": "Port Moresby"
  },
  {
    "Country": "Paraguay",
    "City": "Asunci¢n"
  },
  {
    "Country": "Peru",
    "City": "Lima"
  },
  {
    "Country": "Philippines",
    "City": "Manila"
  },
  {
    "Country": "Poland",
    "City": "Warsaw"
  },
  {
    "Country": "Portugal",
    "City": "Lisbon"
  },
  {
    "Country": "Qatar",
    "City": "Doha"
  },
  {
    "Country": "Romania",
    "City": "Bucharest"
  },
  {
    "Country": "Russia",
    "City": "Moscow"
  },
  {
    "Country": "Rwanda",
    "City": "Kigali"
  },
  {
    "Country": "St. Kitts and Nevis",
    "City": "Basseterre (on St. Kitts)"
  },
  {
    "Country": "St. Lucia",
    "City": "Castries"
  },
  {
    "Country": "St. Vincent and the Grenadines",
    "City": "Kingstown"
  },
  {
    "Country": "Samoa",
    "City": "Apia"
  },
  {
    "Country": "San Marino",
    "City": "San Marino"
  },
  {
    "Country": "S?o Tom‚ and Pr¡ncipe",
    "City": "S?o Tom‚"
  },
  {
    "Country": "Saudi Arabia",
    "City": "Riyadh"
  },
  {
    "Country": "Senegal",
    "City": "Dakar"
  },
  {
    "Country": "Serbia",
    "City": "Belgrade"
  },
  {
    "Country": "Seychelles",
    "City": "Victoria"
  },
  {
    "Country": "Sierra Leone",
    "City": "Freetown"
  },
  {
    "Country": "Singapore",
    "City": "Singapore"
  },
  {
    "Country": "Slovakia",
    "City": "Bratislava"
  },
  {
    "Country": "Slovenia",
    "City": "Ljubljana"
  },
  {
    "Country": "Solomon Islands",
    "City": "Honiara (on Guadalcanal)"
  },
  {
    "Country": "Somalia",
    "City": "Mogadishu"
  },
  {
    "Country": "South Africa",
    "City": "Pretoria"
  },
  {
    "Country": "South Sudan",
    "City": "Republic of"
  },
  {
    "Country": "Spain",
    "City": "Madrid"
  },
  {
    "Country": "Sri Lanka",
    "City": "Colombo"
  },
  {
    "Country": "Sudan",
    "City": "Khartoum"
  },
  {
    "Country": "Suriname",
    "City": "Paramaribo"
  },
  {
    "Country": "Swaziland",
    "City": "Mbabane"
  },
  {
    "Country": "Sweden",
    "City": "Stockholm"
  },
  {
    "Country": "Switzerland",
    "City": "Bern"
  },
  {
    "Country": "Syria",
    "City": "Damascus"
  },
  {
    "Country": "Taiwan",
    "City": "Taipei"
  },
  {
    "Country": "Tajikistan",
    "City": "Dushanbe"
  },
  {
    "Country": "Tanzania",
    "City": "Dar es Salaam"
  },
  {
    "Country": "Thailand",
    "City": "Bangkok"
  },
  {
    "Country": "Togo",
    "City": "Lom‚"
  },
  {
    "Country": "Tonga",
    "City": "Nuku'alofa"
  },
  {
    "Country": "Trinidad and Tobago",
    "City": "Port-of-Spain"
  },
  {
    "Country": "Tunisia",
    "City": "Tunis"
  },
  {
    "Country": "Turkey",
    "City": "Ankara"
  },
  {
    "Country": "Turkmenistan",
    "City": "Ashgabat"
  },
  {
    "Country": "Tuvalu",
    "City": "Funafuti"
  },
  {
    "Country": "Uganda",
    "City": "Kampala"
  },
  {
    "Country": "Ukraine",
    "City": "Kyiv (Kiev)"
  },
  {
    "Country": "United Arab Emirates",
    "City": "Abu Dhabi"
  },
  {
    "Country": "United Kingdom",
    "City": "London"
  },
  {
    "Country": "United States",
    "City": "Washington"
  },
  {
    "Country": "Uruguay",
    "City": "Montevideo"
  },
  {
    "Country": "Uzbekistan",
    "City": "Tashkent"
  },
  {
    "Country": "Vanuatu",
    "City": "Port Vila"
  },
  {
    "Country": "Venezuela",
    "City": "Caracas"
  },
  {
    "Country": "Vietnam",
    "City": "Hanoi"
  },
  {
    "Country": "Western Sahara (proposed state)",
    "City": "Laayoune"
  },
  {
    "Country": "Yemen",
    "City": "Sana"
  },
  {
    "Country": "Zambia",
    "City": "Lusaka"
  },
  {
    "Country": "Zimbabwe",
    "City": "Harare"
  }
]
var coRand, quiz, grade = 0;
var ciRand = [3], questions = [], shuffleOptions = [], optionValues = [];


function getRand(){
    var countryN = Math.floor(Math.random() * capitals.length);
    var citiesN;

    coRand = capitals[countryN];

    for (var i = 0; i < 3; i++) {
      var citiesN = Math.floor(Math.random() * cities.length);
      ciRand[i] = cities[citiesN];
    };
}

function GenQuestions(){
  getRand();
  quiz = {"qusNum":questions.length, "questionText":coRand.Country, "options":[ciRand[0], ciRand[1], ciRand[2]], 
  "answer":coRand.City, "userResponse":"", "isCorrect":false};
  console.log(quiz.options.length);
}

function randomize(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    //console.log(array[m]+" and "+array[i])
    
  }
  
  return array;
}

function GenArray(){
GenQuestions();
questions.push(quiz);

document.getElementById("question").innerHTML = "Question: what's the capital of "+quiz.questionText;
  
  shuffleOptions = [quiz.answer, quiz.options[0], quiz.options[1], quiz.options[2]];
  var optionValues = randomize(shuffleOptions);

  console.log(optionValues);
  for (var i = 0; i <= 3; i++) {
    document.getElementById("op"+i).innerHTML = optionValues[i];
  };
  console.log(questions);
}



function response(){
  var userResponse = document.getElementsByName('cities');

  for (var i = 0; i < userResponse.length; i++) {
    userResponse[i].value = quiz.options[i];
    if (i==3) {
    userResponse[i].value = quiz.answer;
    }
    if (userResponse[i].checked) {
      var userAnswer = userResponse[i].value ;
      quiz.userResponse = userAnswer;

      if (userAnswer == quiz.answer) {
        quiz.isCorrect = true;
        grade++;
      }
      console.log(questions);
    break;
    }
  }
  document.getElementById("gradeTotal").innerHTML = grade+"/"+questions.length;

}



