const getCovidApi =  async  () =>{
  const jsonData = await fetch('https://api.covid19api.com/summary');
  const jsdata = await jsonData.json();

  document.getElementById('Total-Confirmed').innerHTML =jsdata.Global.TotalConfirmed;
  document.getElementById('Total-Deaths').innerHTML =jsdata.Global.TotalDeaths;
  document.getElementById('Total-Recovered').innerHTML =jsdata.Global.TotalRecovered;
  document.getElementById('New-Confirmed').innerHTML =jsdata.Global.NewConfirmed;
  document.getElementById('New-Deaths').innerHTML =jsdata.Global.NewDeaths;
  document.getElementById('New-Recovered').innerHTML =jsdata.Global.NewRecovered;

  document.getElementById('T_Confirmed').innerHTML =jsdata.Countries[76].TotalConfirmed;
  document.getElementById('T_Deaths').innerHTML =jsdata.Countries[76].TotalDeaths;
  document.getElementById('T_Recovered').innerHTML =jsdata.Countries[76].TotalRecovered;
  document.getElementById('N_Confirmed').innerHTML =jsdata.Countries[76].NewConfirmed;
  document.getElementById('N_Deaths').innerHTML =jsdata.Countries[76].NewDeaths;
  document.getElementById('N_Recovered').innerHTML =jsdata.Countries[76].NewRecovered;
}
setInterval(getCovidApi, 1000);


const refreshTime = () =>{
  let time = new Date().toLocaleString('en-IN');
  // let formateTime = time.replace("/","-");
  document.getElementById('date').innerHTML = time;
}
setInterval(refreshTime, 1000);



  