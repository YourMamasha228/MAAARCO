let email = "user@example.com";
let result = email.includes("@") && email.includes("ghf<") ? "Email valid" : "Invalid";
console.log(result); 