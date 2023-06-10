import { Component, OnInit, EventEmitter, Output, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthFacade } from '@rollthecloudinc/auth';
import { Router } from '@angular/router';
import { PublicApiBridgeService } from '@rollthecloudinc/bridge';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs';

declare var bridge: PublicApiBridgeService;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Spearhead Docs';
  // user$: Observable<User>;
  isAuthenticated: boolean;
  manage = false;
  @Output()
  menuClicked = new EventEmitter();
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private authFacade: AuthFacade, 
    private router: Router,
    private routerStore: Store<RouterReducerState>,
    publicApiBridge: PublicApiBridgeService
  ) {
    if (isPlatformBrowser(platformId)) {
      bridge = publicApiBridge;
    }
    /*this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );*/
  }
  ngOnInit() {
    const { selectCurrentRoute } = getSelectors((state: any) => state.router);
    this.authFacade.getUser$.subscribe(u => {
      this.isAuthenticated = !!u;
    });
    this.routerStore.pipe(
      select(selectCurrentRoute),
      tap(route => {
        this.manage = route.url.filter(r => r.path === 'manage').length !== 1;
      })
    ).subscribe();
    /*this.oktaAuth.isAuthenticated().then((value) => {
      this.isAuthenticated = value;
    });*/
  }
  login() {
    this.authFacade.login();
    // this.oktaAuth.loginRedirect();
  }

  menuClick() {
    this.menuClicked.emit();
  }
}
