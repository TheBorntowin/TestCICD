import { Injectable, computed, inject } from "@angular/core";
import { AuthService } from "../../../auth/auth.service";
import { M2WorkspaceMember } from "./m2-workspace.service";

@Injectable({ providedIn: "root" })
export class WorkspacePermissionService {
    private readonly authService = inject(AuthService);

    readonly userRole = computed(() => (this.authService.currentUser()?.role || "").toUpperCase());
    readonly organizationMembershipRole = computed(() => (this.authService.currentOrganization()?.membershipRole || "").toUpperCase());

    readonly isGlobalAdmin = computed(() => this.userRole() === "SUPER_ADMIN" || this.userRole() === "ADMIN");
    readonly isOrgAdmin = computed(() => this.organizationMembershipRole() === "ADMIN" || this.organizationMembershipRole() === "OWNER");
    readonly isManager = computed(() => this.userRole() === "MANAGER");
    readonly isTutor = computed(() => this.userRole() === "TUTOR");

    readonly canCreateWorkspace = computed(() => this.isGlobalAdmin() || this.isOrgAdmin() || this.isManager() || this.isTutor());
    readonly canManageByRole = computed(() => this.isGlobalAdmin() || this.isOrgAdmin() || this.isManager() || this.isTutor());

    canOpenWorkspaceFromList(workspaceId: string | null | undefined): boolean {
        return !!workspaceId && !!this.authService.currentUser();
    }

    getWorkspaceRoleForCurrentUser(members: M2WorkspaceMember[]): string | null {
        const userId = this.authService.currentUser()?.id;
        if (!userId) {
            return null;
        }

        const member = members.find((m) => m.userId === userId);
        return member?.role?.toUpperCase() || null;
    }

    canManageWorkspace(members: M2WorkspaceMember[]): boolean {
        if (this.canManageByRole()) {
            return true;
        }

        const workspaceRole = this.getWorkspaceRoleForCurrentUser(members);
        return workspaceRole === "OWNER" || workspaceRole === "ADMIN" || workspaceRole === "MANAGER";
    }

    isReadOnlyWorkspace(members: M2WorkspaceMember[]): boolean {
        const isWorkspaceMember = !!this.getWorkspaceRoleForCurrentUser(members);
        return isWorkspaceMember && !this.canManageWorkspace(members);
    }
}
