import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponse, LoginRequest, OrganizationContext, OrganizationOption, User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly API = 'http://localhost:8084/api/auth';
  private readonly TOKEN_KEY = 'session_token';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  currentUser = signal<User | null>(null);
  currentOrganization = signal<OrganizationContext | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API}/login`, credentials).pipe(
      tap(res => {
        console.log('[AuthService] login response fields', {
          id: res.id,
          email: res.email,
          fullName: res.fullName,
          role: res.role,
          tokenLength: res.token?.length ?? 0,
        });
        this.setToken(res.token);
        this.currentUser.set({
          id: res.id,
          email: res.email,
          fullName: res.fullName,
          role: res.role as User['role']
        });
        this.loadOrganizationContext();
      })
    );
  }

  logout(): void {
    this.http.post(`${this.API}/logout`, {}).subscribe();
    this.clearSession();
    this.router.navigate(['/auth/login']);
  }

  fetchMe(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.API}/me`).pipe(
      tap(res => {
        console.log('[AuthService] /me response fields', {
          id: res.id,
          email: res.email,
          fullName: res.fullName,
          role: res.role,
        });
      }),
      tap(res => this.currentUser.set({
        id: res.id,
        email: res.email,
        fullName: res.fullName,
        role: res.role as User['role']
      })),
      tap(() => this.loadOrganizationContext())
    );
  }

  fetchOrganizationContext(): Observable<OrganizationContext> {
    return this.http.get<OrganizationContext>(`${this.API}/me/organization`).pipe(
      tap(org => {
        console.log('[AuthService] /me/organization response fields', {
          organizationId: org.organizationId,
          organizationName: org.organizationName,
          organizationSlug: org.organizationSlug,
          organizationType: org.organizationType,
          membershipRole: org.membershipRole,
        });
      }),
      tap(org => this.currentOrganization.set(org))
    );
  }

  fetchOrganizationOptions(): Observable<OrganizationOption[]> {
    return this.http.get<OrganizationOption[]>(`${this.API}/me/organizations`).pipe(
      tap(rows => {
        console.log('[AuthService] /me/organizations raw response', rows);
        rows.forEach((row, index) => {
          console.log(`[AuthService] /me/organizations row[${index}]`, {
            organizationId: row.organizationId,
            organizationName: row.organizationName,
            organizationSlug: row.organizationSlug,
            organizationType: row.organizationType,
            membershipRole: row.membershipRole,
          });
        });
      })
    );
  }

  getToken(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken() && !!this.currentUser();
  }

  private setToken(token: string): void {
    if (this.isBrowser) localStorage.setItem(this.TOKEN_KEY, token);
  }

  clearSession(): void {
    if (this.isBrowser) localStorage.removeItem(this.TOKEN_KEY);
    this.currentUser.set(null);
    this.currentOrganization.set(null);
  }

  private loadOrganizationContext(): void {
    this.fetchOrganizationContext()
      .pipe(
        catchError((error) => {
          console.error('[AuthService] Failed to load organization context', error);
          this.currentOrganization.set(null);
          return of(null);
        })
      )
      .subscribe();
  }
}
