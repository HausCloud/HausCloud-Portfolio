let fake_persons = new Set(['https://i.imgur.com/SXdddOS.png', 'https://i.imgur.com/G0GMsz1.png', 'https://i.imgur.com/DnVmyep.png', 'https://i.imgur.com/rEceP8G.png', 'https://i.imgur.com/Bmh1ojx.png', 'https://i.imgur.com/OxyUx4h.png', 'https://i.imgur.com/gQCgQ0v.png', 'https://i.imgur.com/v1aJ6dm.png', 'https://i.imgur.com/45e6lEY.png', 'https://i.imgur.com/96j5NSE.png', 'https://i.imgur.com/HCMO5rs.png', 'https://i.imgur.com/KhA6TQ1.png', 'https://i.imgur.com/w7gVNZR.png', 'https://i.imgur.com/7NrYiD1.png', 'https://i.imgur.com/7LU26oJ.png', 'https://i.imgur.com/zvYsvfF.png', 'https://i.imgur.com/MDvAawQ.png', 'https://i.imgur.com/dIokPBO.png', 'https://i.imgur.com/9bB0IFL.png', 'https://i.imgur.com/H79zsfR.png', 'https://i.imgur.com/jSteyCK.png', 'https://i.imgur.com/Cy3X2sz.png', 'https://i.imgur.com/SdlX3VV.png', 'https://i.imgur.com/3ZFwJYU.png', 'https://i.imgur.com/L2tWyIv.png', 'https://i.imgur.com/NQmmIvr.png', 'https://i.imgur.com/wBrhpUV.png', 'https://i.imgur.com/U3Be6EU.png', 'https://i.imgur.com/OooCfSf.png', 'https://i.imgur.com/jB1OZiR.png', 'https://i.imgur.com/BTummWM.png', 'https://i.imgur.com/Vygqk1z.png', 'https://i.imgur.com/jEptedP.png', 'https://i.imgur.com/cg4zP0j.png']);
let arr = Array.from(fake_persons);
let initial = [arr[0], arr[1], arr[2]];

class JumboTron extends React.Component {
	constructor(props) {
		super(props)
	};

	render() {
		return (
			<div id="jumbotron">
				<div id="current-score"><p>{this.props.high_score}</p></div>
				<div id="game-status"><p>{this.props.status ? 'Game On!' : 'Game Over!'}</p></div>
				<div id="high-score"><p>{this.props.current_score}</p></div>
			</div>
		)
	};

};


class App extends React.Component {
	constructor(props) {
		super(props);

		this.random_person = this.random_person.bind(this);
		this.set_display = this.set_display.bind(this);
		this.adjust_display = this.adjust_display.bind(this);

		this.state = {
			status: false,
			high_score: 0,
			current_score: 0,
			seen: new Set(),
			display: [...initial]
		};
	};

	adjust_display (arr, new_person, stat) {
		let increment = 0;
		if (stat === true) {
			increment = 1;
		}

		if (stat === false) {
			this.setState((prevState, props) => ({display: [...initial], seen: new Set(), current_score: 0, status: false, high_score: prevState.current_score}))
		} else {
			this.setState((prevState, props) => ({display: arr, seen: prevState.seen.add(new_person), current_score: prevState.current_score += increment, status: stat}));
		}
	};

	set_display(event) {
		let game_status = true;

		if (this.state.seen.has(event.target.src)) {
			console.log('End game. You clicked on a image you already clicked on.');
			game_status = false;
		}
		if (this.state.seen.size === fake_persons.size) {
			console.log('End game. You reached the end.');
			game_status = false;
		};

		let copy = new Set(this.state.seen);
		copy.add(event.target.src);
		let new_display = new Set();
		let x = 1;

		if (copy.size > 1) {
			x = Math.floor(Math.random() * 2) + 1;
		}
		
		while (x !== 0) {
			let person = this.random_person(copy);
			copy.delete(person);
			new_display.add(person);
			x -= 1;
		};

		while (new_display.size !== 3) {
			let person = this.random_person(fake_persons);
			if (new_display.has(person) === false && person != event.target.src) {
				new_display.add(person);
			};
		}

		this.adjust_display(Array.from(new_display), event.target.src, game_status);
	};

	random_person(set) {
		if (set.size === 0) {
			return false
		};
		let items = Array.from(set);
		let person = items[Math.floor(Math.random() * items.length)];
		return person;
	}


	render() {
		return (
			<div>
				<div>
					<JumboTron status={this.state.status} high_score={this.state.high_score} current_score={this.state.current_score} />
				</div>
				<div>
					<div id="card-container">
						<img onClick={this.set_display} src={this.state.display[0]} />
					</div>
					<div id="card-container">
						<img onClick={this.set_display} src={this.state.display[1]} />
					</div>
					<div id="card-container">
						<img onClick={this.set_display} src={this.state.display[2]} />
					</div>
				</div>
			</div>
		)
	};
};


ReactDOM.render(<App />, document.getElementById('root'));
