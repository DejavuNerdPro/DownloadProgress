import { Component, Inject,OnInit } from '@angular/core';
import { DownloadServiceService } from '../download-service.service';
import { Download } from '../download';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-dejavu-download',
  templateUrl: './dejavu-download.component.html',
  styleUrls: ['./dejavu-download.component.css']
})
export class DejavuDownloadComponent implements OnInit {
  slides = 
  {name: 'Zipping file', url: 'https://secure.downloadfp.com/US/microsoft-powerpoint.exe?st=rjSJVL6BMzFYYKmlNuopTg&e=1671301672'}

download$!: Observable<Download>


constructor(private downloads: DownloadServiceService,
            @Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
  }

download({name, url}: {name: string, url: string}) {
  this.download$ = this.downloads.download(url, name);
}
}
