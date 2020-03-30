const list = [
	{
		"quote": "Life is not a game of luck. If you wanna win, work hard.",
		"character": "Sora"
	}, {
		"quote": "I'm not stupid. I'm just too lazy to show how smart I am.",
		"character": "Oreki Houtarou"
	}, {
		"quote": "Fake people have an image to maintain. Real people just don't care.",
		"character": "Hachiman Hikigaya"
	}, {
		"quote": "Hyaaaaaaaaaaaaaaaa hnaaaaaaaaaaaaaaaa haaaaaaaaaaaaaaaaaa!",
		"character": "Son Goku"
	}, {
		"quote": "No single thing is perfect by itself. That’s why we’re born to attract other things to make up for what we lack. I think we start walking in the right direction only after we start getting our counterparts besides us.",
		"character": "Itachi Uchiha"
	}, {
		"quote": "I have two rules: First, I'm never wrong. Second, if I'm wrong .. back to the first rule.",
		"character": "L Lawliet"
	}, {
		"quote": "You came into my life as a story, you left as a legend.",
		"character": "Reborn"
	}, {
		"quote": "People who don't work hard don't have the right to be envious of the people with talent. People fail because they don't understand the hard work necessary to be successful.",
		"character": "Yukino Yukinoshita"
	}, {
		"quote": "Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!",
		"character": "Shintaro Midorima"
	}, {
		"quote": "If you live life by other people's standards, then your life is no longer yours.",
		"character": "Eddie Lee"
	}, {
		"quote": "I am who I am now because of everything that's happened. If I try to deny my past, I'm denying the person I've become. I don't want to do that.",
		"character": "Iori Nagase"
	}, {
		"quote": "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.",
		"character": "Mewtwo"
	}, {
		"quote": "It's difficult to change the world on your own, but twisting it a little might not be all that hard.",
		"character": "Shinobu Oshino"
	}, {
		"quote": "The ticket to the future is always open.",
		"character": "Vash"
	}, {
		"quote": "If you wanna climb a mountain, you obviously aim for the top, but you gotta enjoy the scenery too.",
		"character": "Teppei Kiyoshi"
	}, {
		"quote": "Strength begins in understanding your own weakness.",
		"character": "Oz Vessalius"
	}, {
		"quote": "Opportunities wait for no one! If you let an opportunity slip through your fingers with an excuse like, “I wasn't prepared.” You'll never get another opportunity like that again!",
		"character": "Sorata Kanda"
	}, {
		"quote": "When you're ten, they call you a prodigy. When you're fifteen, they call you a genius. Once you hit twenty, you're just an ordinary person.",
		"character": "Haruka Nanase"
	}, {
		"quote": "Did you know every time you sigh, a little bit of happiness escapes?",
		"character": "Senjougahara Hitagi"
	}, {
		"quote": "Once you expect something in return, your good deed is no longer just a good deed.",
		"character": "Kayo Senju"
	}, {
		"quote": "The difference between the novice and the master is that the master has failed more times than the novice has tried.",
		"character": "Korosensei"
	}, {
		"quote": "Water is the greatest enemy of games.",
		"character": "Keima Katsuragi"
	}, {
		"quote": "Nothing in this world is free. Be thankful to those who speak strict word to you. Watch out for a person who talks too nicely.",
		"character": "Yusei Fudo"
	},
	{
		"quote": "A dropout will beat a genius through hard work.",
		"character": "Rock Lee"
	},
	{
		"quote": "If you can’t do something, then don’t. Focus on what you can do.",
		"character": "Shiroe"
	},
	{
		"quote": "Equivalent exchange! I'll give you half of my life to you, if you give half of yours to me!",
		"character": "Edward Elric"
	},
	{
		"quote": "A different species, a different set of values, a world completely unlike your own. There is a feeling you can only get when you meet the unknown and open your mind.",
		"character": "Yoshiyuki Nakajima"
	}, {
		"quote": "Knowing you’re different is only the beginning. If you accept these differences, you’ll be able to get past them and grow even closer.",
		"character": "Miss Kobayashi"
	}, {
		"quote": "I must study lots of things or I won’t become a great person.",
		"character": "Kotomi Ichinose"
	}, {
		"quote": "Happiness is like glass. It may be all around you, yet be invisible. But if you change your angle of viewing a little, then it will reflect light more beautifully than any other object around you.",
		"character": "Lelouch Lamperouge"
	}, {
		"quote": "There's a difference between being lucky and deserving. One's an accident, the other, a reward. Never get the two confused.",
		"character": "All Might"
	}, {
		"quote": "There are days when nothing goes right. There are days when you stumble and fall. There are days when you just want to cry. To cry a lot. To sleep a lot. Or even eat a lot. It’s alright, as long as you pick yourself up again.",
		"character": "Yuki Takeya"
	}, {
		"quote": "You can’t sit around envying other people’s worlds. You have to go out and change your own.",
		"character": "Shinichi Chiaki"
	}, {
		"quote": "I don’t think I’ll learn anything if I don’t try to do something about it on my own.",
		"character": "Chizuru Hishiro"
	}, {
		"quote": "As a human, what kind of achievements will you leave behind?”",
		"character": "Izaya Orihara"
	}, {
		"quote": "There are days when nothing goes right. There are days when you stumble and fall. There are days when you just want to cry. To cry a lot. To sleep a lot. Or even eat a lot. It’s alright, as long as you pick yourself up again.",
		"character": "Yuki Takeya"
	}, {
		"quote": "There are days when nothing goes right. There are days when you stumble and fall. There are days when you just want to cry. To cry a lot. To sleep a lot. Or even eat a lot. It’s alright, as long as you pick yourself up again.",
		"character": "Yuki Takeya"
	},
];

