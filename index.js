const banan = document.getElementById("input")
const äpple = document.getElementById("output")

banan.addEventListener("keyup", function (event){
     const text = event.target.value
     console.log(event.key)
     if (event.key === "Enter")  {
         output.innerText = text
         input.value = ""
     }

 }
)