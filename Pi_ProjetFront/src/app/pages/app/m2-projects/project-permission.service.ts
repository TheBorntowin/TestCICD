import { Injectable, computed, inject } from "@angular/core";
import { WorkspacePermissionService } from "../m2-workspaces/workspace-permission.service";

@Injectable({ providedIn: "root" })
export class ProjectPermissionService {
    private readonly workspacePermissions = inject(WorkspacePermissionService);

    readonly canCreateProject = computed(() =>
        this.workspacePermissions.isGlobalAdmin()
        || this.workspacePermissions.isOrgAdmin()
        || this.workspacePermissions.isManager()
        || this.workspacePermissions.isTutor()
    );

    readonly canManageProject = computed(() =>
        this.workspacePermissions.isGlobalAdmin()
        || this.workspacePermissions.isOrgAdmin()
        || this.workspacePermissions.isManager()
        || this.workspacePermissions.isTutor()
    );
}
