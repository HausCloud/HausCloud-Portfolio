function jinja_data() {
    return userinfo;
}

console.log(userinfo);

// $.ajax({
//     url: "http://localhost:5000/api/gratitude_journal/all",
//     data: JSON.stringify({"user_id": userinfo.sub.replace('auth0|', '')}),
//     type: "POST",
//     dataType: 'json',
//     contentType: "application/json",
//     success: function(data, status, xhr) { console.log(data); },
//     error: function (xhr, ajaxOptions, thrownError) { alert("ERROR:" + xhr.responseText+" - "+thrownError); }
//  });

//  $.ajax({
//     url: "http://localhost:5000/api/gratitude_journal/insert",
//     data: JSON.stringify({"user_id": userinfo.sub.replace('auth0|', ''), "text": ["#blessed", "To have a home."], "mood": "meh", "date": new Date().toLocaleString()}),
//     type: "POST",
//     dataType: 'json',
//     contentType: "application/json",
//     success: function(data, status, xhr) { console.log(data); },
//     error: function (xhr, ajaxOptions, thrownError) { alert("ERROR:" + xhr.responseText+" - "+thrownError); }
//  });


// class Entries extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             entries_loaded: false,
//           };
//     };
// };

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     };

//     componentDidMount () {

//     };

// }