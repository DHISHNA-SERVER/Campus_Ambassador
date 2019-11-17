const db = firebase.firestore();
const docRef = db.collections('ca');

const referralGenerator = function(string) {
    // ...
};

$(document).ready(function() {

    $('#form').on('submit', function() {
    
        var x = $('#form').serializeArray();

        ret = {};

        x.forEach(obj => {
            ret[obj['name']] = obj['value'];
        });

        var email = ret['email'];
        // TODO : generate referral code

        var ref = referralGenerator(email);

        // doing this in front end. Can be send to back and processed
        ca.add(ret).then(function() {
            console.log('Written to db');

            // redirect to profile view
        }).catch(function(err) {
            console.log(err);
        });

        return false;
    });
});