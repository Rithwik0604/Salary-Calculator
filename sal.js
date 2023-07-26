function cal(){
    let pay = document.getElementById("inp").value;
    let hours = document.getElementById("inp2").value;
    let expenses = document.getElementById("inp3").value;
    let weekpay = hours*pay;
    let  montpay = weekpay*4;

    document.getElementById("ntweekpay").innerHTML = weekpay;
    // document.getElementById("ntweekpay").style.border="2px solid white";
    document.getElementById("ntweekpay").style.borderRadius = "5px";
    document.getElementById("ntweekpay").style.padding="5px";
    document.getElementById("ntweekpay").style.backgroundColor="white";

    document.getElementById("ntmonthpay").innerHTML = montpay;
    document.getElementById("ntmonthpay").style.border="2px solid white";
    document.getElementById("ntmonthpay").style.borderRadius = "5px";
    document.getElementById("ntmonthpay").style.padding="5px";
    document.getElementById("ntmonthpay").style.backgroundColor="white";

    document.getElementById("ntspend").innerHTML = montpay/30;
    document.getElementById("ntspend").style.border="2px solid white";
    document.getElementById("ntspend").style.borderRadius = "5px";
    document.getElementById("ntspend").style.padding="5px";
    document.getElementById("ntspend").style.backgroundColor="white";

    document.getElementById("ntrmonth").innerHTML = montpay-expenses;
    document.getElementById("ntrmonth").style.border="2px solid white";
    document.getElementById("ntrmonth").style.borderRadius = "5px";
    document.getElementById("ntrmonth").style.padding="5px";
    document.getElementById("ntrmonth").style.backgroundColor="white";

    document.getElementById("ntrspend").innerHTML = (montpay-expenses)/30;
    document.getElementById("ntrspend").style.border="2px solid white";
    document.getElementById("ntrspend").style.borderRadius = "5px";
    document.getElementById("ntrspend").style.padding="5px";
    document.getElementById("ntrspend").style.backgroundColor="white";



    if(weekpay<242){
        window.alert("No tax because its less than 242")
        document.getElementById("tweekpay").innerHTML = "-";


        document.getElementById("tmonthpay").innerHTML = "-";


        document.getElementById("tspend").innerHTML = "-";


        document.getElementById("trmonth").innerHTML = "-";


        document.getElementById("trspend").innerHTML = "-";

    }
    else if(weekpay>242){
        if(weekpay<967){
            let tax = 12;
            let taxcut = (tax/100)*weekpay;
            tweekpay = weekpay-taxcut;
            tmontpay=tweekpay*4;

            document.getElementById("tweekpay").innerHTML = tweekpay;
            document.getElementById("tweekpay").style.border="2px solid white";
            document.getElementById("tweekpay").style.borderRadius = "5px";
            document.getElementById("tweekpay").style.padding="5px";
            document.getElementById("tweekpay").style.backgroundColor="white";

            document.getElementById("tmonthpay").innerHTML = tmontpay;
            document.getElementById("tmonthpay").style.border="2px solid white";
            document.getElementById("tmonthpay").style.borderRadius = "5px";
            document.getElementById("tmonthpay").style.padding="5px";
            document.getElementById("tmonthpay").style.backgroundColor="white";

            document.getElementById("tspend").innerHTML = tmontpay/30;
            document.getElementById("tspend").style.border="2px solid white";
            document.getElementById("tspend").style.borderRadius = "5px";
            document.getElementById("tspend").style.padding="5px";
            document.getElementById("tspend").style.backgroundColor="white";

            document.getElementById("trmonth").innerHTML = tmontpay-expenses;
            document.getElementById("trmonth").style.border="2px solid white";
            document.getElementById("trmonth").style.borderRadius = "5px";
            document.getElementById("trmonth").style.padding="5px";
            document.getElementById("trmonth").style.backgroundColor="white";

            document.getElementById("trspend").innerHTML = (tmontpay-expenses)/30;
            document.getElementById("trspend").style.border="2px solid white";
            document.getElementById("trspend").style.borderRadius = "5px";
            document.getElementById("trspend").style.padding="5px";
            document.getElementById("trspend").style.backgroundColor="white";

        }
    
        else if(weekpay>967){
            let tax = 2;
            let taxcut = (tax/100)*weekpay;
            tweekpay = weekpay-taxcut;
            tmontpay=tweekpay*4;

            document.getElementById("tweekpay").innerHTML = tweekpay;
            document.getElementById("tweekpay").style.border="2px solid white";
            document.getElementById("tweekpay").style.borderRadius = "5px";
            document.getElementById("tweekpay").style.padding="5px";
            document.getElementById("tweekpay").style.backgroundColor="white";

            document.getElementById("tmonthpay").innerHTML = tmontpay;
            document.getElementById("tmonthpay").style.border="2px solid white";
            document.getElementById("tmonthpay").style.borderRadius = "5px";
            document.getElementById("tmonthpay").style.padding="5px";
            document.getElementById("tmonthpay").style.backgroundColor="white";

            document.getElementById("tspend").innerHTML = tmontpay/30;
            document.getElementById("tspend").style.border="2px solid white";
            document.getElementById("tspend").style.borderRadius = "5px";
            document.getElementById("tspend").style.padding="5px";
            document.getElementById("tspend").style.backgroundColor="white";

            document.getElementById("trmonth").innerHTML = tmontpay-expenses;
            document.getElementById("trmonth").style.border="2px solid white";
            document.getElementById("trmonth").style.borderRadius = "5px";
            document.getElementById("trmonth").style.padding="5px";
            document.getElementById("trmonth").style.backgroundColor="white";

            document.getElementById("trspend").innerHTML = (tmontpay-expenses)/30;
            document.getElementById("trspend").style.border="2px solid white";
            document.getElementById("trspend").style.borderRadius = "5px";
            document.getElementById("trspend").style.padding="5px";
            document.getElementById("trspend").style.backgroundColor="white";
        }

    }    
}

document.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
        document.getElementById("butt").click();
    }
})