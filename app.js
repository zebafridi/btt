
// const distances = {
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Phase_3": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-bab_e_peshawar": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-Tajabad": { distance: 4 ||  fare: 20 } || 
//     "karkhano-BoardBazar": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-IslamiaCollege": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-universitypeshawar": { distance: 4 ||  fare: 20 } || 
//     "karkhano-UniversityTown": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-AbdaraRoad": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-Tambuwaanm": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Tehkal": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-GoraQabristan": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-KhyberRoad": { distance: 4 ||  fare: 20 } || 
//     "karkhano-MallRoad": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-SaddarBazar": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-StateBank": { distance: 4 ||  fare: 20 } || 
//     "karkhano-RailwayStation": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     "karkhano-Hospitalchowk": { distance: 3.5 ||  fare: 15 } || 
//     "karkhano-PDA": { distance: 3.8 ||  fare: 15 } || 
//     "karkhano-tataraPark": { distance: 4 ||  fare: 20 } || 
//     // Add more locations and distances as needed
//   };
  
//   function cal() {
//     const fromInput = document.getElementById("from_input").value;
//     const toInput = document.getElementById("to_input").value;
//     const key = `${fromInput}-${toInput}`;
  
//     if (distances[key]) {
//       const { distance ||  fare } = distances[key];
//       document.getElementById("brt_para").textContent = `The distance is ${distance} (km). You will pay ${fare} Rs.`;
//     } else {
//       document.getElementById("brt_para").textContent = "Invalid input or no data available for the selected locations.";
//     }
//   }
  
        function cal(){
     let from_input= document.getElementById("from_input").value;
    let to_input= document.getElementById("to_input").value;
    

if (from_input === "karkhano" && to_input ==="Hospitalchowk"  ||  from_input === "Hospitalchowk" && to_input ==="karkhano") {
    
document.getElementById("brt_para").textContent="the distance is 2.5 (km) You wil b pay 15 Rs"
}
else if (from_input === "karkhano" && to_input ==="PDA"  ||  from_input === "PDA" && to_input ==="karkhano") {
    
    document.getElementById("brt_para").textContent="the distance is 2.5 (km) You wil b pay 15 Rs"
}
else if (from_input === "karkhano" && to_input ==="tataraPark" || from_input === "tataraPark" && to_input ==="karkhano") {
    
    document.getElementById("brt_para").textContent="the distance is 3 (km) You wil b pay 15 Rs"
}
else if (from_input === "karkhano" && to_input ==="Phas_3" || from_input === "Phas_3" && to_input ==="karkhano") {
    
    document.getElementById("brt_para").textContent="the distance is 3 (km) You wil b pay 15 Rs"
}
else if (from_input === "karkhano" && to_input ==="bab_e_peshawar" || from_input === "bab_e_peshawar" && to_input ==="karkhano") {
    
    document.getElementById("brt_para").textContent="the distance is 3.3 (km) You wil b pay 15 Rs"
}
else if (from_input === "karkhano" && to_input ==="Tajabad" || from_input === "Tajabad" && to_input ==="karkhano") {
   document.getElementById("brt_para").textContent="the distance is 3.9 (km) You wil b pay 15 Rs"
}
else if (from_input === "karkhano" && to_input ==="BoardBazar" || from_input === "BoardBazar" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 5 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="IslamiaCollege" || from_input === "IslamiaCollege" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 5.6 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 6.4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 7.1 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 7.8 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 8.7 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "karkhano" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 9.6 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "karkhano" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 11 (km) You wil b pay 15 Rs"
 }
 
 else if (from_input === "karkhano" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 11 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 11 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="FCchowk" || from_input === "StateBank" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 12   (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 12 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 13 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="shobaBazar" || from_input === "shobaBazar" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 13  (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 14 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 14 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 15 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 16 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="lahorAdda" || from_input === "Sikandar_Town" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 17 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="oldHajiCamp" || from_input === "Sethi_Town" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 18 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="faisalColony" || from_input === "Memorial_School" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 18 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 21 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "karkhano" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="karkhano") {
    document.getElementById("brt_para").textContent="the distance is 21 (km) You wil b pay 15 Rs"
 }



 

else if (from_input === "Hospitalchowk" && to_input ==="PDA" || from_input === "PDA" && to_input ==="Hospitalchowk") {
    
    document.getElementById("brt_para").textContent="the distance is 3.5 (km) You wil b pay 15 Rs"
}
else if (from_input === "Hospitalchowk" && to_input ==="tataraPark" || from_input === "tataraPark" && to_input ==="Hospitalchowk") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "Hospitalchowk" && to_input ==="tataraPark" || from_input === "tataraPark" && to_input ==="Hospitalchowk") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "Hospitalchowk" && to_input ==="Phas_3" || from_input === "Phas_3" && to_input ==="Hospitalchowk") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "Hospitalchowk" && to_input ==="bab_e_peshawar" || from_input === "bab_e_peshawar" && to_input ==="Hospitalchowk") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "Hospitalchowk" && to_input ==="Tajabad" || from_input === "Tajabadr" && to_input ==="Hospitalchowk") {
   document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "Hospitalchowk" && to_input ==="BoardBazar" || from_input === "BoardBazar" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="IslamiaCollege" || from_input === "IslamiaCollege" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "Hospitalchowk" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "Hospitalchowk" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hospitalchowk" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Hospitalchowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }



else if (from_input === "PDA" && to_input ==="tataraPark" || from_input === "tataraPark" && to_input ==="PDA") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "PDA" && to_input ==="tataraPark" || from_input === "tataraPark" && to_input ==="PDA") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "PDA" && to_input ==="Phas_3" || from_input === "Phas_3" && to_input ==="PDA") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "PDA" && to_input ==="bab_e_peshawar" || from_input === "bab_e_peshawar" && to_input ==="PDA") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "PDA" && to_input ==="Tajabad" || from_input === "Tajabadr" && to_input ==="PDA") {
   document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "PDA" && to_input ==="BoardBazar" || from_input === "BoardBazar" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="IslamiaCollege" || from_input === "IslamiaCollege" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "PDA" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "PDA" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "PDA" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="PDA") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }









