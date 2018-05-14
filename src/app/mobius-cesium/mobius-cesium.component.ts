import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './data/data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'mobius-cesium',
  templateUrl: './mobius-cesium.component.html',
  styleUrls: ['./mobius-cesium.component.scss'],
  animations: [
    trigger('slide_in_out', [
      state('slide_in', style({
        width: '280px',
        // css styles when the element is in slide_in
      })),
      state('slide_out', style({
        width: '0px'
        // css styles when the element is in slide_out
      })),
      // animation effect when transitioning from one state to another
      transition('slide_in <=> slide_out', animate(300))
    ]),
  ]
})
export class MobiuscesiumComponent {
	@Input() data: JSON;
  @Input() mode: string;
	showFiller:boolean;

	constructor(private dataService: DataService){

  	};
	setModel(data: JSON): void{
		try{
			this.dataService.setGsModel(data);
      console.log("mode: ", this.mode);
		}
		catch(ex){
			this.data = undefined;
			//console.error("Error generating model");

		}
	}
	ngOnInit() {
		this.setModel(this.data);
    console.log("Setting", this.mode)
    this.dataService.setMode(this.mode);
    console.log(this.data);

	}
	ngDoCheck(){
		if(this.dataService.getGsModel() !== this.data){
			this.setModel(this.data);
      console.log("data changed");
      console.log("mode:", this.mode);
		}
	}
	slider_state:string = "slide_out";
  	toggleSlider(): void{
    // do something to change the animation_state variable
    	this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
    	var toggle=document.getElementById("Toggle");
    	if(this.slider_state === 'slide_out'){
    	  toggle.style.left="0px";
        toggle.innerHTML="▹";
    	}else if(this.slider_state === 'slide_in'){
    	  toggle.style.left="280px";
        toggle.innerHTML="◃";

    	}
  	}
}