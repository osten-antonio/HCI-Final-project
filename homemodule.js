function checkLoggedInProfile(){
    const loggedInUserId=localStorage.getItem('loggedInUId');
    if(loggedInUserId){
        window.location.href='profile.html'
    }
    else{
        window.location.href='auth.html';
    }
  }
  
  
function checkLoggedInDashboard(){
const loggedInUserId=localStorage.getItem('loggedInUId');
if(loggedInUserId){
    window.location.href='dashboard.html'
}
else{
    window.location.href='auth.html';
}
}

document.getElementById('pfp').addEventListener('click', function(event) {
event.preventDefault(); 
checkLoggedInProfile();
});

document.getElementById('dashboardbutton').addEventListener('click', function(event) {
event.preventDefault();  
checkLoggedInDashboard();
});