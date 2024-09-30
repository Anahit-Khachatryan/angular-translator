import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { propertyLook } from '../utilis/property-lookup';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular_translator';
  obj = {
    prop: {
      nestedProp: {
        nestedNestedProp: 5
      }
    }
  }

  constructor(private translate: TranslateService) {
    console.log('translate', this.translate)
    // this.translate.addLangs(['am', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
       console.log(propertyLook('prop.nestedProp',this.obj))
  }

  handleLanguageChange(lang: string) {
    console.log(this.translate.currentLang);
    this.translate.use(lang)
  }
}


// export class TestModule {
//   static forRoot(): ModuleWithProviders<TestModule> {
//     return { 
//       ngModule: TestModule,
//       providers: []
//     }
//   }

//   static forChilst(): ModuleWithProviders<TestModule> {
//     return { 
//       ngModule: TestModule,
//       providers: []
//     }
//   }
// }