// import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
// import { Lightbox } from 'ng-gallery/lightbox';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class HomeComponent implements OnInit {

//   items: GalleryItem[];

//   imageData = data;

//   constructor(public gallery: Gallery, public lightbox: Lightbox) {
//   }

//   ngOnInit() {

//     /** Basic Gallery Example */

//     // Creat gallery items
//     this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


//     /** Lightbox Example */

//     // Get a lightbox gallery ref
//     const lightboxRef = this.gallery.ref('lightbox');

//     // Add custom gallery config to the lightbox (optional)
//     lightboxRef.setConfig({
//       imageSize: ImageSize.Cover,
//       thumbPosition: ThumbnailsPosition.Top
//     });

//     // Load items into the lightbox gallery ref
//     lightboxRef.load(this.items);
//   }
// }

// const data = [
//   {
//     srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
//     previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
//   },
//   {
//     srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
//     previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
//   },
//   {
//     srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
//     previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
//   },
//   {
//     srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
//     previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
//   }
// ];

import { Component,ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryRef } from 'ng-gallery';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css'],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  galleryId = 'mixedExample';

  constructor(private gallery: Gallery) { }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    galleryRef.addImage({
      src: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      thumb: 'https://preview.ibb.co/jrsA6R/img12.jpg'
    });

    galleryRef.addVideo({
      src: 'VIDEO_URL',
      thumb: '(OPTIONAL)VIDEO_THUMBNAIL_URL',
      poster: '(OPTIONAL)VIDEO_POSTER_URL'
    });

    // Video with multiple source urls
    galleryRef.addVideo({
      src: [
         { url: 'MP4_URL', type: 'video/mp4' },
         { url: 'OGG_URL', type: 'video/ogg' }
      ],
      thumb: '(OPTIONAL)VIDEO_THUMBNAIL_URL',
      poster: '(OPTIONAL)VIDEO_POSTER_URL'
    });

    galleryRef.addYoutube({
      src: 'VIDEO_ID'
    });

    galleryRef.addIframe({
      src: 'IFRAME_URL',
      thumb: '(OPTIONAL)IMAGE_THUMBNAIL_URL'
    });
  }
}