// This gets time series of summary total NZ data for charts/tables
async function getApi() {
    const response = await fetch(api_urlsum);
    const data = await response.json();

    console.log(data);

    for (var i = 0; i < data.length; i++) {
        // var data1 = data;var formatedDate = date.format("isoDate");
        //Date

        dates.push(data[i].date.substring(0, 10)); // This takes string "2020-02-28T00:00:00.000Z" and reduces to  "2020-02-28" still text 
        //Daily
        conf.push(data[i].combined);
        rec.push(data[i].recovered);
        dead.push(data[i].deaths);
        hosp.push(data[i].hospital);


        combTot.push(data[i].combinedTotal);
        recTot.push(data[i].recoveredTotal);
        deadTot.push(data[i].deathsTotal);
        hospTot.push(data[i].hospitalTotal);
    }
    document.getElementById('date').textContent=dates[dates.length-1];
    //console.log(dates[dates.length-1]);
};

// This calls the api_urlhist which is history.json file & creates date, new and total figures by region 
//and put each in a specific array for that region
async function getApi2() {
    const response = await fetch(api_urlhist);
    const history = await response.json();

    //const his = JSON.parse(JSON.stringify(history).replace(/"\s+|\s+"/g, '"'));
    //console.log(his);
    //console.log(history);
    //console.log(history.["Bay of Plenty"][0].date);

    //Iterate through to create Date for region with only date (not time)
    console.log(history['Whanganui'].length);
    for (var i = 0; i < history["Auckland"].length; i++) {

        auckD.push(history["Auckland"][i].date.substring(0,  10));
        bopD.push(history["Bay of Plenty"][i].date.substring(0,  10));
        cantD.push(history["Canterbury"][i].date.substring(0,  10));
        cacD.push(history["Capital and Coast"][i].date.substring(0,  10));
        comaD.push(history["Counties Manukau"][i].date.substring(0,  10));
        hbD.push(history["Hawke's Bay"][i].date.substring(0,  10));
        huttD.push(history["Hutt Valley"][i].date.substring(0,  10));
        lakeD.push(history["Lakes"][i].date.substring(0,  10));
        midcD.push(history["MidCentral"][i].date.substring(0,  10));
        nelD.push(history["Nelson Marlborough"][i].date.substring(0,  10));
        nlandD.push(history["Northland"][i].date.substring(0,  10));
        scantD.push(history["South Canterbury"][i].date.substring(0,  10));
        sthrnD.push(history["Southern"][i].date.substring(0,  10));
        tairD.push(history["Tairāwhiti"][i].date.substring(0,  10));
        tarD.push(history["Taranaki"][i].date.substring(0,  10));
        waikD.push(history["Waikato"][i].date.substring(0,  10));
        wairaD.push(history["Wairarapa"][i].date.substring(0,  10));
        waitD.push(history["Waitemata"][i].date.substring(0,  10));
        wcoastD.push(history["West Coast"][i].date.substring(0,  10));
        whanD.push(history["Whanganui"][i].date.substring(0,  10));
    }
    //Iterate through to create New confirmed in region
    for (var i = 0; i < history["Auckland"].length; i++) {

        auckN.push(history["Auckland"][i].new);
        bopN.push(history["Bay of Plenty"][i].new);
        cantN.push(history["Canterbury"][i].new);
        cacN.push(history["Capital and Coast"][i].new);
        comaN.push(history["Counties Manukau"][i].new);
        hbN.push(history["Hawke's Bay"][i].new);
        huttN.push(history["Hutt Valley"][i].new);
        lakeN.push(history["Lakes"][i].new);
        midcN.push(history["MidCentral"][i].new);
        nelN.push(history["Nelson Marlborough"][i].new);
        nlandN.push(history["Northland"][i].new);
        scantN.push(history["South Canterbury"][i].new);
        sthrnN.push(history["Southern"][i].new);
        tairN.push(history["Tairāwhiti"][i].new);
        tarN.push(history["Taranaki"][i].new);
        waikN.push(history["Waikato"][i].new);
        wairaN.push(history["Wairarapa"][i].new);
        waitN.push(history["Waitemata"][i].new);
        wcoastN.push(history["West Coast"][i].new);
        whanN.push(history["Whanganui"][i].new);

    }
    //Iterate through to create Total confirmed in region
    for (var i = 0; i < history["Auckland"].length; i++) {

        auckT.push(history["Auckland"][i].total);
        bopT.push(history["Bay of Plenty"][i].total);
        cantT.push(history["Canterbury"][i].total);
        cacT.push(history["Capital and Coast"][i].total);
        comaT.push(history["Counties Manukau"][i].total);
        hbT.push(history["Hawke's Bay"][i].total);
        huttT.push(history["Hutt Valley"][i].total);
        lakeT.push(history["Lakes"][i].total);
        midcT.push(history["MidCentral"][i].total);
        nelT.push(history["Nelson Marlborough"][i].total);
        nlandT.push(history["Northland"][i].total);
        scantT.push(history["South Canterbury"][i].total);
        sthrnT.push(history["Southern"][i].total);
        tairT.push(history["Tairāwhiti"][i].total);
        tarT.push(history["Taranaki"][i].total);
        waikT.push(history["Waikato"][i].total);
        wairaT.push(history["Wairarapa"][i].total);
        waitT.push(history["Waitemata"][i].total);
        wcoastT.push(history["West Coast"][i].total);
        whanT.push(history["Whanganui"][i].total);
    }
    // testing  arrays are working
    console.log(whanD[0]);
    console.log(whanD);
    console.log(whanT[0]);
    console.log(whanT);
    console.log(whanN[0]);
    console.log(whanN);
};


async function getApi4() {
    const response = await fetch(api_urlregion);
    const region = await response.json();

    /*  iterate through data and push into empty arrays 
        NOTE- this only iterates through the first 20 items in the file (0 to 19) 
        there is more info in the JSON file that I don't want, to do with Clusters*/
    for (var i = 0; i < 20; i++) {
        // DHB region name & population of DHB 
        name1.push(region[i].name);
        pop1.push(region[i].population);

    }
    console.log(name1);
    console.log(pop1);
    console.log(name1[2]);
};
// This gets theregion with the largest umber on latest date. 
async function getMaxRegionNum() {
    const response = await fetch(api_urlhist);
    const history = await response.json();
//this finds the last item in the list, as the api is being updated the list grows.
    const lastInArray =history[Object.keys(history)[19]].length;
    console.log(history[Object.keys(history)[19]].length); // this works to get lastDHB by item, can iterate through to get largest item

     console.log(history[Object.keys(history)[0]][lastInArray-1].total); // this works to get last TOTAL in array of city
  const mxArray=[];
//loop to get array of all the current date values, thisarray to find maxvalue
    for (var i = 0; i < 20; i++) { // Hardcoded DHB numbers (19 in total so has to be <20)

        mxArray.push(history[Object.keys(history)[i]][lastInArray-1].total);
    } 
    maxTot=Math.max(...maxArray);
    lg(maxTot);
     return mxArray; 
}