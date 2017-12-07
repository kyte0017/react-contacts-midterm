export function capitalizeFirst(word) {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
}

export function capitalizeWords(phrase) {
    return phrase.split(" ").map(function (i) {
        return capitalizeFirst(i);
    }).join(" ");
}

export function calculateAge(dob) {
    var birthday = new Date(dob);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

