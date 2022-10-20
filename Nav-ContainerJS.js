function OpenNav(){
    document.getElementById("Main_Page").style.filter="blur(25px)"
    document.getElementById("Nav-Container").style.display="flex"
    document.getElementById("Body").style.overflow="hidden"
    
}

function CloseNav(){
    document.getElementById("Nav-Container").style.display="none"
    document.getElementById("Main_Page").style.filter="blur(0px)"
    document.getElementById("Body").style.overflow="auto"
}