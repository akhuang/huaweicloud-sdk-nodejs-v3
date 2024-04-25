import { AppComponentDao } from './AppComponentDao';
import { Step } from './Step';


export class TaskV2Info {
    public id?: string;
    public name?: string;
    public state?: string;
    public description?: string;
    public owner?: string;
    public steps?: { [key: string]: Step; };
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'deploy_system'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'role_id'?: number;
    private 'is_defaut_permission'?: boolean;
    private 'template_id'?: string;
    private 'nick_name'?: string;
    private 'owner_id'?: string;
    private 'tenant_id'?: string;
    private 'tenant_name'?: string;
    private 'slave_cluster_id'?: string;
    private 'is_care'?: boolean;
    private 'can_modify'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_view'?: boolean;
    private 'can_execute'?: boolean;
    private 'can_copy'?: boolean;
    private 'can_manage'?: boolean;
    private 'can_create_env'?: boolean;
    private 'can_disable'?: boolean;
    private 'app_component_list'?: Array<AppComponentDao>;
    private 'release_id'?: number;
    private 'app_id'?: string;
    private 'is_disable'?: boolean;
    public constructor() { 
    }
    public withId(id: string): TaskV2Info {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TaskV2Info {
        this['name'] = name;
        return this;
    }
    public withState(state: string): TaskV2Info {
        this['state'] = state;
        return this;
    }
    public withDescription(description: string): TaskV2Info {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): TaskV2Info {
        this['owner'] = owner;
        return this;
    }
    public withSteps(steps: { [key: string]: Step; }): TaskV2Info {
        this['steps'] = steps;
        return this;
    }
    public withProjectId(projectId: string): TaskV2Info {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): TaskV2Info {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDeploySystem(deploySystem: string): TaskV2Info {
        this['deploy_system'] = deploySystem;
        return this;
    }
    public set deploySystem(deploySystem: string  | undefined) {
        this['deploy_system'] = deploySystem;
    }
    public get deploySystem(): string | undefined {
        return this['deploy_system'];
    }
    public withCreateTime(createTime: string): TaskV2Info {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): TaskV2Info {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withRoleId(roleId: number): TaskV2Info {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withIsDefautPermission(isDefautPermission: boolean): TaskV2Info {
        this['is_defaut_permission'] = isDefautPermission;
        return this;
    }
    public set isDefautPermission(isDefautPermission: boolean  | undefined) {
        this['is_defaut_permission'] = isDefautPermission;
    }
    public get isDefautPermission(): boolean | undefined {
        return this['is_defaut_permission'];
    }
    public withTemplateId(templateId: string): TaskV2Info {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withNickName(nickName: string): TaskV2Info {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withOwnerId(ownerId: string): TaskV2Info {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withTenantId(tenantId: string): TaskV2Info {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withTenantName(tenantName: string): TaskV2Info {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withSlaveClusterId(slaveClusterId: string): TaskV2Info {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withIsCare(isCare: boolean): TaskV2Info {
        this['is_care'] = isCare;
        return this;
    }
    public set isCare(isCare: boolean  | undefined) {
        this['is_care'] = isCare;
    }
    public get isCare(): boolean | undefined {
        return this['is_care'];
    }
    public withCanModify(canModify: boolean): TaskV2Info {
        this['can_modify'] = canModify;
        return this;
    }
    public set canModify(canModify: boolean  | undefined) {
        this['can_modify'] = canModify;
    }
    public get canModify(): boolean | undefined {
        return this['can_modify'];
    }
    public withCanDelete(canDelete: boolean): TaskV2Info {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanView(canView: boolean): TaskV2Info {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanExecute(canExecute: boolean): TaskV2Info {
        this['can_execute'] = canExecute;
        return this;
    }
    public set canExecute(canExecute: boolean  | undefined) {
        this['can_execute'] = canExecute;
    }
    public get canExecute(): boolean | undefined {
        return this['can_execute'];
    }
    public withCanCopy(canCopy: boolean): TaskV2Info {
        this['can_copy'] = canCopy;
        return this;
    }
    public set canCopy(canCopy: boolean  | undefined) {
        this['can_copy'] = canCopy;
    }
    public get canCopy(): boolean | undefined {
        return this['can_copy'];
    }
    public withCanManage(canManage: boolean): TaskV2Info {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCanCreateEnv(canCreateEnv: boolean): TaskV2Info {
        this['can_create_env'] = canCreateEnv;
        return this;
    }
    public set canCreateEnv(canCreateEnv: boolean  | undefined) {
        this['can_create_env'] = canCreateEnv;
    }
    public get canCreateEnv(): boolean | undefined {
        return this['can_create_env'];
    }
    public withCanDisable(canDisable: boolean): TaskV2Info {
        this['can_disable'] = canDisable;
        return this;
    }
    public set canDisable(canDisable: boolean  | undefined) {
        this['can_disable'] = canDisable;
    }
    public get canDisable(): boolean | undefined {
        return this['can_disable'];
    }
    public withAppComponentList(appComponentList: Array<AppComponentDao>): TaskV2Info {
        this['app_component_list'] = appComponentList;
        return this;
    }
    public set appComponentList(appComponentList: Array<AppComponentDao>  | undefined) {
        this['app_component_list'] = appComponentList;
    }
    public get appComponentList(): Array<AppComponentDao> | undefined {
        return this['app_component_list'];
    }
    public withReleaseId(releaseId: number): TaskV2Info {
        this['release_id'] = releaseId;
        return this;
    }
    public set releaseId(releaseId: number  | undefined) {
        this['release_id'] = releaseId;
    }
    public get releaseId(): number | undefined {
        return this['release_id'];
    }
    public withAppId(appId: string): TaskV2Info {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withIsDisable(isDisable: boolean): TaskV2Info {
        this['is_disable'] = isDisable;
        return this;
    }
    public set isDisable(isDisable: boolean  | undefined) {
        this['is_disable'] = isDisable;
    }
    public get isDisable(): boolean | undefined {
        return this['is_disable'];
    }
}