else if (from_input === "phas_3" && to_input ==="bab_e_peshawar" || from_input === "bab_e_peshawar" && to_input ==="phas_3") {
    
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "phas_3" && to_input ==="Tajabad" || from_input === "Tajabadr" && to_input ==="phas_3") {
   document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "phas_3" && to_input ==="BoardBazar" || from_input === "BoardBazar" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="IslamiaCollege" || from_input === "IslamiaCollege" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "phas_3" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "phas_3" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "phas_3" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="phas_3") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


 
else if (from_input === "bab_e_peshawar" && to_input ==="Tajabad" || from_input === "Tajabadr" && to_input ==="bab_e_peshawar") {
   document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
}
else if (from_input === "bab_e_peshawar" && to_input ==="BoardBazar" || from_input === "BoardBazar" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input ==="bab_e_peshawar" && to_input ==="IslamiaCollege" || from_input === "IslamiaCollege" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "bab_e_peshawar" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "bab_e_peshawar" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "bab_e_peshawar" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="bab_e_peshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


 else if (from_input === "tajabad" && to_input ==="BoardBazar" || from_input === "BoardBazar" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input ==="tajabad" && to_input ==="IslamiaCollege" || from_input === "IslamiaCollege" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  } 
  else if (from_input === "tajabad" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
   else if (from_input === "tajabad" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }
  else if (from_input === "tajabad" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="tajabad") {
     document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
  }


 
  
 
 else if (from_input ==="BoardBazar" && to_input ==="IslamiaCollege" || from_input === "IslamiaCollege" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "BoardBazar" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "BoardBazar" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BoardBazar" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="BoardBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }



 
 
 else if (from_input === "IslamiaCollage" && to_input ==="universitypeshawar" || from_input === "universitypeshawar" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "IslamiaCollage" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "IslamiaCollage" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "IslamiaCollage" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="IslamiaCollage") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }




 
 
 
 else if (from_input === "universitypeshawar" && to_input ==="UniversityTown" || from_input === "UniversityTown" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="AbdaraRoad" || from_input === "AbdaraRoad" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "universitypeshawar" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "universitypeshawar" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "universitypeshawar" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="universitypeshawar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }



 
 
 
 else if (from_input === "AbdaraRoad" && to_input ==="Tambuwaanm" || from_input === "Tambuwaanm" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 } 
 else if (from_input === "AbdaraRoad" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "AbdaraRoad" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "AbdaraRoad" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


  
 else if (from_input === "Tambuwaanm" && to_input ==="Tehkal" || from_input === "Tehkal" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
  else if (from_input === "Tambuwaanm" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tambuwaanm" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Tambuwaanm") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }



  else if (from_input === "Tehkal" && to_input ==="GoraQabristan" || from_input === "GoraQabristan" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Tehkal" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Tehkal") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }





 
 else if (from_input === "GoraQabristan" && to_input ==="KhyberRoad" || from_input === "KhyberRoad" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "GoraQabristan" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }



 
 else if (from_input === "KhyberRoad" && to_input ==="MallRoad" || from_input === "MallRoad" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberRoad" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="GoraQabristan") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


 else if (from_input === "MallRoad" && to_input ==="SaddarBazar" || from_input === "SaddarBazar" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "MallRoad" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="MallRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


 
 else if (from_input === "SaddarBazar" && to_input ==="StateBank" || from_input === "StateBank" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "SaddarBazar" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="SaddarBazar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }




 else if (from_input === "StateBank" && to_input ==="RailwayStation" || from_input === "RailwayStation" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "StateBank" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="StateBank") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }

 

 
 else if (from_input=== "RailwayStation" && to_input ==="DabgariGardens" || from_input === "DabgariGardens" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "RailwayStation===RailwayStation" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="RailwayStation") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }



 else if (from_input === "DabgriGardens" && to_input ==="Soekarno" || from_input === "Soekarno" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "DabgriGardens" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="DabgriGardens") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }

 
 else if (from_input === "Soekarno" && to_input ==="KhyberBazaar" || from_input === "KhyberBazaar" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Soekarno" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Soekarno") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


 
 else if (from_input === "KhyberBazaar" && to_input ==="HospitalRoad" || from_input === "HospitalRoad" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "KhyberBazaar" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="KhyberBazaar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }

 
 else if (from_input === "HospitalRoad" && to_input ==="BalaHisar" || from_input === "BalaHisar" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "HospitalRoad" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "HospitalRoad" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "HospitalRoad" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "HospitalRoad" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "HospitalRoad" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "HospitalRoad" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "HospitalRoad" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="HospitalRoad") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }




 else if (from_input === "BalaHisar" && to_input ==="Hashtnagri" || from_input === "Hashtnagri" && to_input ==="BalaHisar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BalaHisar" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="BalaHisar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BalaHisar" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="BalaHisar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BalaHisar" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="BalaHisar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BalaHisar" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="BalaHisar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BalaHisar" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="BalaHisar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "BalaHisar" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="BalaHisar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }




 else if (from_input === "Hashtnagri" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="Hashtnagri") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hashtnagri" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="Hashtnagri") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hashtnagri" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="Hashtnagri") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hashtnagri" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Hashtnagri") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hashtnagri" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Hashtnagri") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Hashtnagri" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Hashtnagri") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


 else if (from_input === "Gulbahar" && to_input ==="Gulbahar" || from_input === "Gulbahar" && to_input ==="Gulbahar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Gulbahar" && to_input ==="Sikandar_Town" || from_input === "Sikandar_Town" && to_input ==="Gulbahar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Gulbahar" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="Gulbahar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Gulbahar" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Gulbahar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Gulbahar" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Gulbahar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Gulbahar" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Gulbahar") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }




 else if (from_input === "Sikandar_Town" && to_input ==="Sethi_Town" || from_input === "Sethi_Town" && to_input ==="Sikandar_Town") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Sikandar_Town" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Sikandar_Town") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Sikandar_Town" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Sikandar_Town") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Sikandar_Town" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Sikandar_Town") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


 
 else if (from_input === "Sethi_Town" && to_input ==="Memorial_School" || from_input === "Memorial_School" && to_input ==="Sethi_Town") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Sethi_Town" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Sethi_Town") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Sethi_Town" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Sethi_Town") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }

 
 else if (from_input === "Memorial_School" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="Memorial_School") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }
 else if (from_input === "Memorial_School" && to_input ==="ChamkaniChowk" || from_input === "ChamkaniChowk" && to_input ==="Memorial_School") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }



 else if (from_input === "ChamkaniChowk" && to_input ==="Chughal_Pura" || from_input === "Chughal_Pura" && to_input ==="ChamkaniChowk") {
    document.getElementById("brt_para").textContent="the distance is 4 (km) You wil b pay 15 Rs"
 }


}