import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GalleryCard3 } from './gallery-card3/gallery-card3.component'
import { FeatureCard } from './feature-card/feature-card.component'

@NgModule({
  declarations: [GalleryCard3, FeatureCard],
  imports: [CommonModule, RouterModule],
  exports: [GalleryCard3, FeatureCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
