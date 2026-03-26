export interface User {
  id: number;
  email: string;
  fullName: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'EMPLOYEE' | 'TUTOR' | 'PRODUCT_OWNER' | 'STUDENT' | 'VIEWER';
}

export interface OrganizationContext {
  organizationId: string;
  organizationName: string;
  organizationSlug: string;
  organizationType: string;
  membershipRole: string;
}

export interface OrganizationOption {
  organizationId: string;
  organizationName: string;
  organizationSlug: string;
  organizationType: string;
  membershipRole: string;
}

export interface AuthResponse {
  token: string;
  id: number;
  email: string;
  fullName: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
