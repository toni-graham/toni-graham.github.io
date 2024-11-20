document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var feedback = document.getElementById('feedback');

    // Correct password format: Pet name (Whiskers or Mittens) + last two digits of birth year (92) + "!"
    var correctPasswordWhiskers = "whiskers92!";
    var correctPasswordMittens = "mittens92!";

    if (password === correctPasswordWhiskers || password === correctPasswordMittens) {
        feedback.textContent = "Success! The flag is: FLAG{Alex_Johnson_Pet_Flag}";
        feedback.style.color = 'green';
    } else if (password.length > 0) {
        feedback.textContent = "Incorrect password. Hint: The password relates to Alex's favorite pet and a key moment in his life. Take a guess!";
        feedback.style.color = 'red';
    } else {
        feedback.textContent = "Please enter a password.";
        feedback.style.color = 'red';
    }
});
