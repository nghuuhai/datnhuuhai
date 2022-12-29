// quản lý người dùng
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

logout.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        alter('đăng xuất thành công');
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
});