module.exports = {
    test: () => {
        const notification = new Notification("New Message Incoming", {
            body: "HI There. How are you doing?"
        })
        notification.onclick = () => {
            window.location.href = "https://google.com";
        };
        console.log(Notification.permission);
        if (Notification.permission == "granted") {
            alert("we have permission");
        } else if (Notification.permission != "denied") {
            Notification.requestPermission().then(permission => {
                console.log(permission);
            });
        }
    }
}