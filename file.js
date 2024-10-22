var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  
  }
  else {
      up()
      setTimeout(darrk , 300)
      setTimeout(pass , 300)
  }
  prevScrollpos = currentScrollPos;
}
function up() {
  heade = document.getElementById("header")
  cont = document.getElementById("container")
  ft = document.getElementById("b-time")
  dar = document.getElementById("dar")
  tools = document.getElementById("tools")
  tools
  heade.style.marginTop = "-50%"
  heade.style.opacity = "0"
  ft.style.fontSize = "300px"
  cont.style.boxSizing = "border-box"
  dar.style.opacity = "0"
  tools.style.opacity = "0"
  tools.style.bottom = "-50%"
  dar.style.marginTop = "-50%"
  cont.style.position = "absolute"
  function upp() {
      heade.style.display = "none"
      tools.style.display = "none"
      dar.style.display = "none"
      cont.style.height = "100%"
      
  }
  setTimeout(upp , 200)
}
function darrk() {
    dark = document.getElementById("dark")
    dark.style.display = "block"
    function darrkk() {
        dark.style.background = "rgb(0,0,0,0.5)"
        dark.style.backdropFilter = "blur(5px)"
    }
    setTimeout(darrkk , 50)
}
function darrk1() {
    dark = document.getElementById("dark")
    dark.style.background = "transparent"
        dark.style.backdropFilter = "blur(0px)"
    function darrkk1() {
        dark.style.display = "none"
    }
    setTimeout(darrkk1 , 300)
}
function pass() {
    pasd = document.getElementById("password-div")
    lock = document.getElementById("lock")
    b12 = document.getElementById("a1")
        b22 = document.getElementById("a2")
            b32 = document.getElementById("a3")
                b42 = document.getElementById("a4")
                    b52 = document.getElementById("a5")
                        b62 = document.getElementById("a6")
        b72 = document.getElementById("a7")
            b82 = document.getElementById("a8")
                b92 = document.getElementById("a9")
                    b02 = document.getElementById("a0")
                        go2 = document.getElementById("go")
                        
    lock.style.display = "block"
    function passs() {
        lock.style.opacity = "1"
        pasd.style.bottom = "8%"
        pasd.style.width = "100%"
        pasd.style.marginLeft = "0"
       

    }
    function buto() {
            b12.style.background = "rgb(255,255,255,0.3)"
        b22.style.background = "rgb(255,255,255,0.3)"
        b32.style.background = "rgb(255,255,255,0.3)"
b42.style.background = "rgb(255,255,255,0.3)"
b52.style.background = "rgb(255,255,255,0.3)"
b62.style.background = "rgb(255,255,255,0.3)"
b72.style.background = "rgb(255,255,255,0.3)"
b82.style.background = "rgb(255,255,255,0.3)"
b92.style.background = "rgb(255,255,255,0.3)"
b02.style.background = "rgb(255,255,255,0.3)"
go2.style.background = "rgb(255,255,255,0.3)"

       }
    setTimeout(passs , 50)
    setTimeout(buto , 200)
}
var password = "2000"
function b1() {
    document.getElementById("passinput").value += "1"
}
function b2() {
    document.getElementById("passinput").value += "2"
}function b3() {
    document.getElementById("passinput").value += "3"
}function b4() {
    document.getElementById("passinput").value += "4"
}function b5() {
    document.getElementById("passinput").value += "5"
    vib()
}function b6() {
    document.getElementById("passinput").value += "6"
}function b7() {
    document.getElementById("passinput").value += "7"
}function b8() {
    document.getElementById("passinput").value += "8"
}function b9() {
    document.getElementById("passinput").value += "9"
}
function b0() {
    document.getElementById("passinput").value += "0"
}
function remo() {
         qa = document.getElementById("passinput")
   qb = qa.value
   qc = qb.length
   qa.value = qb.substring(0,qc-1)
}
function oper() {
   pinf = document.getElementById("pinfo")
   passdd = document.getElementById("passinput")
   event.preventDefault()
   if (passdd.value != "2000") {
       flicker()
       passdd.value = ""
   }
   else if (passdd.value === "2000") {
       darrk1()
       cle()
       setTimeout(homee , 5)
   }
}
function flicker() {
    pinf = document.getElementById("pinfo")
    pinf.innerHTML = "Wrong password try again"
    pinf.style.color = "orangered"
    function flic() {
        pinf.style.color = "white"
        pinf.innerHTML = "Your password contains at least four (4) digits"
    }
    setTimeout(flic , 700)
    
}
function cle() {
    pasd = document.getElementById("password-div")
    lock = document.getElementById("lock")
    b12 = document.getElementById("a1")
        b22 = document.getElementById("a2")
            b32 = document.getElementById("a3")
                b42 = document.getElementById("a4")
                    b52 = document.getElementById("a5")
                        b62 = document.getElementById("a6")
        b72 = document.getElementById("a7")
            b82 = document.getElementById("a8")
                b92 = document.getElementById("a9")
                    b02 = document.getElementById("a0")
                        go2 = document.getElementById("go")
        pasd.style.transition = "0.5s , 0.4s width , 0.4s margin-left , 0.2s opacity"
        pasd.style.opacity = "0"
        pasd.style.width = "500%"
        pasd.style.marginLeft = "-200%"
        lock.style.opacity = "0"
        function clai() {
            lock.style.display = "none"
        }
        setTimeout(clai , 500)
}
function vib() {
    navigator.vibrate(50)
}
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
  hey = `${battery.charging}`
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    
    l =`${battery.level * 100}`
   ler = document.getElementById("lev")
   document.getElementById("batlev").innerHTML = Math.floor(l) + "%"
   ler.style.width = `${battery.level * 100}%`
    levv = `${battery.level * 100}`
    if (levv >= 16 && levv <= 60) {
        ler.style.background = "#FCBA45"
    }
    else if (levv <= 15) {
        ler.style.background = "#ED5D16"
    }
    else if (levv >= 61) {
          ler.style.background = "#7FDD8F"
    }
    bord = 0.04* levv + "px"
    ler.style.borderTopLeftRadius = bord
    ler.style.borderBottomLeftRadius = bord
    ler.style.borderTopRightRadius = "4px"
    ler.style.borderBottomRightRadius = "4px"
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    
  }
});
function homee() {
    htime = document.getElementById("h-time")
    gser = document.getElementById("gsearch")
    dock = document.getElementById("dock")
    apps = document.getElementById("apps")
    htime.style.display = "flex"
    dock.style.display = "flex"
    apps.style.display = "flex"
    gser.style.display = "flex"
    function homeee() {
        htime.style.opacity = "1"
        htime.style.marginLeft = "0"
        htime.style.width = "100%"
        gser.style.opacity = "1"
        gser.style.marginLeft = "8%"
        gser.style.width = "80%"
        htime.style.height = "200px"
        htime.style.marginTop = "0"
        gser.style.background = "rgb(255,255,255,0.7)"
        dock.style.width = "95%"
        dock.style.marginLeft = "1.5px"
        dock.style.background = "rgb(255,255,255,0.3)"
        apps.style.marginLeft = "0"
        apps.style.width = "80%"
    }
    setTimeout(homeee , 500)
}
function lightt() {
    if (hey == "false") {
       bol=  document.getElementById("bolt")
       bol.className = "fa"
       
    }
    else {
        bol.className = "fa fa-bolt"
        navigator.vibrate(500)
        
    }
    
}
function fr() {
    setInterval(lightt , 100)
}
min = 0
hou = ""
mm = ""
function datee() { 



    var d = new Date()
   if (d.getMinutes() == 1) {
       min = "0" + 1
   }
   else  if (d.getMinutes() == 2) {
       min = "0" + 2
   }
else  if (d.getMinutes() == 3) {
       min = "0" + 3
   }
   
   else  if (d.getMinutes() == 4) {
       min = "0" + 4
   }
   else  if (d.getMinutes() == 5) {
       min = "0" + 5
   }
   else  if (d.getMinutes() == 6) {
       min = "0" + 6
   }
   else  if (d.getMinutes() == 7) {
       min = "0" + 7
   }
   else  if (d.getMinutes() == 8) {
       min = "0" + 8
   }
   else  if (d.getMinutes() == 9) {
       min = "0" + 9
   }
   else  if (d.getMinutes() == 0) {
       min = "00"
   }
   else {
       min = d.getMinutes()
   }
   
   time = d.getHours() + ":" + min
 document.getElementById("b-time").innerHTML = time
  
if (d.getHours() > 12) {
   mm = "PM"
   hou = d.getHours() - 12
   
}
else {
    mm = "AM"
    hou = d.getHours()
}
document.getElementById("hometime").innerHTML = hou + " : " + min + " " + mm
mont = d.getMonth() + 1
monn = ["lol","January","February","March","April","May","June","July","August", "September","October","November","December"]
montt = monn[mont]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

days.forEach((day,index)=>{

// Check if the index of day value is equal to the returned value of getDay()

if(index == new Date().getDay()){
date = day + " , "+ mont  + " " + montt + ", " + "2024"
document.getElementById("dar").innerHTML = date
document.getElementById("mon").innerHTML = date
}

}

)
}
setInterval(datee , 100)
fr()
function loade() {
    lorr = document.getElementById("loader")
    lorr.style.opacity = "0"
    lorr.style.backdropFilter = "blur(0px)"
    function lorg() {
        lorr.style.display = "none"
    }
    setTimeout(lorg , 500)
}