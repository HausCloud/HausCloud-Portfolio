let fake_persons = ['https://i.imgur.com/SXdddOS.png', 'https://i.imgur.com/G0GMsz1.png', 'https://i.imgur.com/DnVmyep.png', 'https://i.imgur.com/rEceP8G.png', 'https://i.imgur.com/Bmh1ojx.png', 'https://i.imgur.com/OxyUx4h.png', 'https://i.imgur.com/gQCgQ0v.png', 'https://i.imgur.com/v1aJ6dm.png', 'https://i.imgur.com/45e6lEY.png', 'https://i.imgur.com/96j5NSE.png', 'https://i.imgur.com/HCMO5rs.png', 'https://i.imgur.com/KhA6TQ1.png', 'https://i.imgur.com/w7gVNZR.png', 'https://i.imgur.com/7NrYiD1.png', 'https://i.imgur.com/7LU26oJ.png', 'https://i.imgur.com/zvYsvfF.png', 'https://i.imgur.com/MDvAawQ.png', 'https://i.imgur.com/dIokPBO.png', 'https://i.imgur.com/9bB0IFL.png', 'https://i.imgur.com/H79zsfR.png', 'https://i.imgur.com/jSteyCK.png', 'https://i.imgur.com/Cy3X2sz.png', 'https://i.imgur.com/SdlX3VV.png', 'https://i.imgur.com/3ZFwJYU.png', 'https://i.imgur.com/L2tWyIv.png', 'https://i.imgur.com/NQmmIvr.png', 'https://i.imgur.com/wBrhpUV.png', 'https://i.imgur.com/U3Be6EU.png', 'https://i.imgur.com/OooCfSf.png', 'https://i.imgur.com/jB1OZiR.png', 'https://i.imgur.com/BTummWM.png', 'https://i.imgur.com/Vygqk1z.png', 'https://i.imgur.com/jEptedP.png', 'https://i.imgur.com/cg4zP0j.png']

// function get_request () {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
// 	if (this.readyState === 4 && this.status === 200) {
// 	    var response = this.response;
// 	}
//     };
//     xhr.open('GET', 'http://localhost:5000/api/image_hash', true);
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.setRequestHeader("Content-Type", "application/json;");
//     xhr.send();
// };

// get_request();

class JumboTron extends React.Component {
    constructor(props) {
	super(props)
    };

    render () {
	return (
		<div id="jumbotron">
		</div>
	)
    };
    
};

class Card extends React.Component {
    constructor(props) {
	super(props)
    };

    render() {
	return (
		<div id="card-container">
		<img src={this.props.imageurl}/>
		</div>
	)
    };
};

class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    high_score: 0,
	    current_score: 0
	};
    };

    render () {
	return (
		<div>
		<div>
		<JumboTron />
		</div>
		<div>
		<Card imageurl={fake_persons[0]} />
		<Card imageurl={fake_persons[1]} />
		<Card imageurl={fake_persons[2]} />
		</div>
		</div>
	)
    };
};


ReactDOM.render(<App />, document.getElementById('root'));