class SuperUltraAtomicQuoteGenerator3000 extends React.Component {
	constructor(props) {
		super(props);
		this.refQ = React.createRef();
		this.refC = React.createRef();
		let i = Math.floor(Math.random() * list.length);
		this.state = {
			quote: list[i].quote,
			character: list[i].character,
			visible: true
		};

		this.changeQuote = this.changeQuote.bind(this);
		this.randomQuote = this.randomQuote.bind(this);
		this.loopQuote = this.loopQuote.bind(this);
	};

	componentDidMount() {
		this.timer = setInterval(() => this.changeQuote(), 6000);
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	};

	componentDidUpdate() {
		gsap.fromTo(this.refQ.current, { opacity: 0, duration: 2 }, { opacity: 1, duration: 2 });
		gsap.fromTo(this.refC.current, { opacity: 0, duration: 2 }, { opacity: 1, duration: 2 });
	};

	changeQuote() {
		this.setState(prevState => {
			let x = Math.floor(Math.random() * list.length);
			// Prevent loading the same quote
			if (list[x].quote === prevState.quote) {
				let i = 0;

				while (i < list.length) {
					if (i !== x) {
						break;
					};
					i++;
				};
				return { quote: list[i].quote, character: list[i].character };
			} else {
				return { quote: list[x].quote, character: list[x].character };
			};
		});
	};

	loopQuote(event) {
		gsap.to(event.target, { scale: 3, duration: 1 });
		gsap.to(event.target, { scale: 1, duration: 1 });
		if (this.timer === undefined) {
			this.timer = setInterval(() => this.changeQuote(), 6000);
		}
	};

	randomQuote(event) {
		gsap.to(event.target, { scale: 3, duration: 1 });
		gsap.to(event.target, { scale: 1, duration: 1 });
		clearInterval(this.timer);
		this.timer = undefined;
		this.changeQuote();
	};


	render() {
		return (
			<div id="quote-gen">
				<div>
					<h1 ref={this.refQ}>{this.state.quote}</h1>
					<p ref={this.refC}>- {this.state.character}</p>
				</div>
				<div>
					<button id='fruitloops' onClick={this.loopQuote}>{this.timer === undefined ? 'Loop' : 'Looping'}</button>
					<button id='rando' onClick={this.randomQuote}>Random</button>
				</div>
			</div>
		)
	};
};

class App extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div>
				<SuperUltraAtomicQuoteGenerator3000 />
			</div>
		)
	};
};

ReactDOM.render(<App />, document.getElementById('root'));
