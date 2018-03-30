import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { ErrComponent } from '../newtest/err/err.component';

// @Injectable()
// export class NavService {

//     constructor(private router: Router) { }

//     public navToPage(name: string) {
//         const result = routes.find(e => e.path === name );
//         if (result) {
//             this.router.navigate([name]);
//         } else {
//             console.log('there is no route!');
//         }
//     }
// }

@Injectable()
export class NavService {

    constructor(private router: Router) { }

    public navToPage(name: string) {
        const result = routes.find(e => e.path === name );
        if (result) {
            this.router.navigate([name]);
        } else {
            this.router.navigate([ErrComponent]);
            console.log('there is no route!');
        }
    }
}
