class Scroll3D {
	constructor() {
	this.zSpacing = -1000;
	this.lastPos = this.zSpacing / 5;
	this.frames = Array.from(document.getElementsByClassName('frame'));
	this.zVals = [];	
	this.setupScrollEvent();
	this.setupAudio();
	window.scrollTo(0, 1);
	}

	setupScrollEvent() {
	window.onscroll = () => {
		const top = document.documentElement.scrollTop;
		const delta = this.lastPos - top;
		this.lastPos = top;

		this.frames.forEach((frame, i) => {
		  this.zVals.push((i * this.zSpacing) + this.zSpacing);
		  this.zVals[i] += delta * -5.5;
		const transform = `translateZ(${this.zVals[i]}px)`;
		const opacity = this.zVals[i] < Math.abs(this.zSpacing) / 1.8 ? 1 : 0;
		frame.style.transform = transform;
		frame.style.opacity = opacity;
		});
	};
	}  
	setupAudio() {
	const soundButton = document.querySelector('.soundbutton');
	const audio = document.querySelector('.audio');

	soundButton.addEventListener('click', () => {
		soundButton.classList.toggle('paused');
		audio.paused ? audio.play() : audio.pause();
	});

	window.onfocus = () => {
		soundButton.classList.contains('paused') ? audio.pause() : audio.play();
	};

	window.onblur = () => {
		audio.pause();
	};
	}
}

const scroll3D = new Scroll3D();
