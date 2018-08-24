import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'v32o1ku6vz1k',
  accessToken: 'bacbcc754cea62b7a74c33d46f23254939058ac4f9b81069df61571905183f46',

  contentTypeIds: {
    product: ''
  }
};

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  constructor() { }

}
