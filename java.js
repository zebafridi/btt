var from_input;
var to_input;

function calculateDistanceAndDisplay(from, to, distance, fare) {
    if ((from_input === from && to_input === to) || (from_input === to && to_input === from)) {
        document.getElementById("brt_para").textContent = `the distance is ${distance} (km) You wil b pay ${fare} Rs`;
    }
   
}

function cal() {
    from_input = document.getElementById("from_input").value;
    to_input = document.getElementById("to_input").value;
   //karkhano stantion//
    calculateDistanceAndDisplay("karkhano", "HospitalChowk", 2.5, 15);
    calculateDistanceAndDisplay("karkhano", "PDA", 2.7, 15);
    calculateDistanceAndDisplay("karkhano", "tatarPark", 3, 15);
    calculateDistanceAndDisplay("karkhano", "Phase3", 3.3, 15);
    calculateDistanceAndDisplay("karkhano", "babePeshawar", 3.3, 15);
    calculateDistanceAndDisplay("karkhano", "MallOfHayatabad", 3.9, 15);
    calculateDistanceAndDisplay("karkhano", "BoardBazar", 5, 15);
    calculateDistanceAndDisplay("karkhano", "IslamiaCollage", 5.6, 20);
    calculateDistanceAndDisplay("karkhano", "UniversityOfPeshawar", 6.4, 20);
    calculateDistanceAndDisplay("karkhano", "UniversityTown", 7.1, 20);
    calculateDistanceAndDisplay("karkhano", "AbdraRoad", 7.8, 20);
    calculateDistanceAndDisplay("karkhano", "TehkalBala", 7.8, 20);
    calculateDistanceAndDisplay("karkhano", "TehkalPayan", 9.6, 20);
    calculateDistanceAndDisplay("karkhano", "MallRoad", 11, 25);
    calculateDistanceAndDisplay("karkhano", "SadarBazar", 11, 25);
    calculateDistanceAndDisplay("karkhano", "FCChowk", 12, 25);
    calculateDistanceAndDisplay("karkhano", "RailwayStation", 12, 25);
    calculateDistanceAndDisplay("karkhano", "DabgariGardens", 13, 25);
    calculateDistanceAndDisplay("karkhano", "ShubaBazar", 13, 25);
    calculateDistanceAndDisplay("karkhano", "KhyberBazar", 14, 25);
    calculateDistanceAndDisplay("karkhano", "MalikSaadShaheed", 14, 25);
    calculateDistanceAndDisplay("karkhano", "Hashtnagri", 15, 25);
    calculateDistanceAndDisplay("karkhano", "GulbaharChowk", 16, 30);
    calculateDistanceAndDisplay("karkhano", "LahoreAdda", 17, 30);
    calculateDistanceAndDisplay("karkhano", "OldHajiCamp", 18, 30);
    calculateDistanceAndDisplay("karkhano", "FaisalColony", 18, 30);
    calculateDistanceAndDisplay("karkhano", "ChughalPura", 20, 30);
    calculateDistanceAndDisplay("karkhano", "SardarGari", 21, 35);
    calculateDistanceAndDisplay("karkhano", "ChamkaniChowk", 21.5, 35);
   //Hospital Chowk Station// 
    calculateDistanceAndDisplay("HospitalChowk", "PDA", 2.7-2.5, 15);
    calculateDistanceAndDisplay("HospitalChowk", "tatarPark", 3-2.5, 15);
    calculateDistanceAndDisplay("HospitalChowk", "Phase3", 3.3-2.5, 15);
    calculateDistanceAndDisplay("HospitalChowk", "babePeshawar", 3.3-2.5, 15);
    calculateDistanceAndDisplay("HospitalChowk", "MallOfHayatabad", 3.9-2.5, 15);
    calculateDistanceAndDisplay("HospitalChowk", "BoardBazar", 5-2.5, 15);
    calculateDistanceAndDisplay("HospitalChowk", "IslamiaCollage", 5.6-2.5, 20);
    calculateDistanceAndDisplay("HospitalChowk", "UniversityOfPeshawar", 6.4-2.5, 20);
    calculateDistanceAndDisplay("HospitalChowk", "UniversityTown", 7.1-2.5, 20);
    calculateDistanceAndDisplay("HospitalChowk", "AbdraRoad", 7.8-2.5, 20);
    calculateDistanceAndDisplay("HospitalChowk", "TehkalBala", 7.8-2.5, 20);
    calculateDistanceAndDisplay("HospitalChowk", "TehkalPayan", 9.6-2.5, 20);
    calculateDistanceAndDisplay("HospitalChowk", "MallRoad", 11-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "SadarBazar", 11-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "FCChowk", 12-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "RailwayStation", 12-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "DabgariGardens", 13-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "ShubaBazar", 13-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "KhyberBazar", 14-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "MalikSaadShaheed", 14-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "Hashtnagri", 15-2.5, 25);
    calculateDistanceAndDisplay("HospitalChowk", "GulbaharChowk", 16-2.5, 30);
    calculateDistanceAndDisplay("HospitalChowk", "LahoreAdda", 17-2.5, 30);
    calculateDistanceAndDisplay("HospitalChowk", "OldHajiCamp", 18-2.5, 30);
    calculateDistanceAndDisplay("HospitalChowk", "FaisalColony", 18-2.5, 30);
    calculateDistanceAndDisplay("HospitalChowk", "ChughalPura", 20-2.5, 30);
    calculateDistanceAndDisplay("HospitalChowk", "SardarGari", 21-2.5, 35);
    calculateDistanceAndDisplay("HospitalChowk", "ChamkaniChowk", 21.5-2.5, 35);
    // PDA Station//
    calculateDistanceAndDisplay("PDA", "tatarPark", 3-2.5, 15);
    calculateDistanceAndDisplay("PDA", "Phase3", 3.3-2.5, 15);
    calculateDistanceAndDisplay("PDA", "babePeshawar", 3.3-2.5, 15);
    calculateDistanceAndDisplay("PDA", "MallOfHayatabad", 3.9-2.5, 15);
    calculateDistanceAndDisplay("PDA", "BoardBazar", 5-2.5, 15);
    calculateDistanceAndDisplay("PDA", "IslamiaCollage", 5.6-2.5, 20);
    calculateDistanceAndDisplay("PDA", "UniversityOfPeshawar", 6.4-2.5, 20);
    calculateDistanceAndDisplay("PDA", "UniversityTown", 7.1, 20);
    calculateDistanceAndDisplay("PDA", "AbdraRoad", 7.8-2.5, 20);
    calculateDistanceAndDisplay("PDA", "TehkalBala", 8.7-2.5, 20);
    calculateDistanceAndDisplay("PDA", "TehkalPayan", 9.6-2.5, 20);
    calculateDistanceAndDisplay("PDA", "MallRoad", 11-2.5, 25);
    calculateDistanceAndDisplay("PDA", "SadarBazar", 11-2.5, 25);
    calculateDistanceAndDisplay("PDA", "FCChowk", 12-2.5, 25);
    calculateDistanceAndDisplay("PDA", "RailwayStation", 12-2.5, 25);
    calculateDistanceAndDisplay("PDA", "DabgariGardens", 13-2.5, 25);
    calculateDistanceAndDisplay("PDA", "ShubaBazar", 13-2.5, 25);
    calculateDistanceAndDisplay("PDA", "KhyberBazar", 14-2.5, 25);
    calculateDistanceAndDisplay("PDA", "MalikSaadShaheed", 14-2.5, 25);
    calculateDistanceAndDisplay("PDA", "Hashtnagri", 15-2.5, 25);
    calculateDistanceAndDisplay("PDA", "GulbaharChowk", 16-2.5, 30);
    calculateDistanceAndDisplay("PDA", "LahoreAdda", 17-2.5, 30);
    calculateDistanceAndDisplay("PDA", "OldHajiCamp", 18-2.5, 30);
    calculateDistanceAndDisplay("PDA", "FaisalColony", 18-2.5, 30);
    calculateDistanceAndDisplay("PDA", "ChughalPura", 20-2.5, 30);
    calculateDistanceAndDisplay("PDA", "SardarGari", 21-2.5, 35);
    calculateDistanceAndDisplay("PDA", "ChamkaniChowk", 21.5-2.5, 35);
    //tataraPark Station//
    calculateDistanceAndDisplay("tataraPark", "Phase3", 3.3-3.0, 15);
    calculateDistanceAndDisplay("tataraPark", "babePeshawar", 3.3-3.0, 15);
    calculateDistanceAndDisplay("tataraPark", "MallOfHayatabad", 3.9-3.0, 15);
    calculateDistanceAndDisplay("tataraPark", "BoardBazar", 5-3.0, 15);
    calculateDistanceAndDisplay("tataraPark", "IslamiaCollage", 5.6-3.0, 20);
    calculateDistanceAndDisplay("tataraPark", "UniversityOfPeshawar", 6.4-3.0, 20);
    calculateDistanceAndDisplay("tataraPark", "UniversityTown", 7.1, 20);
    calculateDistanceAndDisplay("tataraPark", "AbdraRoad", 7.8-3.0, 20);
    calculateDistanceAndDisplay("tataraPark", "TehkalBala", 8.7-3.0, 20);
    calculateDistanceAndDisplay("tataraPark", "TehkalPayan", 9.6-3.0, 20);
    calculateDistanceAndDisplay("tataraPark", "MallRoad", 11-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "SadarBazar", 11-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "FCChowk", 12-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "RailwayStation", 12-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "DabgariGardens", 13-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "ShubaBazar", 13-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "KhyberBazar", 14-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "MalikSaadShaheed", 14-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "Hashtnagri", 15-3.0, 25);
    calculateDistanceAndDisplay("tataraPark", "GulbaharChowk", 16-3.0, 30);
    calculateDistanceAndDisplay("tataraPark", "LahoreAdda", 17-3.0, 30);
    calculateDistanceAndDisplay("tataraPark", "OldHajiCamp", 18-3.0, 30);
    calculateDistanceAndDisplay("tataraPark", "FaisalColony", 18-3.0, 30);
    calculateDistanceAndDisplay("tataraPark", "ChughalPura", 20-3.0, 30);
    calculateDistanceAndDisplay("tataraPark", "SardarGari", 21-3.0, 35);
    calculateDistanceAndDisplay("tataraPark", "ChamkaniChowk", 21.5-3.0, 35);
      //Phase3 station    
    calculateDistanceAndDisplay("Phas3", "babePeshawar", 3.3-3.3, 15);
    calculateDistanceAndDisplay("Phas3", "MallOfHayatabad", 3.9-3.3, 15);
    calculateDistanceAndDisplay("Phas3", "BoardBazar", 5-3.3, 15);
    calculateDistanceAndDisplay("Phas3", "IslamiaCollage", 5.6-3.3, 20);
    calculateDistanceAndDisplay("Phas3", "UniversityOfPeshawar", 6.4-3.3, 20);
    calculateDistanceAndDisplay("Phas3", "UniversityTown", 7.-3.31, 20);
    calculateDistanceAndDisplay("Phas3", "AbdraRoad", 7.8-3.3, 20);
    calculateDistanceAndDisplay("Phas3", "TehkalBala", 8.7-3.3, 20);
    calculateDistanceAndDisplay("Phas3", "TehkalPayan", 9.6-3.3, 20);
    calculateDistanceAndDisplay("Phas3", "MallRoad", 11-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "SadarBazar", 11-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "FCChowk", 12-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "RailwayStation", 12-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "DabgariGardens", 13-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "ShubaBazar", 13-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "KhyberBazar", 14-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "MalikSaadShaheed", 14-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "Hashtnagri", 15-3.3, 25);
    calculateDistanceAndDisplay("Phas3", "GulbaharChowk", 16-3.3, 30);
    calculateDistanceAndDisplay("Phas3", "LahoreAdda", 17-3.3, 30);
    calculateDistanceAndDisplay("Phas3", "OldHajiCamp", 18-3.3, 30);
    calculateDistanceAndDisplay("Phas3", "FaisalColony", 18-3.3, 30);
    calculateDistanceAndDisplay("Phas3", "ChughalPura", 20-3.3, 30);
    calculateDistanceAndDisplay("Phas3", "SardarGari", 21-3.3, 35);
    calculateDistanceAndDisplay("Phas3", "ChamkaniChowk", 21.5-3.3, 35);
    

    // Add more routes as needed

    calculateDistanceAndDisplay("babePeshBoardBazarMallOfHayatabad", 3.9-3.3, 15);
    calculateDistanceAndDisplay("babePeshawar", "BoardBazar", 5-3.3, 15);
    calculateDistanceAndDisplay("babePeshawar", "IslamiaCollage", 5.6-3.3, 20);
    calculateDistanceAndDisplay("babePeshawar", "UniversityOfPeshawar", 6.4-3.3, 20);
    calculateDistanceAndDisplay("babePeshawar", "UniversityTown", 7.1-3.3, 20);
    calculateDistanceAndDisplay("babePeshawar", "AbdraRoad", 7.8-3.3, 20);
    calculateDistanceAndDisplay("babePeshawar", "TehkalBala", 8.7-3.3, 20);
    calculateDistanceAndDisplay("babePeshawar", "TehkalPayan", 9.6-3.3, 20);
    calculateDistanceAndDisplay("babePeshawar", "MallRoad", 11-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "SadarBazar", 11-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "FCChowk", 12-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "RailwayStation", 12-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "DabgariGardens", 13-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "ShobaBazar", 13-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "KhyberBazar", 14-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "MalikSaadShaheed", 14-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "Hashtnagri", 15-3.3, 25);
    calculateDistanceAndDisplay("babePeshawar", "GulbaharChowk", 16-3.3, 30);
    calculateDistanceAndDisplay("babePeshawar", "LahoreAdda", 17-3.3, 30);
    calculateDistanceAndDisplay("babePeshawar", "OldHajiCamp", 18-3.3, 30);
    calculateDistanceAndDisplay("babePeshawar", "FaisalColony", 18-3.3, 30);
    calculateDistanceAndDisplay("babePeshawar", "ChughalPura", 20-3.3, 30);
    calculateDistanceAndDisplay("babePeshawar", "SardarGari", 21-3.3, 35);
    calculateDistanceAndDisplay("babePeshawar", "ChamkaniChowk", 21.5-3.3, 35);
    



  
    calculateDistanceAndDisplay("MallOfHayatabad", "BoardBazar", 5-3.9, 15);
    calculateDistanceAndDisplay("MallOfHayatabad", "IslamiaCollage", 5.6-3.9, 15);
    calculateDistanceAndDisplay("MallOfHayatabad", "UniversityOfPeshawar", 6.4-3.9, 15);
    calculateDistanceAndDisplay("MallOfHayatabad", "UniversityTown", 7.1-3.9, 15);
    calculateDistanceAndDisplay("MallOfHayatabad", "AbdraRoad", 7.8-3.9, 15);
    calculateDistanceAndDisplay("MallOfHayatabad", "TehkalBala", 8.7-3.9, 15);
    calculateDistanceAndDisplay("MallOfHayatabad", "TehkalPayan", 9.6-3.9, 15);
    calculateDistanceAndDisplay("MallOfHayatabad", "MallRoad", 11-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "SadarBazar", 11-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "FCChowk", 12-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "RailwayStation", 12-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "DabgariGardens", 13-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "ShubaBazar", 13-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "KhyberBazar", 14-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "MalikSaadShaheed", 14-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "Hashtnagri", 15-3.9, 25);
    calculateDistanceAndDisplay("MallOfHayatabad", "GulbaharChowk", 16-3.9, 30);
    calculateDistanceAndDisplay("MallOfHayatabad", "LahoreAdda", 17-3.9, 30);
    calculateDistanceAndDisplay("MallOfHayatabad", "OldHajiCamp", 18-3.9, 30);
    calculateDistanceAndDisplay("MallOfHayatabad", "FaisalColony", 18-3.9, 30);
    calculateDistanceAndDisplay("MallOfHayatabad", "ChughalPura", 20-3.9, 30);
    calculateDistanceAndDisplay("MallOfHayatabad", "SardarGari", 21-3.9, 35);
    calculateDistanceAndDisplay("MallOfHayatabad", "ChamkaniChowk", 21.5-3.9, 35);


   
    calculateDistanceAndDisplay("BoardBazar", "IslamiaCollage", 5.6-5.0, 20);
    calculateDistanceAndDisplay("BoardBazar", "UniversityOfPeshawar", 6.4-5.0, 20);
    calculateDistanceAndDisplay("BoardBazar", "UniversityTown", 7.1-5.0, 20);
    calculateDistanceAndDisplay("BoardBazar", "AbdraRoad", 7.8-5.0, 20);
    calculateDistanceAndDisplay("BoardBazar", "TehkalBala", 8.7-5.0, 20);
    calculateDistanceAndDisplay("BoardBazar", "TehkalPayan", 9.6-5.0, 20);
    calculateDistanceAndDisplay("BoardBazar", "MallRoad", 11-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "SadarBazar", 11-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "FCChowk", 12-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "RailwayStation", 12-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "DabgariGardens", 13-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "ShubaBazar", 13-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "KhyberBazar", 14-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "MalikSaadShaheed", 14-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "Hashtnagri", 15-5.0, 25);
    calculateDistanceAndDisplay("BoardBazar", "GulbaharChowk", 16-5.0, 30);
    calculateDistanceAndDisplay("BoardBazar", "LahoreAdda", 17-5.0, 30);
    calculateDistanceAndDisplay("BoardBazar", "OldHajiCamp", 18-5.0, 30);
    calculateDistanceAndDisplay("BoardBazar", "FaisalColony", 18-5.0, 30);
    calculateDistanceAndDisplay("BoardBazar", "ChughalPura", 20-5.0, 30);
    calculateDistanceAndDisplay("BoardBazar", "SardarGari", 21-5.0, 35);
    calculateDistanceAndDisplay("BoardBazar", "ChamkaniChowk", 21.5-5.0, 35);


    
    calculateDistanceAndDisplay("IslamiaCollage", "UniversityOfPeshawar", 6.4-5.6, 20);
    calculateDistanceAndDisplay("IslamiaCollage", "UniversityTown", 7.1-5.6, 20);
    calculateDistanceAndDisplay("IslamiaCollage", "AbdraRoad", 7.8-5.6, 20);
    calculateDistanceAndDisplay("IslamiaCollage", "TehkalBala", 8.7-5.6, 20);
    calculateDistanceAndDisplay("IslamiaCollage", "TehkalPayan", 9.6-5.6, 20);
    calculateDistanceAndDisplay("IslamiaCollage", "MallRoad", 11-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "SadarBazar", 11-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "FCChowk", 12-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "RailwayStation", 12-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "DabgariGardens", 13-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "ShubaBazar", 13-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "KhyberBazar", 14-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "MalikSaadShaheed", 14-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "Hashtnagri", 15-5.6, 25);
    calculateDistanceAndDisplay("IslamiaCollage", "GulbaharChowk", 16-5.6, 30);
    calculateDistanceAndDisplay("IslamiaCollage", "LahoreAdda", 17-5.6, 30);
    calculateDistanceAndDisplay("IslamiaCollage", "OldHajiCamp", 18-5.6, 30);
    calculateDistanceAndDisplay("IslamiaCollage", "FaisalColony", 18-5.6, 30);
    calculateDistanceAndDisplay("IslamiaCollage", "ChughalPura", 20-5.6, 30);
    calculateDistanceAndDisplay("IslamiaCollage", "SardarGari", 21-5.6, 35);
    calculateDistanceAndDisplay("IslamiaCollage", "ChamkaniChowk", 21.5-5.6, 35);




    
    calculateDistanceAndDisplay("UniversityOfPeshawar", "UniversityTown", 7.1-6.4, 20);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "AbdraRoad", 7.8-6.4, 20);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "TehkalBala", 8.7-6.4, 20);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "TehkalPayan", 9.6-6.4, 20);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "MallRoad", 11-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "SadarBazar", 11-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "FCChowk", 12-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "RailwayStation", 12-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "DabgariGardens", 13-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "ShubaBazar", 13-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "KhyberBazar", 14-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "MalikSaadShaheed", 14-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "Hashtnagri", 15-6.4, 25);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "GulbaharChowk", 16-6.4, 30);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "LahoreAdda", 17-6.4, 30);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "OldHajiCamp", 18-6.4, 30);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "FaisalColony", 18-6.4, 30);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "ChughalPura", 20-6.4, 30);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "SardarGari", 21-6.4, 35);
    calculateDistanceAndDisplay("UniversityOfPeshawar", "ChamkaniChowk", 21.5-6.4, 35);

    calculateDistanceAndDisplay("UniversityTown", "AbdraRoad", 7.8-7.1, 20);
    calculateDistanceAndDisplay("UniversityTown", "TehkalBala", 8.7-7.1, 20);
    calculateDistanceAndDisplay("UniversityTown", "TehkalPayan", 9.6-7.1, 20);
    calculateDistanceAndDisplay("UniversityTown", "MallRoad", 11-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "SadarBazar", 11-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "FCChowk", 12-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "RailwayStation", 12-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "DabgariGardens", 13-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "ShubaBazar", 13-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "KhyberBazar", 14-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "MalikSaadShaheed", 14-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "Hashtnagri", 15-7.1, 25);
    calculateDistanceAndDisplay("UniversityTown", "GulbaharChowk", 16-7.1, 30);
    calculateDistanceAndDisplay("UniversityTown", "LahoreAdda", 17-7.1, 30);
    calculateDistanceAndDisplay("UniversityTown", "OldHajiCamp", 18-7.1, 30);
    calculateDistanceAndDisplay("UniversityTown", "FaisalColony", 18-7.1, 30);
    calculateDistanceAndDisplay("UniversityTown", "ChughalPura", 20-7.1, 30);
    calculateDistanceAndDisplay("UniversityTown", "SardarGari", 21-7.1, 35);
    calculateDistanceAndDisplay("UniversityTown", "ChamkaniChowk", 21.5-7.1, 35);
    

   
    calculateDistanceAndDisplay("AbdraRoad", "TehkalBala", 8.7-7.8, 20);
    calculateDistanceAndDisplay("AbdraRoad", "TehkalPayan", 9.6-7.8, 20);
    calculateDistanceAndDisplay("AbdraRoad", "MallRoad", 11-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "SadarBazar", 11-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "FCChowk", 12-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "RailwayStation", 12-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "DabgariGardens", 13-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "ShubaBazar", 13-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "KhyberBazar", 14-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "MalikSaadShaheed", 14-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "Hashtnagri", 15-7.8, 25);
    calculateDistanceAndDisplay("AbdraRoad", "GulbaharChowk", 16-7.8, 30);
    calculateDistanceAndDisplay("AbdraRoad", "LahoreAdda", 17-7.8, 30);
    calculateDistanceAndDisplay("AbdraRoad", "OldHajiCamp", 18-7.8, 30);
    calculateDistanceAndDisplay("AbdraRoad", "FaisalColony", 18-7.8, 30);
    calculateDistanceAndDisplay("AbdraRoad", "ChughalPura", 20-7.8, 30);
    calculateDistanceAndDisplay("AbdraRoad", "SardarGari", 21-7.8, 35);
    calculateDistanceAndDisplay("AbdraRoad", "ChamkaniChowk", 21.5-7.8, 35);


  
    calculateDistanceAndDisplay("TehkalBala", "TehkalPayan", 9.6-8.7, 20);
    calculateDistanceAndDisplay("TehkalBala", "MallRoad", 11-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "SadarBazar", 11-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "FCChowk", 12-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "RailwayStation", 12-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "DabgariGardens", 13-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "ShubaBazar", 13-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "KhyberBazar", 14-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "MalikSaadShaheed", 14-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "Hashtnagri", 15-8.7, 25);
    calculateDistanceAndDisplay("TehkalBala", "GulbaharChowk", 16-8.7, 30);
    calculateDistanceAndDisplay("TehkalBala", "LahoreAdda", 17-8.7, 30);
    calculateDistanceAndDisplay("TehkalBala", "OldHajiCamp", 18-8.7, 30);
    calculateDistanceAndDisplay("TehkalBala", "FaisalColony", 18-8.7, 30);
    calculateDistanceAndDisplay("TehkalBala", "ChughalPura", 20-8.7, 30);
    calculateDistanceAndDisplay("TehkalBala", "SardarGari", 21-8.7, 35);
    calculateDistanceAndDisplay("TehkalBala", "ChamkaniChowk", 21.5-8.7, 35);


   
    calculateDistanceAndDisplay("TehkalPayan", "MallRoad", 11-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "SadarBazar", 11-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "FCChowk", 12-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "RailwayStation", 12-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "DabgariGardens", 13-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "ShubaBazar", 13-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "KhyberBazar", 14-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "MalikSaadShaheed", 14-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "Hashtnagri", 15-9.6, 25);
    calculateDistanceAndDisplay("TehkalPayan", "GulbaharChowk", 16-9.6, 30);
    calculateDistanceAndDisplay("TehkalPayan", "LahoreAdda", 17-9.6, 30);
    calculateDistanceAndDisplay("TehkalPayan", "OldHajiCamp", 18-9.6, 30);
    calculateDistanceAndDisplay("TehkalPayan", "FaisalColony", 18-9.6, 30);
    calculateDistanceAndDisplay("TehkalPayan", "ChughalPura", 20-9.6, 30);
    calculateDistanceAndDisplay("TehkalPayan", "SardarGari", 21-9.6, 35);
    calculateDistanceAndDisplay("TehkalPayan", "ChamkaniChowk", 21.5-9.6, 35);


    
    calculateDistanceAndDisplay("MallRoad", "SadarBazar", 11.5-11, 25);
    calculateDistanceAndDisplay("MallRoad", "FCChowk", 12-11, 25);
    calculateDistanceAndDisplay("MallRoad", "RailwayStation", 12-11, 25);
    calculateDistanceAndDisplay("MallRoad", "DabgariGardens", 13-11, 25);
    calculateDistanceAndDisplay("MallRoad", "ShubaBazar", 13-11, 25);
    calculateDistanceAndDisplay("MallRoad", "KhyberBazar", 14-11, 25);
    calculateDistanceAndDisplay("MallRoad", "MalikSaadShaheed", 14-11, 25);
    calculateDistanceAndDisplay("MallRoad", "Hashtnagri", 15-11, 25);
    calculateDistanceAndDisplay("MallRoad", "GulbaharChowk", 16-11, 30);
    calculateDistanceAndDisplay("MallRoad", "LahoreAdda", 17-11, 30);
    calculateDistanceAndDisplay("MallRoad", "OldHajiCamp", 18-11, 30);
    calculateDistanceAndDisplay("MallRoad", "FaisalColony", 18-11, 30);
    calculateDistanceAndDisplay("MallRoad", "ChughalPura", 20-11, 30);
    calculateDistanceAndDisplay("MallRoad", "SardarGari", 21-11, 35);
    calculateDistanceAndDisplay("MallRoad", "ChamkaniChowk", 21-11, 35);


    
    calculateDistanceAndDisplay("SadarBazar", "FCChowk", 12-11.5, 25);
    calculateDistanceAndDisplay("SadarBazar", "RailwayStation", 12-11.5, 25);
    calculateDistanceAndDisplay("SadarBazar", "DabgariGardens", 13-11.5, 25);
    calculateDistanceAndDisplay("SadarBazar", "ShubaBazar", 13-11.5, 25);
    calculateDistanceAndDisplay("SadarBazar", "KhyberBazar", 14-11.5, 25);
    calculateDistanceAndDisplay("SadarBazar", "MalikSaadShaheed", 14-11.5, 25);
    calculateDistanceAndDisplay("SadarBazar", "Hashtnagri", 15-11.5, 25);
    calculateDistanceAndDisplay("SadarBazar", "GulbaharChowk", 16-11.5, 30);
    calculateDistanceAndDisplay("SadarBazar", "LahoreAdda", 17-11.5, 30);
    calculateDistanceAndDisplay("SadarBazar", "OldHajiCamp", 18-11.5, 30);
    calculateDistanceAndDisplay("SadarBazar", "FaisalColony", 18-11.5, 30);
    calculateDistanceAndDisplay("SadarBazar", "ChughalPura", 20-11.5, 30);
    calculateDistanceAndDisplay("SadarBazar", "SardarGari", 21-11.5, 35);
    calculateDistanceAndDisplay("SadarBazar", "ChamkaniChowk", 21-11.5, 35);


    
    calculateDistanceAndDisplay("FCChowk", "RailwayStation", 12.4-12, 25);
    calculateDistanceAndDisplay("FCChowk", "DabgariGardens", 13-12, 25);
    calculateDistanceAndDisplay("FCChowk", "ShubaBazar", 13-12, 25);
    calculateDistanceAndDisplay("FCChowk", "KhyberBazar", 14-12, 25);
    calculateDistanceAndDisplay("FCChowk", "MalikSaadShaheed", 14-12, 25);
    calculateDistanceAndDisplay("FCChowk", "Hashtnagri", 15-12, 25);
    calculateDistanceAndDisplay("FCChowk", "GulbaharChowk", 16-12, 30);
    calculateDistanceAndDisplay("FCChowk", "LahoreAdda", 17-12, 30);
    calculateDistanceAndDisplay("FCChowk", "OldHajiCamp", 18-12, 30);
    calculateDistanceAndDisplay("FCChowk", "FaisalColony", 18-12, 30);
    calculateDistanceAndDisplay("FCChowk", "ChughalPura", 20-12, 30);
    calculateDistanceAndDisplay("FCChowk", "SardarGari", 21-12, 35);
    calculateDistanceAndDisplay("FCChowk", "ChamkaniChowk", 21.5-12, 35);

    
    calculateDistanceAndDisplay("RailwayStation", "DabgariGardens", 13-12.4, 25);
    calculateDistanceAndDisplay("RailwayStation", "ShubaBazar", 13-12.4, 25);
    calculateDistanceAndDisplay("RailwayStation", "KhyberBazar", 14-12.4, 25);
    calculateDistanceAndDisplay("RailwayStation", "MalikSaadShaheed", 14-12.4, 25);
    calculateDistanceAndDisplay("RailwayStation", "Hashtnagri", 15-12.4, 25);
    calculateDistanceAndDisplay("RailwayStation", "GulbaharChowk", 16-12.4, 30);
    calculateDistanceAndDisplay("RailwayStation", "LahoreAdda", 17-12.4, 30);
    calculateDistanceAndDisplay("RailwayStation", "OldHajiCamp", 18-12.4, 30);
    calculateDistanceAndDisplay("RailwayStation", "FaisalColony", 18-12.4, 30);
    calculateDistanceAndDisplay("RailwayStation", "ChughalPura", 20-12.4, 30);
    calculateDistanceAndDisplay("RailwayStation", "SardarGari", 21-12.4, 35);
    calculateDistanceAndDisplay("RailwayStation", "ChamkaniChowk", 21.5-12.4, 35);


    
    calculateDistanceAndDisplay("DabgariGardens", "ShubaBazar", 13.5-13, 25);
    calculateDistanceAndDisplay("DabgariGardens", "KhyberBazar", 14-13, 25);
    calculateDistanceAndDisplay("DabgariGardens", "MalikSaadShaheed", 14-13, 25);
    calculateDistanceAndDisplay("DabgariGardens", "Hashtnagri", 15-13, 25);
    calculateDistanceAndDisplay("DabgariGardens", "GulbaharChowk", 16-13, 30);
    calculateDistanceAndDisplay("DabgariGardens", "LahoreAdda", 17-13, 30);
    calculateDistanceAndDisplay("DabgariGardens", "OldHajiCamp", 18-13, 30);
    calculateDistanceAndDisplay("DabgariGardens", "FaisalColony", 18-13, 30);
    calculateDistanceAndDisplay("DabgariGardens", "ChughalPura", 20-13, 30);
    calculateDistanceAndDisplay("DabgariGardens", "SardarGari", 21-13, 35);
    calculateDistanceAndDisplay("DabgariGardens", "ChamkaniChowk", 21.5-13, 35);


    calculateDistanceAndDisplay("ShubaBazar", "KhyberBazar", 14-13.5, 25);
    calculateDistanceAndDisplay("ShubaBazar", "MalikSaadShaheed", 14-13.5, 25);
    calculateDistanceAndDisplay("ShubaBazar", "Hashtnagri", 15-13.5, 25);
    calculateDistanceAndDisplay("ShubaBazar", "GulbaharChowk", 16-13.5, 30);
    calculateDistanceAndDisplay("ShubaBazar", "LahoreAdda", 17-13.5, 30);
    calculateDistanceAndDisplay("ShubaBazar", "OldHajiCamp", 18-13.5, 30);
    calculateDistanceAndDisplay("ShubaBazar", "FaisalColony", 18-13.5, 30);
    calculateDistanceAndDisplay("ShubaBazar", "ChughalPura", 20-13.5, 30);
    calculateDistanceAndDisplay("ShubaBazar", "SardarGari", 21-13.5, 35);
    calculateDistanceAndDisplay("ShubaBazar", "ChamkaniChowk", 21.5-13.5, 35);



   
    calculateDistanceAndDisplay("KhyberBazar", "MalikSaadShaheed", 14.5-14, 25);
    calculateDistanceAndDisplay("KhyberBazar", "Hashtnagri", 15-14, 25);
    calculateDistanceAndDisplay("KhyberBazar", "GulbaharChowk", 16-14, 30);
    calculateDistanceAndDisplay("KhyberBazar", "LahoreAdda", 17-14, 30);
    calculateDistanceAndDisplay("KhyberBazar", "OldHajiCamp", 18-14, 30);
    calculateDistanceAndDisplay("KhyberBazar", "FaisalColony", 18-14, 30);
    calculateDistanceAndDisplay("KhyberBazar", "ChughalPura", 20-14, 30);
    calculateDistanceAndDisplay("KhyberBazar", "SardarGari", 21-14, 35);
    calculateDistanceAndDisplay("KhyberBazar", "ChamkaniChowk", 21.5-14, 35);


    calculateDistanceAndDisplay("MalikSaadShaheed", "Hashtnagri", 15-14.5, 25);
    calculateDistanceAndDisplay("MalikSaadShaheed", "GulbaharChowk", 16-14.5, 30);
    calculateDistanceAndDisplay("MalikSaadShaheed", "LahoreAdda", 17-14.5, 30);
    calculateDistanceAndDisplay("MalikSaadShaheed", "OldHajiCamp", 18-14.5, 30);
    calculateDistanceAndDisplay("MalikSaadShaheed", "FaisalColony", 18-14.5, 30);
    calculateDistanceAndDisplay("MalikSaadShaheed", "ChughalPura", 20-14.5, 30);
    calculateDistanceAndDisplay("MalikSaadShaheed", "SardarGari", 21-14.5, 35);
    calculateDistanceAndDisplay("MalikSaadShaheed", "ChamkaniChowk", 21.5-14.5, 35);


    
    calculateDistanceAndDisplay("Hashtnagri", "GulbaharChowk", 16-15, 30);
    calculateDistanceAndDisplay("Hashtnagri", "LahoreAdda", 17-15, 30);
    calculateDistanceAndDisplay("Hashtnagri", "OldHajiCamp", 18-15, 30);
    calculateDistanceAndDisplay("Hashtnagri", "FaisalColony", 18-15, 30);
    calculateDistanceAndDisplay("Hashtnagri", "ChughalPura", 20-15, 30);
    calculateDistanceAndDisplay("Hashtnagri", "SardarGari", 21-15, 35);
    calculateDistanceAndDisplay("Hashtnagri", "ChamkaniChowk", 21.5-15, 35);


    
    calculateDistanceAndDisplay("GulbaharChowk", "LahoreAdda", 17-16, 30);
    calculateDistanceAndDisplay("GulbaharChowk", "OldHajiCamp", 18-16, 30);
    calculateDistanceAndDisplay("GulbaharChowk", "FaisalColony", 18-16, 30);
    calculateDistanceAndDisplay("GulbaharChowk", "ChughalPura", 20-16, 30);
    calculateDistanceAndDisplay("GulbaharChowk", "SardarGari", 21-16, 35);
    calculateDistanceAndDisplay("GulbaharChowk", "ChamkaniChowk", 21.5-16, 35);


    
    calculateDistanceAndDisplay("LahoreAdda", "OldHajiCamp", 18-17, 30);
    calculateDistanceAndDisplay("LahoreAdda", "FaisalColony", 18.6-17, 30);
    calculateDistanceAndDisplay("LahoreAdda", "ChughalPura", 20-17, 30);
    calculateDistanceAndDisplay("LahoreAdda", "SardarGari", 21-17, 35);
    calculateDistanceAndDisplay("LahoreAdda", "ChamkaniChowk", 21.5-17, 35);

    
    calculateDistanceAndDisplay("OldHajiCamp", "FaisalColony", 18.6-18, 30);
    calculateDistanceAndDisplay("OldHajiCamp", "ChughalPura", 20-18, 30);
    calculateDistanceAndDisplay("OldHajiCamp", "SardarGari", 21-18, 35);
    calculateDistanceAndDisplay("OldHajiCamp", "ChamkaniChowk", 21.5-18, 35);

    calculateDistanceAndDisplay("FaisalColony", "ChughalPura", 20-18, 30);
    calculateDistanceAndDisplay("FaisalColony", "SardarGari", 21-18, 35);
    calculateDistanceAndDisplay("FaisalColony", "ChamkaniChowk", 21.5-18, 35);

   
    calculateDistanceAndDisplay("ChughalPura", "SardarGari", 21-20, 35);
    calculateDistanceAndDisplay("ChughalPura", "ChamkaniChowk", 21.5-20, 35);

    calculateDistanceAndDisplay("SardarGari", "ChamkaniChowk", 21.5-20, 35);
    
}
