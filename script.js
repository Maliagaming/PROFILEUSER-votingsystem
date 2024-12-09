document.getElementById("saveProfile").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const schoolId = document.getElementById("schoolId").value;
    const university = document.getElementById("university").value;
    const email = document.getElementById("email").value;
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const emailNotif = document.getElementById("emailNotif").checked;
    const smsNotif = document.getElementById("smsNotif").checked;

    if (newPassword !== confirmPassword) {
        alert("New password and confirmation do not match!");
        return;
    }

    const profileData = {
        name,
        schoolId,
        university,
        email,
        emailNotif,
        smsNotif,
    };

    console.log("Profile Data Saved:", profileData);
    alert("Profile saved successfully!");
});
