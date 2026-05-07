const url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt";

document.querySelector("#showBtn").addEventListener("click", function(){
    loadData();
})

async function loadData() {
    const response = await axios.get(url);
    console.log(response);
    document.querySelector("#showContent").innerText = response.data;
}
