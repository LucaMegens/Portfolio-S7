function OpenNav(){
    document.getElementById("Main_Page").style.filter="blur(25px)"
    document.getElementById("Nav-Container").style.display="flex"
    document.getElementById("Body").style.overflow="hidden"
    document.getElementById("Nav-Container-Hide").style.display="none"
}

function CloseNav(){
    document.getElementById("Main_Page").style.filter="blur(0px)"
    document.getElementById("Nav-Container").style.display="none" 
    document.getElementById("Body").style.overflow="auto"
    document.getElementById("Nav-Container-Hide").style.display="flex"
}