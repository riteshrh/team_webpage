import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit {
  selectedImages: any[] = [];
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ESSP')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Incompatible Same Octopus',
      },
    ])
  }

  ngOnInit(){

  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.selectedImages.push(e.target.result);
        };

        reader.readAsDataURL(files[i]);
      }
    }
  }
}
