// burger
let burger = document.getElementById('burger');
let navigation = document.getElementById('navigation');
burger.addEventListener('click', function(){
    this.classList.toggle('active');
    nav.classList.toggle('active');
});

// show-info
let icons = document.getElementsByClassName('show_info');
for (let i = 0; i < icons.length; i++){
	let icon = icons[i];

	icon.addEventListener('click', function(event){
		for (let i2 = 0; i2 < icons.length; i2++) {
			if (i2 != i) {
				icons[i2].parentNode.nextElementSibling.classList.remove('active');
			}
        }
        this.parentNode.nextElementSibling.classList.toggle('active')
    });
}

// add button
let add_buttons = document.getElementsByClassName('add');
for (let i = 0; i < add_buttons.length; i++) {
    add_buttons[i].addEventListener('click', function(){
            this.classList.toggle('active');
    });
}