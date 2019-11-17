$(document).ready(function() {

    $('#auth-in').click(function() {

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithRedirect(provider);

        firebase.auth().getRedirectResult().then((res) => {
            if (res.credential) {
                var token = res.credential.accessToken;
            }
            var user = res.user;

            $.ajax({
                type: 'GET',
                url: '/form',
                data: user,
                success: function(data) {
                    console.log('passed data');
                }
            });

        }).catch((err) => {
            console.log(err.message);
        });

        return false;
    });

    $('#auth-out').click(function() {
        firebase.auth().signOut().then(() => {
            console.log('sign out success');
        }).catch((err) => {
            console.log(err);
        });
    });
});