function Gym_Name() {
    let name;
    document.getElementById("btn-gym-name").onclick = function () {
        name = document.getElementById("input-gym-name").value;
        document.getElementById("gym-name").innerHTML = "Welcome to " + name + "'s GYM!";
    }
}