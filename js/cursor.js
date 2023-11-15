
class FollowTheCursor {
	constructor({ $el }) {
		this.$el = $el;
		this.$links = document.querySelectorAll('[data-cursor]')
		
		this.area = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.bindEvents()
	}
	
	bindEvents() {
		/* all events go here */
		
		document.addEventListener('mousemove', (evt) => this._onMouseMove(evt));
		
		this.$links.forEach( $link => {
			const classAttr = $link.dataset.cursor;
			$link.addEventListener('mouseenter', (evt) => this._onMouseOver(evt, true, classAttr));
			$link.addEventListener('mouseleave', (evt) => this._onMouseOver(evt, false, classAttr));
		})
	}
	
	/*
	* _Events
	* _ === quick visual reminder: is an event
	*/
	
	_onMouseMove({ clientX: x, clientY: y }) {
		/* 
			{ clientX, clientY } get directly only what I need from my event and rename the variable
		 === const {clientX: x, clientY: y} = evt
		 === const x = evt.clientX 
	 */
		
		/* left === 0 and right === the area width */
		// console.log('x', x)
		/* top === 0 and bottom === the area height */
		// console.log('y', y)
		/*  the center is the half of the area */
		this.area.centerX = this.area.w / 2 - x
		this.area.centerY = this.area.h / 2 - y
		// console.log(this.area)

		/* --- try me --- */
		// this.$el.style.transform = `translateX(${x}px) translateY(${y}px)`
		/*--- try me --- */
		
		/* Here your circle isn't centered with the mouse.
		You need to substract half width and height of your circle */
		
		const {clientWidth: w, clientHeight: h} = this.$el;
		
		/* --- try me --- */
		// this.$el.style.transform = `translateX(${x - w/2}px) translateY(${y - h/2}px)`
		/*--- try me --- */
		
		/* Then you can add gsap by doing this */
		///*
			gsap.to(this.$el, {
				x: x - w/2,
				y: y - h/2,
				force3D: true, /* translate3d is better for performances */
				opacity: 1,
				
				/* try me */
				delay: .1, /* Delay add following effect */
				ease: "power4.out",
				/* try me */
				
				/* try me */
				//duration: 2,
				//ease: "elastic.out(.7, .1)"
				/* try me */
			})
		//*/
	}
	
	_onMouseOver(evt, toggleValue, classAttr) {
		this.$el.classList.toggle(classAttr, toggleValue)
	}
}


document.addEventListener('DOMContentLoaded', () => {
	/* This is not a usefull structure for codepend but in a scalable project. */
	
	const $cursor = document.querySelector(".cursor"); /* $ == quick visual reminder -> Is a DOM element */
	
	if($cursor) new FollowTheCursor({ $el: $cursor }); 
})
